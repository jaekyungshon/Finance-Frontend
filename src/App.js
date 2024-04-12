import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./page/Home";
import React from "react";
//import PriceMenu from "./page/PriceMenu";
//import PriceDetail from "./page/PriceDetail";
import Dash from "./page/Dash";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Dash />} />
                <Route path={"recommend"} element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
}
export default App;
