import "./App.css";
import { Link, useLocation } from "react-router";
import Card from "./Card";
import Header from "./Header";
import Shimmer from "./Shimmer";
import React, { useEffect } from "react";
import useOnlineStatus from "./useOnlineStatus";
import useContainer from "./useContainer";

function Container() {
  const {
    filteredData,
    setFilteredData,
    allData,
    setAllData,
    newFData,
    setnewFData,
  } = useContainer();

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setFilteredData(allData);
      setnewFData(allData);
    }
  }, [location.key, location.pathname, allData, setFilteredData, setnewFData]);

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <div>
        <h1>Offline</h1>
      </div>
    );
  }

  return filteredData.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <Header
        filteredData={allData}
        setFilteredData={setFilteredData}
        setnewFData={setnewFData}
      />

      <div id="filter">
        <button
          onClick={() => {
            const topRated = allData.filter(
              (item) => item.info.avgRating > 4.5
            );
            setnewFData(topRated);
          }}
        >
          TOP RATING
        </button>

      
      </div>

      <div id="new">
        {newFData.map((item) => (
          <Link
            key={item.info.id}
            id="OK"
            to={"/Restaurants-Menu/" + item.info.id}
          >
            <Card newData={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Container;
