import React from "react";
import NavBar from "../layer/Navbar";
import GlobalStyle from "../GlobalStyle";
import SearchBar from "../layer/SearchBar";
import SectionChatBot from "../component/ChatBot/SectionChatBot";
import Footer from "../layer/Footer";


function ChatBot(props) {
    return (
        <>
            <GlobalStyle/>
            <NavBar/>

            <div style={{width:"100%", marginTop:"25px", marginBottom:"100px",
                display:"flex", justifyContent:"center", alignItems:"center"}} className="text-center">
                <SectionChatBot/>
            </div>
            <Footer/>
        </>
    );
}

export default ChatBot;