import axios from "axios";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import Query from "../model/Query";

interface Props {
  calculateNumOfDays: (dateStart: string, dateEnd: string) => void;
  updateProperties: (properties: any) => void;
}

const Search = ({ calculateNumOfDays, updateProperties }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [countries, setCountries] = useState<string[]>([]);

  const [query, setQuery] = useState<Query>({
    locationType: "",
    location: "",
    dateStart: "",
    dateEnd: "",
  });

  useEffect(() => {
    getCities();
    getCountries();
  }, []);

  function getCountries() {
    axios
      .get("http://localhost:5219/countries")
      .then((response) => {
        setCountries(response.data);
        setSuggestions(response.data);
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  }

  function getCities() {
    axios
      .get("http://localhost:5219/cities")
      .then((response) => {
        setCities(response.data);
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  }

  function areDatesSelected(): boolean {
    return query.dateStart !== "" && query.dateEnd !== "";
  }

  function tommorowDate() {
    var result = new Date();
    result.setDate(result.getDate() + 1);
    return result;
  }

  function minDateStart(): string {
    let date = new Date();
    const month = date.getMonth() < 12 ? date.getMonth() + 1 : 1;
    const monthString = month < 10 ? "0" + month : month;
    return date.getFullYear() + "-" + monthString + "-" + date.getDate();
  }

  function minDateEnd(): string {
    let date = tommorowDate();
    const month = date.getMonth() < 12 ? date.getMonth() + 1 : 1;
    const monthString = month < 10 ? "0" + month : month;
    return date.getFullYear() + "-" + monthString + "-" + date.getDate();
  }

  function isLocationSelected(): boolean {
    return query.location !== "";
  }

  function validateDates(): boolean {
    return new Date(query.dateStart) < new Date(query.dateEnd);
  }

  function searchProperties() {
    axios
      .get("http://localhost:5219/search", { params: query })
      .then((response) => {
        updateProperties(response.data);
        calculateNumOfDays(query.dateStart, query.dateEnd);
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  }

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setQuery({
      ...query,
      locationType: event.target.value,
      location: "",
    });
    if (event.target.value === "city") {
      setSuggestions(cities);
    } else if (event.target.value === "country") {
      setSuggestions(countries);
    }
    inputRef.current?.removeAttribute("disabled");
    inputRef.current?.focus();
  };

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery({ ...query, location: event.target.value });
  };

  const search = () => {
    if (isLocationSelected()) {
      if (areDatesSelected()) {
        if (validateDates()) {
          searchProperties();
        } else {
          Swal.fire({
            title: "Error",
            text: "Please, pick valid dates. Start date must be before end date.",
            icon: "error",
            showConfirmButton: false,
            timer: 3000,
          });
        }
      } else {
        Swal.fire({
          title: "Error",
          text: "Please, pick both start and end dates.",
          icon: "error",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    } else {
      Swal.fire({
        title: "Error",
        text: "Please, enter a city/country you'd like to visit.",
        icon: "error",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  return (
    <>
      <div className="container-fluid text-left" style={{ marginTop: "1%" }}>
        <div className="row">
          <div className="col-md-3 mb-2" style={{ position: "relative" }}>
            <select
              id="combobox"
              className="form-select bg-primary text-light"
              onChange={handleChange}
            >
              <option selected disabled>
                Search by...
              </option>
              <option value="city">City</option>
              <option value="country">Country</option>
            </select>
            <input
              value={query.location}
              onChange={onInputChange}
              ref={inputRef}
              id="location"
              type="text"
              disabled
              className="form-control"
              placeholder="Enter search text..."
            />
            <ul
              className="list-group"
              style={{ position: "absolute", zIndex: "1", width: "95%" }}
            >
              {query.location !== "" &&
                suggestions
                  .filter((item) => {
                    return (
                      item
                        .trim()
                        .toLowerCase()
                        .startsWith(query.location.trim().toLowerCase()) &&
                      query.location !== item
                    );
                  })
                  .slice(0, 10)
                  .map((suggestion) => (
                    <li
                      key={suggestion}
                      className="list-group-item list-group-item-action list-group-item-light"
                      onClick={() => {
                        setQuery({ ...query, location: suggestion });
                        inputRef.current!.value = suggestion;
                      }}
                    >
                      {suggestion}
                    </li>
                  ))}
            </ul>
          </div>
          <div className="col-md-3 mb-2">
            <span className="input-group-text bg-primary text-light">
              Start Date
            </span>
            <input
              id="dateStart"
              type="date"
              className="form-control"
              min={minDateStart()}
              value={query.dateStart}
              onChange={(event) => {
                setQuery({ ...query, dateStart: event.target.value });
              }}
            />
          </div>
          <div className="col-md-3 mb-2">
            <span className="input-group-text bg-primary text-light">
              End Date
            </span>
            <input
              id="dateEnd"
              type="date"
              className="form-control"
              min={minDateEnd()}
              value={query.dateEnd}
              onChange={(event) => {
                setQuery({ ...query, dateEnd: event.target.value });
              }}
            />
          </div>
          <div className="col-md-3 my-auto text-center">
            <button
              type="button"
              onClick={search}
              className="btn btn-lg btn-outline-primary"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
