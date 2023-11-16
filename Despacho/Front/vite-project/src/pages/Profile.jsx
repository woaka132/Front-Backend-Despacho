import navComp from '../components/nav'

import Image from '../Images/R2.png'

export default function ProfilePage(){
    return (
        <div className="text-blue-950 h-full">
            <div className="sm:grid grid-cols-6 h-full">
                {navComp()}                
                <main className="main relative bg-slate-50 h-100vh ">
                    <h1 className="mainTitle relative h-30">Profile</h1>
                    <div className=' md:h-1/2  flex justify-center pt-20 md:flex-row flex-col items-center'>
                        <div className='bg-white h-full w-11/12 sm:w-10/12 md:w-56  py-5 mb-1 md:mb-0 relative md:pt-20 mr-1 rounded flex items-center flex-col'>
                            <div className="bg-blue-200 rounded-full overflow-hidden w-48  ">
                                <img className='h-36 ' src={Image} alt=""/>
                            </div>
                            <p className='text-center'>@hotmail.com</p>
                        </div>
                        <div className='bg-slate-200 h-full w-11/12 sm:w-10/12 md:w-1/2 p-10 rounded'>
                            <div>
                                <h1 className='font-bold text-lg'>Datos personales</h1>
                                <div className='flex border-b-2 p-2'>
                                    <p className='px-2 shadow mr-1'>Nombre</p>
                                    <p className='px-2 shadow mr-1' >Paterno</p>
                                    <p className='px-2 shadow mr-1'>Materno</p>
                                    <p className='px-2 shadow mr-1'>Alias</p>
                                </div>
                            </div>
                            <div>
                                <h1 className='font-bold text-lg'>Direccion</h1>
                                <div className='flex border-b-2 p-2'>
                                    <p className='px-2 shadow mr-1'>Calle</p>
                                    <p className='px-2 shadow mr-1' >Numero</p>
                                    <p className='px-2 shadow mr-1'>Colonia</p>
                                    <p className='px-2 shadow mr-1'>Codigo postal</p>
                                </div>
                            </div>
                            <div>
                                <h1 className='font-bold text-lg'>Contacto</h1>
                                <div className='flex border-b-2 p-2'>
                                    <p className='px-2 shadow mr-1'>Email</p>
                                    <p className='px-2 shadow mr-1' >Numero telefonico</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </main>
            </div>
        </div>
    )
}