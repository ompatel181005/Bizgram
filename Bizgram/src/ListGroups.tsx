import "bootstrap/dist/js/bootstrap.bundle.min";
import { SetStateAction, useState } from "react";

const Addresses = ["Western", "PS", "LM 500", "Taylors", "Uni Village"];

function ListGroup() {
  const [selectedAddress, setSelectedAddress] = useState("Select Address");

  const handleAddressClick = (address: SetStateAction<string>) => {
    setSelectedAddress(address); // Update button text
    console.log("Selected Address:", address); // Log selected address
  };
  return (
    <>
      <h1>Addresses</h1>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Select Address
        </button>
        <ul className="dropdown-menu">
          {Addresses.map((address, index) => (
            <li key={index}>
              <button
                type="button"
                className="btn"
                onClick={() => handleAddressClick(address)}
              >
                <a className="dropdown-item" href="#">
                  {address}
                </a>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListGroup;
