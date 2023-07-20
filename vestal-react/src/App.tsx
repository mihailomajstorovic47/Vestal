import { useState } from "react";
import Search from "./components/Search";
import Properties from "./components/Properties";

import "./App.css";
import Property from "./model/Property";

function App() {
  const [properties, setProperties] = useState<Property[]>([
    {
      id: 1,
      name: "Property1",
      city: "City1",
      country: "Country1",
      price: 300,
      availability: true,
      information: "information1",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/152527660.jpg?k=6a861f3db25e53d8b6941254516b3e5f1ecef2560e2e52def7e3b7d835349e8b&o=&hp=1",
    },
    {
      id: 2,
      name: "Property2",
      city: "City2",
      country: "Country2",
      price: 300,
      availability: true,
      information: "information2",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/152527660.jpg?k=6a861f3db25e53d8b6941254516b3e5f1ecef2560e2e52def7e3b7d835349e8b&o=&hp=1",
    },
    {
      id: 3,
      name: "Property3",
      city: "City3",
      country: "Country3",
      price: 300,
      availability: false,
      information: "information3",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/152527660.jpg?k=6a861f3db25e53d8b6941254516b3e5f1ecef2560e2e52def7e3b7d835349e8b&o=&hp=1",
    },
    {
      id: 4,
      name: "Property4",
      city: "City3",
      country: "Country3",
      price: 300,
      availability: true,
      information: "information4",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/152527660.jpg?k=6a861f3db25e53d8b6941254516b3e5f1ecef2560e2e52def7e3b7d835349e8b&o=&hp=1",
    },
  ]);

  return (
    <div className="App">
      <div className="container-fluid">
        <Search />
        <Properties properties={properties} />
      </div>
    </div>
  );
}

export default App;
