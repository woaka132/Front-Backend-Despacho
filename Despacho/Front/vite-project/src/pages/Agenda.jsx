import navComp from '../components/nav'
import { generateDate, months } from '../utils/calendar'
import cn from "../utils/cn";
import dayjs from "dayjs";
import  { useState , useEffect } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useAuth } from "../context/AuthContext"
import { useForm } from "react-hook-form"
import { getDays , CreateDays } from "../api/days.js"
import { useNavigate } from "react-router-dom"



export default function AgendaPage(){
    const { user } = useAuth();
    const days = ["L", "M", "M", "J", "V", "S", "D"];
    const currentDate = dayjs();
    const [today, setToday] = useState(currentDate);
	const [selectDate, setSelectDate] = useState(currentDate);
    const busyDates = [];
    const myDates = [];
    const {handleSubmit} = useForm()
    const [Dayss, setDayss] = useState ([]);
    const navigate = useNavigate()

    const Days = async () => {
        try {
            const res = await getDays()
            return res.data
        } catch (error) {
            console.log(error.response)
        }  
    }
    
    useEffect (() => {
        Days().then (values =>(setDayss(values)))
    },[]);
    
    const onSubmit = handleSubmit(async() => {
        user.date = selectDate.format("DD/MM/YYYY")
        CreateDays(user) 
        return navigate(0)
    })

    Dayss.map( element =>{
        ( element.user == user.id)?myDates.push(element.date):busyDates.push(element.date)
    })

    return (
        <div className="text-blue-950 h-full">
            <div className="sm:grid grid-cols-6 h-full">
                {navComp()}                
                <main className="main relative bg-slate-50 h-100vh ">
                    <h1 className="mainTitle relative h-30">Profile</h1>
                    
                    <div className=' flex h-85vh items-center justify-center'>
                        <div className='flex flex-col md:flex-row rounded-xl overflow-hidden'>
                            <div className='w-96 h-100 P-5 bg-white shadow mb-1  md:mr-1 md:mb-0 overflow-hidden'>
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
                                    {generateDate(today.month(), today.year(),busyDates, myDates).map(({date, currentMonth, today, busy, mine}, index) => {
                                        return (
                                            <div 
                                                key={index}
                                                className="h-14 grid place-content-center border-t text-sm">

                                                    <p 
                                                    className={cn(
                                                        currentMonth ? "":"text-gray-500",
                                                        today? "font-bold border-black border-2":"",
                                                        "bg-emerald-200 h-10 w-10 grid place-content-center rounded-full cursor-pointer hover:border-green-600 hover:bg-blue-100 hover:border",
                                                        date<currentDate? "!bg-gray-200 text-gray-600 ":"",
                                                        mine? "!bg-blue-200  hover:border-blue-500 border-none":"", 
                                                        busy? "!bg-red-200   hover:border-red-500 border-none":"",
                                                        

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
                            
                            <form className='h-52 md:h-100  bg-white p-5'  onSubmit={onSubmit}>
                                <h1 className='text-2xl text-center '>Citas agendadas</h1>
                                <ul>
                                    <li></li>
                                </ul>

                                <h2 className='font-light'>No se ha agendado ninguna cita!</h2>
                                <h2 className='font-light text-center'>{
                                (selectDate<currentDate)?
                                selectDate.format("DD/MM/YYYY")+" Es fecha pasada":
                                (busyDates.indexOf(selectDate.format("DD/MM/YYYY")) > -1)?
                                selectDate.format("DD/MM/YYYY")+ " No disponible":
                                (myDates.indexOf(selectDate.format("DD/MM/YYYY")) > -1)?
                                "Cita agendada: " + selectDate.format("DD/MM/YYYY"):
                                (<button className='bg-gray-200 border-blue-800 p-2 shadow-md hover:bg-blue-800 hover:text-gray-50 font-normal ease-in duration-150'>Agendar: { selectDate.format("DD/MM/YYYY")} </button>)    
                                } 

                                </h2>
                            </form>  
                        </div>
                    </div>                    
                </main>
            </div>
        </div>
    );
}

