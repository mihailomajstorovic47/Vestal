import Property from "../model/Property";
import { BsXCircleFill, BsFillCheckCircleFill } from "react-icons/bs";

interface Props {
  properties: Property[];
}

const Properties = ({ properties }: Props) => {
  return (
    <>
      <div
        className="container-fluid text-center"
        style={{ marginBlock: "3%" }}
      >
        <div className="row row-cols-1 row-cols-md-3 g-4">
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
                  <p className="card-text">Price: ${property.price}</p>
                  {property.availability && (
                    <h5 className="card-text">
                      <div className="alert alert-success" role="alert">
                        Available
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
                        Not available
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
