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


function printDates(myDates){
    return myDates.map((date, index) => {
        return (
            <li key={index} className='font-light'>
                {date}
            </li>
        );
    });
}

export default function AgendaPage(){
    const { user } = useAuth();
    const days = ["L", "M", "M", "J", "V", "S", "D"];
    const currentDate = dayjs();
    const [today, setToday] = useState(currentDate);
	const [selectDate, setSelectDate] = useState(currentDate);
    const busyDates = [];
    const myDates = [];
    let admin = false;

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

    if(user.email == "admin1@hotmail.com"){        
        admin=true
    }
    
    const onSubmit = handleSubmit(async() => {
        user.date = selectDate.format("DD/MM/YYYY")
        CreateDays(user) 
        return navigate(0)
    })

    Dayss.map( element =>{
        ( element.user == user.id)?myDates.push(element.date):busyDates.push(element.date)      
    })


    return (
        <div className="text-blue-950 h-full overflow-hidden">
            <div className="sm:grid grid-cols-6 h-full">
                {navComp()}                
                <main className="main relative bg-slate-50 h-100vh overflow-y-scroll no-scrollbar ">
                    <h1 className="mainTitle relative !pb-5 !md:pb-0 mb-20 md:mb-0">Profile</h1>
                    
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
                                                        date<currentDate? "!bg-white text-gray-600 border-none":"",
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
                            
                            {!admin?
                            <form className='md:w-60 h-72 md:h-100 bg-white p-5' onSubmit={onSubmit}>
                                <h1 className='text-2xl text-center '>Agendar cita</h1>
                                <h2 className='font-light text-center border-b-2 md:pb-5 md:mb-5 border-gray-300'>{
                                (selectDate<currentDate)?
                                selectDate.format("DD/MM/YYYY")+" Es fecha pasada":
                                (busyDates.indexOf(selectDate.format("DD/MM/YYYY")) > -1)?
                                selectDate.format("DD/MM/YYYY")+ " No disponible":
                                (myDates.indexOf(selectDate.format("DD/MM/YYYY")) > -1)?
                                "Cita agendada: " + selectDate.format("DD/MM/YYYY"):
                                (<button className='bg-gray-200 border-blue-800 p-2 shadow-md hover:bg-blue-800 hover:text-gray-50 font-normal ease-in duration-150'>Agendar: { selectDate.format("DD/MM/YYYY")} </button>)    
                                } 

                                </h2>
                                <h1 className='text-2xl text-center '>Citas agendadas</h1>
                                <h2 className='font-light h-40 md:h-52 overflow-y-scroll'>{
                                    myDates.length!==0?
                                    printDates(myDates):
                                    "No se ha agendado ninguna cita!"
                                }
                                </h2>
                               
                            </form>:
                            <div className='w-70 h-72 md:h-100  bg-white p-5'>
                            <h1 className='text-2xl text-center '>Citas con clientes</h1>
                            <h2 className='font-light h-56 md:h-80 overflow-y-scroll'>{
                                busyDates.length!==0?
                                printDates(busyDates):
                                "No se ha agendado ninguna cita!"
                            }
                            </h2>
                            </div>
                        }
                        </div>
                    </div>                    
                </main>
            </div>
        </div>
    );
}

