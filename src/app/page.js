import Image from "next/image";
import Data from "../../components/Data";
import File_upload from "../../components/Fille";
import Table from "../../components/Table";
import Add_data from "../../components/Add_data";

import Blogs from "../../components/Blogs/Blogs";
import Header from "./Navbar/Header";
import { useAuth } from "@/Context/AuthContext";
import ProtectedRoutes from "@/Components/ProtectedRoutes";
import DataTable from "@/Components/Table/DataTable";
import { cookies } from "next/headers";

// const getData = async () => {
//   const res = await fetch(process.env.URL,{cache:"no-store"});
//    return res.json();
//   };
export default async function Home() {
  return (
    <>
      <h1>hello</h1>
    </>
  );
}
