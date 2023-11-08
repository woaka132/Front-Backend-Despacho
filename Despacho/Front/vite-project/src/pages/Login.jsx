import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext"

import navComp from "../components/nav"

export default function LoginPage(){
    const { register, handleSubmit, formState:{errors}} = useForm()
    const { signin,errors: LoginErrors } = useAuth()

    const onSubmit = handleSubmit(async(data) => { 
        signin(data)
    })
    return(
        <div className="text-gray-700  overflow-hidden">
            {
                LoginErrors.map((error,i)=>(
                    <div className="bg-red-500 p-2 text-yellow-100" key={i} >
                    {error}
                    </div>
                ))
            }
            <div className="md:grid grid-cols-6 ">
                {navComp()}
                <main className="main">
                    <h1 className="mainTitle">Login</h1>
                    <section className="flex items-center justify-center p-5">
                        <div className="bg-gray-100 flex rounded-2xl shadow-1g max-w-3xl p-5">
                            <div className="sm:w-1/2 px-16">
                                <h2 className="font-bold text-2xl text-[#42ABBD]">Login</h2>
                                <p className="text-sm mt-4">Si eres un miembro, Ingresa</p>
                                <form className="flex flex-col gap-4" action="" onSubmit={onSubmit}>
                                    <input className="p-2 mt-6 rounded-xl border" type="text" name="email" placeholder="email" {...register("email",{required:true})}/>
                                    { errors.email && <p className="text-red-500"> El usaurio2 es requeiro</p> }
                                    <input className="p-2 rounded-xl border" type="password" name="password" placeholder="contraseña" {...register("password",{required:true})}/>
                                    { errors.password && <p className="text-red-500"> El usaurio3 es requeiro</p> }
                                    <button className="bg-[#42ABBD] rounded-xl text-white py-2.5" >Ingresar</button>
                                </form>
                                <div className="mt-10 grid grid-cols-3 items-center text-gray-400">
                                    <hr className="border-gray-400"/>
                                    <p className="text-center text-sm">OR</p>
                                    <hr className="border-gray-400"/>
                                </div>
                                <div className="mt-10 text-xs flex justify-between items-center">
                                    <p>¿No tienes cuenta? </p>
                                    <a className="py-2 px-2 bg-white border rounded-x1"  href="signin.html">Registro</a>
                                </div>
                            </div>
                
                            <div className="sm:block hidden w-1/2">
                                <iframe className="rounded-2xl" height="500px" src="https://lottie.host/?file=0159bfbe-d994-4b1c-9b8c-836b3ce51f32/Ehcb1BLFz8.json"></iframe>
                            </div>
                        </div>
                    </section>  
                    
                </main>
            </div>
        </div>
    )
}
