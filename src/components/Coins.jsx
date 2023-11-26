//coin page to display all coins available
import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import Error from "./Error";
import { server } from "../index";

const Coins = () => {
  const [coinsData, setCoinsData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [page,setPage]=useState(1);


  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const coinData = await axios.get(`${server}/coins/markets?vs_currency=usd&page=${page}`);
        // console.log(coinData);
        setCoinsData(coinData.data);
        setLoading(false);
        console.log("coins data", coinsData);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoinData();
  }, [coinsData,page]);

  if (error) return <Error />;

  return loading ? (
    <Loader />
  ) : (<>
    
     
    
      </>
  );

};

export default Coins;
