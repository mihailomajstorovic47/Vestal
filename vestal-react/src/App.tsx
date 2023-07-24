import { useState } from "react";
import Search from "./components/Search";
import Properties from "./components/Properties";

import "./App.css";
import Property from "./model/Property";

function App() {
  const [properties, setProperties] = useState<Property[]>([]);

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

  const updateProperties = (properties: any) => {
    console.log(properties);
    setProperties(properties);
  };

  return (
    <div className="App">
      <div className="container-fluid">
        <Search
          updateProperties={updateProperties}
          calculateNumOfDays={calculateNumOfDays}
        />
        <Properties properties={properties} numOfDays={numOfDays} />
      </div>
    </div>
  );
}

export default App;
