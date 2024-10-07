import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Summayapi from "../common";
import { VerticalCard } from "../components/SearchCard";

const SearchProduct = () => {
  const query = useLocation();
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  console.log("query", query.search);

  const fetchProduct = async () => {
    setloading(true);
    const response = await fetch(Summayapi.Search.url + query.search);
    const dataresponse = await response.json();
    setloading(false);
    setdata(dataresponse.data);
    console.log(dataresponse);
  };
  useEffect(() => {
    fetchProduct();
  }, [query]);
  return (
    <div className="container mx-auto p-4">
      {loading && (
        <p className=" text-center text-lg font-serif bg-white p-4">
          loading....
        </p>
      )}
      <p className=" font-semibold my-3 text-lg">Search Result:{data.length}</p>
      {data.length === 0 && !loading && (
        <p className="bg-white text-lg text-center p-4">No Data Found...</p>
      )}
      {data.length !== 0 && !loading && (
        <VerticalCard loading={loading} data={data} />
      )}
    </div>
  );
};

export default SearchProduct;
