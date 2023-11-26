import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { server } from "../index.js";

// importing components 
import Error from "../components/Error"


const Exchanges = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [exchangesData, setExchangesData] = useState();

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const {data} = await axios.get(`${server}/exchanges`);
        // console.log(typeof(data))
        setExchangesData(data);
        setLoading(false);
        console.log(data);
       

      } catch (error) {

        setError(true);
        setLoading(false);
        
      }
    };

    fetchExchanges();
  }, []);


  if (error) return <Error/>

  return (
    loading ? <h1> loading</h1> :(exchangesData.map((i)=><div key={i.id}>
      <img src="i.image" alt="logo" />
      <div>
        <p>{i.trust_score_rank}</p>
        <p>{i.name}</p>
      </div>
    </div>))

    
  );

};

export default Exchanges;
