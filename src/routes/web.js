import {Routes, Route} from "react-router-dom";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import WebLayout from "../pages/WebLayout";
import Home from "../pages/Home";
import AdDetail from "../pages/AdDetail";
import VerifyEmail from "../pages/Auth/VerifyEmail";

export default function WebRoute(){
    return (

        <Routes>
            <Route element={<WebLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route exact path="/ad/:slug" element={<AdDetail/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/verify-email" element={<VerifyEmail/>}/>
            </Route>

        </Routes>
    )
}