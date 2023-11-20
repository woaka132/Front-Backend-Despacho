import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import  image from "../Images/R.png"

import navComp from "../components/nav"

export default function RegisterPage(){
    const { register, handleSubmit, formState:{errors} } = useForm()
    const { signup, isAuthenticated, errors: RegisterErrors } = useAuth()
    const navigate = useNavigate()

    useEffect(()=>{
        if (isAuthenticated) navigate('/')
    },[isAuthenticated])

    const onSubmit = handleSubmit(async(values) => { 
        signup(values)
        })

    return(
        <div className="text-gray-700  overflow-hidden">
            {
                RegisterErrors.map((error,i)=>(
                    <div className="bg-red-500 p-2 text-yellow-100" key={i} >
                    {error}
                    </div>
                ))
            }
            <div className="sm:grid grid-cols-6">
                {navComp()}
                <main className="main overflow-y-scroll no-scrollbar ">
                    <h1 className="mainTitle">Registro</h1>
                    <section className=" flex items-center justify-center relative p-5">
                        <div className="bg-cyan-100 rounded-2xl absolute flex left-1 animate-blob">
                            <img  className=" h-[600px] z-20"  src={image} alt=""/> 
                            <div  className="absolute w-full h-1/2 top-0 bg-orange-300 z-10 rounded-e-2xl"></div>
                            <div  className="absolute w-full h-1/2 bottom-0 bg-yellow-200 z-10 rounded-s-2xl"></div>  
                        </div>
                        <form  onSubmit={onSubmit}>
                        <div className="bg-gray-100 flex rounded-2xl shadow-1g p-5 z-20 relative">
                        
                        <div className="flex flex-col p-5 z-10">
                            <div className=" grid grid-cols-3 items-center text-gray-400">
                                <hr className="border-gray-400"/>
                                <p className="text-center text-sm p-5"> Datos Personales </p>
                                <hr className="border-gray-400"/>
                            </div>
                
                            <div className="grid grid-cols-4 gap-5 text-center text-sm">
                                <div className="flex flex-col">
                                    <p>Nombre</p>
                                    <input className="mt-2 p-1 rounded-xl text-center" type="text" placeholder="nombre" {...register("name",{required:true})} />
                                </div>
                                <div className="flex flex-col">
                                    <p>Apellido Paterno</p>
                                    <input className="mt-2 p-1 rounded-xl text-center" type="text" placeholder="paterno" {...register("secondname",{required:true})} />
                                </div>
                                <div className="flex flex-col">
                                    <p>Apellido Materno</p>
                                    <input className="mt-2 p-1 rounded-xl text-center" type="text"  placeholder="materno" {...register("lastname",{required:true})} />
                                </div>
                                <div className="flex flex-col">
                                    <p>Alias</p>
                                    <input className="mt-2 p-1 rounded-xl text-center" type="text" placeholder="alias" /*{...register("alias",{required:true})}*/ />
                                </div>
                            { errors.name&& <p className="text-red-500"> El nombre es requeiro</p> }
                            { errors.secondname && <p className="text-red-500"> El apellido paterno es requeiro</p> }
                            { errors.lastname && <p className="text-red-500"> El apellido materno es requeiro</p> }

                            </div>
                
                            <div className="mt-5 grid grid-cols-3 items-center text-gray-400">
                                <hr className="border-gray-400"/>
                                <p className="text-center text-sm p-5"> Dirección </p>
                                <hr className="border-gray-400"/>
                            </div>
                
                            <div className="grid grid-cols-4 gap-5 text-center text-sm">
                                <div className="flex flex-col">
                                    <p>Calle</p>
                                    <input className="mt-2 p-1 rounded-xl text-center" type="text" placeholder="calle" {...register("street",{required:true})} />
                                </div>
                                <div className="flex flex-col">
                                    <p>Numero</p>
                                    <input className="mt-2 p-1 rounded-xl text-center" type="text" placeholder="numero" {...register("streetnumber",{required:true})}/>
                                </div>
                                <div className="flex flex-col">
                                    <p>Colonia</p>
                                    <input className="mt-2 p-1 rounded-xl text-center" type="text"  placeholder="colonia" {...register("cologne",{required:true})}/>
                                </div>
                                <div className="flex flex-col">
                                    <p>Codigo Postal</p>
                                    <input className="mt-2 p-1 rounded-xl text-center" type="text" placeholder="CP" {...register("cp",{required:true})}/>
                                </div>
                            { errors.street&& <p className="text-red-500"> El nombre es requeiro</p> }
                            { errors.streetnumber && <p className="text-red-500"> El apellido paterno es requeiro</p> }
                            { errors.cologne && <p className="text-red-500"> El apellido materno es requeiro</p> }
                            { errors.cp && <p className="text-red-500"> El apellido materno es requeiro</p> }
                            </div>
                
                            <div className="mt-5 grid grid-cols-3 items-center text-gray-400">
                                <hr className="border-gray-400"/>
                                <p className="text-center text-sm p-5"> Contacto </p>
                                <hr className="border-gray-400"/>
                            </div>
                
                            <div className="grid grid-cols-3 gap-5 text-center text-sm">
                                <div className="flex flex-col">
                                    <p>Email</p>
                                    <input className="mt-2 p-1 rounded-xl text-center" type="text" placeholder="email" {...register("email",{required:true})}/>
                                </div>
                                <div className="flex flex-col">
                                    <p>Número teléfonico</p>
                                    <input className="mt-2 p-1 rounded-xl text-center" type="text" placeholder="numero" {...register("cellphone",{required:true})}/>
                                </div>
                                <div className="flex flex-col">
                                    <p>Número local</p>
                                    <input className="mt-2 p-1 rounded-xl text-center" type="text"  placeholder="numero" {...register("phone",{required:true})}/>
                                </div>
                            { errors.email&& <p className="text-red-500"> El nombre es requeiro</p> }
                            { errors.cellphone && <p className="text-red-500"> El apellido paterno es requeiro</p> }
                            { errors.phone && <p className="text-red-500"> El apellido materno es requeiro</p> }

                            </div>
                            
                            <div className="mt-5 grid grid-cols-3 items-center text-gray-400">
                                <hr className="border-gray-400"/>
                                <p className="font-bold text-xl text-center text-[#42ABBD]"> Datos de Usuario </p>
                                <hr className="border-gray-400"/>
                            </div>
                
                            <div className="bg-cyan-100 rounded-2xl grid grid-cols-3 gap-5 text-center mt-2 text-sm p-5 border">
                                <div className=" flex flex-col">
                                    <p>Usuario</p>
                                    <input className="mt-2 p-1 rounded-xl text-center" type="text" placeholder="usuario" {...register("username",{required:true})}/>
                                </div>
                                <div className="flex flex-col">
                                    <p>Contraseña</p>
                                    <input className="mt-2 p-1 rounded-xl text-center" type="text" placeholder="contraseña" {...register("password",{required:true})} />
                                </div>
                                <div className="flex flex-col">
                                    <p>Confirmar contraseña</p>
                                    <input className="mt-2 p-1 rounded-xl text-center" type="text"  placeholder="confirmar" /*{...register("confirm",{required:true})}*//>
                                </div>
                                <button type="submit">Registrar</button>
                            </div>
                            { errors.username&& <p className="text-red-500"> El usaurio1 es requeiro</p> }
                            { errors.password && <p className="text-red-500"> El usaurio3 es requeiro</p> }
                        </div>
                        
                        </div>
                        </form>
                    </section>
                    
                </main>
            </div>
        </div>
    )
}

