import { BrowserRouter,Routes,Route } from "react-router-dom";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import Success from "./pages/Success";
import AdminLogin from "./pages/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Register/>} />

<Route path="/admin-login" element={<AdminLogin/>} />

<Route
path="/admin"
element={
<ProtectedRoute>
<Admin/>
</ProtectedRoute>
}
/>

<Route path="/success" element={<Success/>} />

</Routes>

</BrowserRouter>

);

}

export default App;