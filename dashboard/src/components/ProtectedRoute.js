import { useEffect, useState } from "react";

const ProtectedRoute = ({ children }) => {
  const [status, setStatus] = useState("loading"); 
  // loading | allowed | denied

  useEffect(() => {
    fetch("http://localhost:3002/api/auth/me", {
      credentials: "include",
    })
      .then((res) => {
        if (res.ok) {
          setStatus("allowed");
        } else {
          setStatus("denied");
        }
      })
      .catch(() => {
        setStatus("denied");
      });
  }, []);

  if (status === "loading") {
    return <div>Loading dashboard...</div>; // ✅ NO WHITE SCREEN
  }

  if (status === "denied") {
    window.location.replace("http://localhost:3000/login");
    return <div>Redirecting...</div>;
  }

  return children;
};

export default ProtectedRoute;
