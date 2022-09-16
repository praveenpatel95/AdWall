import {Routes, Route} from 'react-router-dom';
import CompanyLayout from '../pages/CompanyPanel/Layout'
import Overview from '../pages/CompanyPanel/Overview';
import Account from '../pages/CompanyPanel/Account';
import AdCreate from '../pages/CompanyPanel/Adz/Create';
import AdPreview from '../pages/CompanyPanel/Adz/AdPreview';
import AdList from '../pages/CompanyPanel/Adz/List';
import AdUplift from '../pages/CompanyPanel/Adz/List/Uplift';
import Messages from '../pages/CompanyPanel/Messages';
import Finance from '../pages/CompanyPanel/Finance';
import InvoiceDetail from '../pages/CompanyPanel/Finance/InvoiceDetail';
import Store from '../pages/CompanyPanel/Store';



export default function CompanyRoute() {
    return (
        <Routes>
            <Route path="dashboard" element={<CompanyLayout/>}>
               <Route exact path="overview" element={<Overview/>}/>
               <Route exact path="account" element={<Account />}/>
               <Route  path="ad/create" element={<AdCreate />}/>
               <Route  path="ad/preview" element={<AdPreview />}/>
               <Route  path="ad/list" element={<AdList />}/>
               <Route  path="ad/list/uplift" element={<AdUplift />}/>
               <Route  path="messages" element={<Messages />}/>
               <Route  path="finance" element={<Finance />}/>
               <Route exact path="finance/detail/:invoiceId" element={<InvoiceDetail />}/>
               <Route  path="store" element={<Store />}/>

            </Route>
        </Routes>
    )
}