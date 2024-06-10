
// import React, { useEffect, useState } from "react";

import Image from "next/image";


const getProducts = async () => {
  const res = await fetch(process.env.URL,{cache:"no-store"});
   return res.json();
  };

  // export default async function Home() {
  //   
  // } 

export default  async function Data() {
  // const [directions, setDirections] = useState(null);
  // const apiKey = "5b3ce3597851110001cf6248dfc06235d92b4596ac56993276c3247a";
  // const startCoords = "8.681495,49.41461";
  // const endCoords = "8.687872,49.420318";
  // const apiUrl = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${startCoords}&end=${endCoords}`;

  // useEffect(() => {
  //   const fetchDirections = async () => {
  //     try {
  //       const response = await axios.get(apiUrl);
  //       console.log(response );

  //     } catch (error) {
  //       console.error("Error fetching directions:", error);
  //     }
  //   };

  //   fetchDirections();
  // }, []);

  // const [data, setdata] = useState([]);
  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get("http://127.0.0.1:8000/");
  //     const data = await response.data;

  //     setdata(data);
  //   } catch (error) {
  //     console.error("Error fetching directions:", error.message);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);


  const {data} = await getProducts();

  console.log(data);

  return (
    <div>
      <h1>Hellooo</h1>
      <DataTable data={data}/>
    </div>
  );
}


// export const revalidate=3