import React from "react";
import NavBar from "../layer/Navbar";
import GlobalStyle from "../GlobalStyle";
import SectionChatBot from "../component/ChatBot/SectionChatBot";



function ChatBot(props) {
    return (
        <>
            <GlobalStyle/>
            <NavBar/>

            <div style={{width:"100%", marginTop:"25px", marginBottom:"100px",
                display:"flex", justifyContent:"center", alignItems:"center"}} className="text-center">
                <SectionChatBot/>
            </div>

        </>
    );
}

export default ChatBot;