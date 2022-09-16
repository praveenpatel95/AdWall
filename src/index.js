import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import { store, persistor } from './stores/store'
import {PersistGate} from "redux-persist/integration/react";
import {BrowserRouter as Router} from "react-router-dom";
import AllRoutes from "./routes";

import './index.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import blue from '@mui/material/colors/blue';

const theme = createTheme({
    typography: {
        allVariants: {
            fontFamily: 'VariableFont_slnt',
            textTransform: 'none',
        },
        h1:{
            fontSize:'36px',
            fontWeight:'700',
            lineHeight: '137.5%',
        },
        h3:{
            fontSize:'24px',
            fontWeight:'600',
            lineHeight: "137.5%",
            color:"#111827"
        },
        h4:{
            fontSize:'18px',
            fontWeight:'600',
            lineHeight: "137.5%",
            color:"#111827"
        },
        h5:{
            fontSize:'16px',
            fontWeight:'400',
            lineHeight: "150%",
            color:"#111827"
        },
        h6:{
            fontWeight: '500',
            fontSize: '14px',
            lineHeight: "157%",
            color:"#111827",
        },
        p:{
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: "157%",
            color:"#111827",
        },
        b:{
            fontSize: '14px',
            fontWeight:'bold'
        },
        caption:{
            fontSize:'13px',
        },

    },

    palette: {
        success: {
            main: '#2AA587',
        },
        secondary: {
            main: '#2AA587',
        },
        primary: {
            main: '#2AA587',
        },
        grey:{
            main:'#6B7280'
        },

    },


});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
        <PersistGate loading={null} persistor={persistor}>
            <Router>
                <ThemeProvider theme={theme}>
                    <AllRoutes />
                </ThemeProvider>
            </Router>

        </PersistGate>
    </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
