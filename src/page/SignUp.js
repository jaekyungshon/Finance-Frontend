import React from "react";
import NavBar from "../layer/Navbar";
import GlobalStyle from "../GlobalStyle";
import SearchBar from "../layer/SearchBar";
import SectionSignUp from "../component/SignUp/SectionSignUp";
import Footer from "../layer/Footer";

function SignUp(props) {
    return (
        <>
            <GlobalStyle/>
            <NavBar/>

            <div style={{width:"100%", marginTop:"25px", marginBottom:"100px",
                display:"flex", justifyContent:"center", alignItems:"center"}}>
                <SectionSignUp />
            </div>
            <Footer/>
        </>
    );
}

export default SignUp;