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
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/a1/9c/80/essentia-luxury-hotel.jpg?w=700&h=-1&s=1",
    },
    {
      id: 5,
      name: "Property5",
      city: "City5",
      country: "Country5",
      price: 220,
      availability: false,
      information: "information5",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/152527660.jpg?k=6a861f3db25e53d8b6941254516b3e5f1ecef2560e2e52def7e3b7d835349e8b&o=&hp=1",
    },
  ]);

  const [numOfDays, setNumOfDays] = useState(0);

  const calculateNumOfDays = (dateStart: string, dateEnd: string) => {
    let date1 = new Date(dateStart);
    let date2 = new Date(dateEnd);
    let difference = date2.getTime() - date1.getTime();
    let totalDays = Math.ceil(difference / (1000 * 3600 * 24));
    console.log(totalDays);
    setNumOfDays(totalDays);
    return totalDays;
  };

  return (
    <div className="App">
      <div className="container-fluid">
        <Search calculateNumOfDays={calculateNumOfDays} />
        <Properties properties={properties} numOfDays={numOfDays} />
      </div>
    </div>
  );
}

export default App;
