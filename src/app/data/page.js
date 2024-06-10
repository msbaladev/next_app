"use client";
import ProtectedRoutes from "@/Components/ProtectedRoutes";
import DataTable from "@/Components/Table/DataTable";
import { useAuth } from "@/Context/AuthContext";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

function page() {
  const { name, user, loading } = useAuth();
  const [data, setdata] = useState([]);

  const token = Cookies.get("token");

  console.log(user);

  const getAllData = async () => {
    axios.defaults.headers.Authorization = `Bearer ${token}`;

    try {
      const res = await axios.get(`http://127.0.0.1:8000/v1/get_data/`);
      const data = res.data.data;

      setdata(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  console.log(data);

  return (
    <div>
      ggkhhkhkh
      <DataTable data={data} />
    </div>
  );
}

export default page;
