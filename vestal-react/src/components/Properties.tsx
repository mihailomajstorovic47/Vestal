import Property from "../model/Property";
import { BsXCircleFill, BsFillCheckCircleFill } from "react-icons/bs";
import { MdInfo } from "react-icons/md";
import { ImPriceTag } from "react-icons/im";
import { FaLocationDot } from "react-icons/fa6";

interface Props {
  properties: Property[];
  numOfDays: number;
}

const Properties = ({ properties, numOfDays }: Props) => {
  return (
    <>
      <div
        className="container-fluid text-center"
        style={{ marginBlock: "2%", paddingRight: "3%", paddingLeft: "3%" }}
      >
        <div className="row row-cols-1 row-cols-md-3 g-5">
          {properties.map((property) => (
            <div className="col-md-3" key={property.id}>
              <div
                className="card text-white bg-dark"
                style={{
                  borderStyle: "solid",
                  borderColor: "black",
                  borderRadius: "2%",
                  borderWidth: "3px",
                }}
              >
                <img
                  style={{
                    borderStyle: "solid",
                    borderColor: "black",
                    borderRadius: "2%",
                    borderWidth: "2px",
                    aspectRatio: "4/3",
                  }}
                  src={property.image}
                  className="card-img-top"
                  alt="..."
                ></img>
                <div className="card-body ">
                  <h5 className="card-title">{property.name}</h5>
                  <hr />
                  <div className="row">
                    <p className="card-text">
                      <FaLocationDot
                        size="28"
                        style={{
                          marginRight: "4%",
                        }}
                      />
                      {property.city}, {property.country}
                    </p>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-6">
                      {property.availability && (
                        <p className="card-text">
                          <BsFillCheckCircleFill
                            size="28"
                            style={{ marginRight: "6%" }}
                            color="green"
                          />
                          Availabile
                        </p>
                      )}
                      {!property.availability && (
                        <p className="card-text">
                          <BsXCircleFill
                            size="28"
                            style={{ marginRight: "6%" }}
                            color="red"
                          />
                          Not Available
                        </p>
                      )}
                    </div>
                    <div className="col-sm-6">
                      {numOfDays !== 0 && (
                        <p className="card-text">
                          <ImPriceTag size="28" style={{ marginRight: "5%" }} />
                          ${property.price * numOfDays} ({numOfDays} days)
                        </p>
                      )}
                    </div>
                  </div>
                  <hr />
                  <div className="row" style={{ aspectRatio: "17/10" }}>
                    <p className="card-text">
                      <MdInfo size="35" style={{ marginBottom: "1%" }} />
                      <br />
                      {property.information}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <br />
        {properties.length !== 0 && (
          <h3>
            <br />
            Showing {properties.length} out of {properties.length} results
          </h3>
        )}
      </div>
    </>
  );
};

export default Properties;
