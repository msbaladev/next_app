
'use client'
import { useAuth } from "@/Context/AuthContext";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function ProtectedRoutes({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/signin");
    }
  }, [loading, user]);

  if (loading || !user) {
    return <p>Loading...</p>;
  }

  return children;
}

export default ProtectedRoutes;
