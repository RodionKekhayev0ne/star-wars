
import React, {useState} from 'react';
import Header from "./Header";
import Main from "./Main";
import Characters from "./Characters";
import StarShips from "./StarShips";
function Planets() {
    const [planet, setPlanet] = useState('');

    function curentPage(){
        switch (planet) {
            case 'Tatooine':
                return <div className="w-full flex flex-row ">
                    <div className="flex flex-col w-[45%]">
                        <h1 className="text-white text-[35px] ml-[30px] font-[500] mb-[15px]">Tatooine</h1>
                        <p className="text-white ml-[30px] text-[16px] mr-[10px]">Планета Внешнего Кольца, расположенная в отдаленном крае Галактики. Она находится на пересечении многих гиперпространственных маршрутов, а потому многие торговцы используют космопорт Мос-Эйсли в качестве пересадочного пункта. Далекий от бдительных глаз Галактической Империи, Татуин стал пристанищем для различного рода авантюристов — контрабандистов, наёмников, охотников за головами (в том числе Бобы Фетта). </p></div>
                    <img className="w-[55%] h-[70vh]" src={require('./media/Tatooine_EotECR.png')} alt=""/>
                </div>
            case 'Naaboo':
                return <div className="w-full flex flex-row">
                    <div className="flex flex-col w-[45%]">
                        <h1 className="text-white text-[35px] ml-[30px] font-[500] mb-[15px]">Naboo</h1>
                        <p className="text-white ml-[30px] text-[16px] mr-[10px]"> Планета в секторе Чоммелль около Внешнего Кольца. Населена двумя независимыми друг от друга обществами — гунганами, обитающими в подводных городах, и набуанцами — людьми, заселяющими поверхность планеты. Родной мир Падме Амидалы Наберри и Джа-Джа Бинкса, а также сенатора и будущего императора Палпатина.</p></div>
                    <img className="w-[55%] h-[70vh]" src={require('./media/Naboo_FFGRebellion.png')} alt=""/>
                </div>
            case 'Mandalore':
                return <div className="w-full flex flex-row">
                    <div className="flex flex-col w-[45%]">
                        <h1 className="text-white text-[35px] ml-[30px] font-[500] mb-[15px]">Mandalore</h1>
                        <p className="text-white ml-[30px] text-[16px] mr-[10px]"> Планета в Мандалорском секторе Внешнего Кольца, на которой возникла мандалорская культура. Таунги под предводительством Мандалора Первого обосновались на планете до 7000 ДБЯ. Они истребили живших на планете мифозавров, из костей которых строили многочисленные города. Планета получила название по имени вождя таунгов. Вскоре таунги стали называть себя мандалорцами. Отсюда мандалорцы начали свои завоевательные походы на другие планеты. После неудачной попытки покорить Ондерон они на некоторое время обосновались на Дксуне.</p></div>
                    <img className="w-[55%] h-[70vh]" src={require('./media/Mandaloreplanet.jpg')} alt=""/>
                </div>
            default:
                return <div></div>
        }
    }

    return <div className=" w-[100%] h-full">

        <h1 className="text-[40px] ml-[5%] font-[600] mt-[2%] text-white">Star Wars Planets</h1>

        <div className="flex flex-row">
            <div className="flex flex-col w-[40%] h-[50vh] justify-start items-start mt-[30px]">
                <button className="bg-[#626262] text-white font-bold text-[30px] w-[320px] h-[50px] ml-[12%] rounded-[4px]" onClick={event => setPlanet('Tatooine')}>Tatooine</button>
            <button className=" mt-[20px] bg-[#626262] text-white font-bold text-[30px] w-[320px] h-[50px] ml-[12%] rounded-[4px]" onClick={event => setPlanet('Mandalore')}>Mandalore</button>
            <button className="mt-[20px] bg-[#626262] text-white font-bold text-[30px] w-[320px] h-[50px] ml-[12%] rounded-[4px]" onClick={event => setPlanet('Naaboo')}>Naaboo</button>

        </div>
        <div className="w-[60%] mt-[30px]">
        {
            curentPage()
        }
        </div>
        </div>


    </div>;
}

export default Planets;
