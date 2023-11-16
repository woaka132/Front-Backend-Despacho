import navComp from '../components/nav'
import { generateDate, months } from '../utils/calendar'
import cn from "../utils/cn";
import dayjs from "dayjs";
import React, { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { es } from "dayjs/locale/es";
import localeData from "dayjs/plugin/localeData";

dayjs.locale(es);
dayjs.extend(localeData);
dayjs.weekdays();       // ["domingo", "lunes", "martes", ..., "sábado"]
dayjs.weekdaysShort();  // ["dom.", "lun.", "mar.", ..., "sáb."]
dayjs.weekdaysMin();    // ["do", "lu", "ma", "mi", "ju", "vi", "sá"]
dayjs.monthsShort();    // ["ene", "feb", "mar", "abr", ..., "dic"]
dayjs.months();  

export default function AgendaPage(){

    const days = ["L", "M", "M", "J", "V", "S", "D"];
    const currentDate = dayjs();
    const [today, setToday] = useState(currentDate);
	const [selectDate, setSelectDate] = useState(currentDate);
    
    return (
        <div className="text-blue-950 h-full">
            <div className="sm:grid grid-cols-6 h-full">
                {navComp()}                
                <main className="main relative bg-slate-50 h-100vh ">
                    <h1 className="mainTitle relative h-30">Profile</h1>
                    
                    <div className=' flex h-85vh items-center justify-center'>
                        <div className='flex flex-col md:flex-row rounded-xl overflow-hidden'>
                            <div className='w-96 h-96 P-5 bg-white shadow mb-1  md:mr-1 md:mb-0 overflow-hidden'>
                                <div className="flex justify-between items-center">
                                    <h1 className="pl-2 select-none font-semibold">
                                        {months[today.month()]}, {today.year()}
                                    </h1>
                                    <div className="pl-2 flex gap-10 items-center ">
                                        <GrFormPrevious
                                            className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
                                            onClick={() => {
                                                setToday(today.month(today.month() - 1));
                                            }}
                                        />
                                        <h1
                                            className=" cursor-pointer hover:scale-105 transition-all"
                                            onClick={() => {
                                                setToday(currentDate);
                                            }}
                                        >
                                            Hoy
                                        </h1>
                                        <GrFormNext
                                            className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
                                            onClick={() => {
                                                setToday(today.month(today.month() + 1));
                                            }}
                                        />
                                    </div>
                                </div>
                                
                                <div className='w-full grid grid-cols-7'>
                                    {days.map((day, index) => {
                                        return (
                                            <div key={index} className="h-14 grid place-content-center text-sm">
                                                    <p>{day}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className=" w-full  grid grid-cols-7">
                                    {generateDate(today.month(), today.year()).map(({date, currentMonth, today}, index) => {
                                        return (
                                            <div 
                                                key={index}
                                                className="h-14 grid place-content-center border-t text-sm">

                                                    <p 
                                                    className={cn(
                                                        currentMonth ? "":"text-gray-400",
                                                        today? "font-bold border border-blue-500 border-2":"",
                                                        "h-10 w-10 grid place-content-center rounded-full cursor-pointer bg-green-50 hover:border-black hover:bg-blue-50 hover:border"
                                                        
                                                        
                                                    )}   
                                                    onClick={() => {
                                                        setSelectDate(date);
                                                    }}
                                                    >
                                                            
                                                            
                                                    {date.date()}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            
                            <div className='h-52 md:h-96  bg-white p-5'>
                                <h1 className='text-2xl text-center '>Citas agendadas</h1>
                                <ul>
                                    <li></li>
                                </ul>

                                <h2 className='font-light'>No se ha agendado ninguna cita!</h2>
                                <h2 className='font-light'>Agendar cita para: {selectDate.toDate().toDateString()}</h2>
                            </div>  
                        </div>
                    </div>                    
                </main>
            </div>
        </div>
    );
}

