"use client";

import axios from "axios";
import React, { useState } from "react";

export default function File_upload() {
  const [file, setfile] = useState(null);
  const [name, setname] = useState("");
  const [message, setMessage] = useState("");

  // const form_data = new FormData();

  // form_data.append("file", file);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form_data = new FormData();
    form_data.append("file", file);
    form_data.append("name", name);
    console.log(form_data);
    // To see the form data content, use this:

    try {
      const res = await axios.post("http://127.0.0.1:8000/product", form_data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setMessage("File uploaded successfully");
    } catch (err) {
      setMessage("File upload failed");
    }
  };

  return (
    <div>
      {message}
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => e.target.value} />
        <input
          type="file"
          id="file"
          name="file"
          onChange={(e) => setfile(e.target.files[0])}
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
