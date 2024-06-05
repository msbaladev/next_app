import Image from "next/image";
import Data from "../../components/Data";
import File_upload from "../../components/Fille";
import Table from "../../components/Table";
import Add_data from "../../components/Add_data";

export default function Home() {
  return (
    <>
      <File_upload />
      <Data />
<Add_data />
    </>
  );
}
