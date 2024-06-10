"use client";

import axios from "axios";
import Cookies from "js-cookie";

import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthWrapper = ({ children }) => {
  const [value, setvalue] = useState("bala");

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const loadUserData = async () => {
    const token = Cookies.get("token");
 
    if (token) {
      axios.defaults.headers.Authorization = `Bearer ${token}`;
      try {
        const { data } = await axios.get(
          "http://127.0.0.1:8000/v1/api/auth/user/"
        );
        setUser(data);

        console.log(data);
      } catch (error) {
        console.error("Error fetching user", error);
        Cookies.remove("token");
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    loadUserData();
  }, []);

  const login = async (email, password) => {
    const { data } = await axios.post("http://127.0.0.1:8000/v1/api/token/", {
      username: email,
      password: password,
    });
    Cookies.set("token", data.access, { expires: 1 });
   
    axios.defaults.headers.Authorization = `Bearer ${data.access}`;
    const { data: userData } = await axios.get(
      "http://127.0.0.1:8000/v1/api/auth/user/"
    );
    setUser(userData);
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ value, login, user,loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
