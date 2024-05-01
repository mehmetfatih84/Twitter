import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { auth } from "../firebase/config";

const ProtectedRoute = () => {
  const [isAuth, setIsAuth] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setIsAuth(user ? true : false);
    });
    return () => unsub();
  }, []);
  if (isAuth === false) {
    return <Navigate to={"/"} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
