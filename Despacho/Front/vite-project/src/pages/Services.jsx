import navComp from "../components/nav"

import Img1 from "../Images/DesarrolloApps2.png"
import Img2 from "../Images/softEmp2.png"

export default function ServicesPage(){
    return(
    <div className="text-gray-700 overflow-hidden">
    <div className="md:grid md:grid-cols-6 grid-cols-3">
        {navComp()}        
        <main className="main">
            <div>
                <h1 className="mainTitle">Servicios</h1>
                <div className=" px-7 grid overflow-scroll no-scrollbar h-80vh xl:h-85vh xl:grid-cols-2 justify-center justify-items-end">
                    <div className="serviceCard xl:mr-3">
                        <div className="w-4/12 hidden md:block  relative">
                            <img src={Img1} alt="" className=" absolute h-full right-0"/>
                        </div>
                        <div className="sCardColor">
                        <h1 className="font-bold text-xl">Servicio 1</h1>
                        <p className="text-justify">
                            Lorem ipsum dolor, sit amet consectetur 
                            adipisicing elit. Aperiam sunt suscipit laudantium. 
                            Veritatis, necessitatibus dolor quasi iste itaque explicabo
                        </p>
                        <button className="mt-2 py-1 px-2 uppercase tracking-wide font-semibold rounded-2xl border-2 border-green-600  text-green-600 hover:bg-green-600 hover:text-white transition duration-300">Solicitar</button>
                        </div>
                    </div>

                    <div className="serviceCard">
                        <div className="w-4/12 hidden md:block  relative">
                            <img src={Img2} alt="" className=" absolute h-full right-0"/>
                        </div>
                        <div className="sCardColor">
                        <h1 className="font-bold text-xl">Servicio 1</h1>
                        <p className="text-justify">
                            Lorem ipsum dolor, sit amet consectetur 
                            adipisicing elit. Aperiam sunt suscipit laudantium. 
                            Veritatis, necessitatibus dolor quasi iste itaque explicabo
                        </p>
                        <button className="mt-2 py-1 px-2 uppercase tracking-wide font-semibold rounded-2xl border-2 border-green-600  text-green-600 hover:bg-green-600 hover:text-white transition duration-300">Solicitar</button>
                        </div>
                    </div>
                    <div className="serviceCard xl:mr-3">
                        <div className="w-4/12 hidden md:block  relative">
                            <img src={Img2} alt="" className=" absolute h-full right-0"/>
                        </div>
                        <div className="sCardColor">
                        <h1 className="font-bold text-xl">Servicio 1</h1>
                        <p className="text-justify">
                            Lorem ipsum dolor, sit amet consectetur 
                            adipisicing elit. Aperiam sunt suscipit laudantium. 
                            Veritatis, necessitatibus dolor quasi iste itaque explicabo
                        </p>
                        <button className="mt-2 py-1 px-2 uppercase tracking-wide font-semibold rounded-2xl border-2 border-green-600  text-green-600 hover:bg-green-600 hover:text-white transition duration-300">Solicitar</button>
                        </div>
                    </div>
                    <div className="serviceCard">
                        <div className="w-4/12 hidden md:block  relative">
                            <img src={Img2} alt="" className=" absolute h-full right-0"/>
                        </div>
                        <div className="sCardColor">
                        <h1 className="font-bold text-xl">Servicio 1</h1>
                        <p className="text-justify">
                            Lorem ipsum dolor, sit amet consectetur 
                            adipisicing elit. Aperiam sunt suscipit laudantium. 
                            Veritatis, necessitatibus dolor quasi iste itaque explicabo
                        </p>
                        <button className="mt-2 py-1 px-2 uppercase tracking-wide font-semibold rounded-2xl border-2 border-green-600  text-green-600 hover:bg-green-600 hover:text-white transition duration-300">Solicitar</button>
                        </div>
                    </div>
                    <div className="serviceCard xl:mr-3">
                        <div className="w-4/12 hidden md:block  relative">
                            <img src={Img2} alt="" className=" absolute h-full right-0"/>
                        </div>
                        <div className="sCardColor">
                        <h1 className="font-bold text-xl">Servicio 1</h1>
                        <p className="text-justify">
                            Lorem ipsum dolor, sit amet consectetur 
                            adipisicing elit. Aperiam sunt suscipit laudantium. 
                            Veritatis, necessitatibus dolor quasi iste itaque explicabo
                        </p>
                        <button className="mt-2 py-1 px-2 uppercase tracking-wide font-semibold rounded-2xl border-2 border-green-600  text-green-600 hover:bg-green-600 hover:text-white transition duration-300">Solicitar</button>
                        </div>
                    </div>
                    <div className="serviceCard">
                        <div className="w-4/12 hidden md:block  relative">
                            <img src={Img2} alt="" className=" absolute h-full right-0"/>
                        </div>
                        <div className="sCardColor">
                        <h1 className="font-bold text-xl">Servicio 1</h1>
                        <p className="text-justify">
                            Lorem ipsum dolor, sit amet consectetur 
                            adipisicing elit. Aperiam sunt suscipit laudantium. 
                            Veritatis, necessitatibus dolor quasi iste itaque explicabo
                        </p>
                        <button className="mt-2 py-1 px-2 uppercase tracking-wide font-semibold rounded-2xl border-2 border-green-600  text-green-600 hover:bg-green-600 hover:text-white transition duration-300">Solicitar</button>
                        </div>
                    </div>



                </div>
            </div>
            
        </main>
    </div>
    </div>
    )
}

