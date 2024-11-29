
import React, {useState} from 'react';
import Characters from "./Characters";
import StarShips from "./StarShips";
import Planets from "./Planets";
import Main from "./Main";
function Header() {
    const [page, setPage] = useState('');


    function curentPage(){
        switch (page){
            case 'main':
                return <Main/>
            case 'char':
                return <Characters/>
            case 'plan':
                return <Planets/>
            case 'star':
                return <StarShips/>
        }
    }

    return <div className=" w-[100%] h-[50px]">
        <div className="flex flex-row items-center justify-start">
            <button onClick={event => setPage('main')} className="text-[30px] font-bold text-white ml-[5%] mr-[5%]">Star Wars</button>
            <button onClick={event => setPage('char')} className="text-[20px] font-[300] text-white mr-[2%] mt-[5px]">Characters</button>
            <button onClick={event => setPage('plan')} className="text-[20px] font-[300] text-white mr-[2%] mt-[5px]">Planets</button>
            <button onClick={event => setPage('star')} className="text-[20px] font-[300] text-white mr-[2%] mt-[5px]">Starships</button>
        </div>
        {
            curentPage()
        }
    </div>;
}

export default Header;
