
import React from 'react';
import Header from "./Header";
import bgimg from "./media/mainpage_bg.gif"
function Main() {
    return <div className=" w-[100%] h-[100vh] bg-[#030408] flex flex-col items-center justify-center">
       <h1 className="text-[50px] font-[600] mt-[2%] text-white">Star wars fandom main page</h1>
        <img src={require('./media/mainpage_bg.gif')} alt=""/>
    </div>;
}
export default Main;