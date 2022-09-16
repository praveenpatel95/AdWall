import WebRoute from './web';
import CompanyRoute from './company';
import {Routes, Route} from "react-router-dom";


export default function AllRoutes() {

    return (

           <>
               <WebRoute />
               <CompanyRoute />
           </>

    )
}