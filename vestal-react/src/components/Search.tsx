import { useRef, useState } from "react";
import Swal from "sweetalert2";
import Query from "../model/Query";

const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState<Query>({
    location: "",
    dateStart: "",
    dateEnd: "",
  });

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

  const handleChange = () => {
    setQuery({ ...query, location: "" });
    inputRef.current?.removeAttribute("disabled");
    inputRef.current?.focus();
  };

  const search = () => {
    if (isLocationSelected()) {
      if (areDatesSelected()) {
        if (validateDates()) {
          Swal.fire({
            title: "Great",
            text: "All good !",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
          });
        } else {
          Swal.fire({
            title: "Error",
            text: "Please, pick valid dates. Start date must be before end date.",
            icon: "error",
            showConfirmButton: false,
            timer: 2000,
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
    console.log(query);
  };

  return (
    <>
      <div className="container-fluid text-center" style={{ marginTop: "2%" }}>
        <div className="row">
          <div className="col-sm-3 mb-2">
            <select
              id="combobox"
              className="form-select bg-secondary text-light"
              onChange={handleChange}
            >
              <option selected disabled>
                Search by...
              </option>
              <option value="city">City</option>
              <option value="county">Country</option>
            </select>
            <input
              value={query.location}
              onChange={(event) => {
                setQuery({ ...query, location: event.target.value });
              }}
              ref={inputRef}
              id="location"
              type="text"
              disabled
              className="form-control"
              placeholder="Enter search text..."
            />
          </div>
          <div className="col-sm-3 mb-2">
            <span className="input-group-text bg-secondary text-light">
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
          <div className="col-sm-3 mb-2">
            <span className="input-group-text bg-secondary text-light">
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
          <div className="col-sm-3 my-auto">
            <button
              type="button"
              onClick={search}
              className="btn btn-lg btn-outline-secondary"
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
