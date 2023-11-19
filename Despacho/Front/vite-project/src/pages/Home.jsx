
import navComp from '../components/nav'

import Image from '../Images/R2.png'

export default function HomePage(){
    return (
        <div className="text-blue-950  overflow-hidden">
            <div className="sm:grid grid-cols-6">
                {navComp()}                
                <main className="main relative bg-slate-50">
                    <h1 className="mainTitle">Home</h1>
                    <div className="pt-10 relative">
                        <div className="flex items-center justify-center px-16 p-5">
                            <div className="absolute top-52 left-2 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob2"></div>
                            <div className="absolute top-52 left-56 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob2 animation-delay-2000"></div>
                            <div className="absolute top-64 bottom-28 left-28 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob2 animation-delay-4000"></div>
                            <div className="sm:block hidden w-1/2 items-center justify-center z-0">
                                <img className="absolute top-10 h-[350px] hidden md:block" src={Image}/>
                            </div>
                            <div className="bg-cyan-50 text-justify flex flex-col md:w-1/2 p-5 rounded-xl z-10">
                    
                                <h2 className="font-bold text-2xl text-[#42ABBD]">Despacho contable</h2>
                                <p className="mt-4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, asperiores eius id laborum dolorum aperiam, facilis sed pariatur nesciunt esse hic ipsam odit. Error maxime doloribus iusto numquam commodi consectetur?</p>
                                <h2 className="mt-5 font-bold text-2xl text-[#42ABBD]">¿Quines somos?</h2>
                                <p className="mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere placeat omnis, quod, distinctio quos atque est, laborum veritatis nulla maiores assumenda obcaecati consequuntur fuga sapiente blanditiis perferendis reprehenderit earum veniam?</p>
                            </div>
                    
                        </div>
                        
                    </div>
                    
                </main>
            </div>
        </div>
    )
}