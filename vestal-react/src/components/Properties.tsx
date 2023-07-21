import Property from "../model/Property";
import { BsXCircleFill, BsFillCheckCircleFill } from "react-icons/bs";

interface Props {
  properties: Property[];
  numOfDays: number;
}

const Properties = ({ properties, numOfDays }: Props) => {
  return (
    <>
      <div
        className="container-fluid text-center"
        style={{ marginBlock: "3%", paddingRight: "3%", paddingLeft: "3%" }}
      >
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {properties.map((property) => (
            <div className="col" key={property.id}>
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
                  <p className="card-text">
                    Location: {property.city}, {property.country}
                  </p>
                  <p className="card-text">Info: {property.information}</p>
                  {numOfDays !== 0 && (
                    <p className="card-text">
                      Price: ${property.price * numOfDays} ({numOfDays} days)
                    </p>
                  )}
                  {property.availability && (
                    <h5 className="card-text">
                      <div className="alert alert-success" role="alert">
                        Availability:
                        <BsFillCheckCircleFill
                          size="25"
                          style={{ marginLeft: "2%" }}
                        />
                      </div>
                    </h5>
                  )}
                  {!property.availability && (
                    <h5 className="card-text">
                      <div className="alert alert-danger" role="alert">
                        Availability:
                        <BsXCircleFill size="25" style={{ marginLeft: "2%" }} />
                      </div>
                    </h5>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Properties;
