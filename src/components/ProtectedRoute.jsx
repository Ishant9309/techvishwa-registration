import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase/config";

function ProtectedRoute({children}){

const user = auth.currentUser;

if(!user){
return <Navigate to="/admin-login" />;
}

return children;

}

export default ProtectedRoute;