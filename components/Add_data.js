"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Add_data() {
  const [name, setname] = useState("");
  const router = useRouter();
  const submitData = async (e) => {
    try {
      e.preventDefault();

      if (name == "") {
        return;
      }

      const res = await axios
        .post("http://127.0.0.1:8000/create_book", {
          name,
        })
        .then(() => router.refresh())
        .then(() => setname(""));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={submitData}>
        <label>Enter your name:</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setname(e.target.value)}
        />
        <br />
        <button>submit</button>
      </form>
    </>
  );
}
