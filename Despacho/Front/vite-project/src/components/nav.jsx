function navComp(){
    return (
        <div className="navBar ">
        <nav className="text-right w-full">
                <div className="flex justify-between sm:justify-end">
                    <a href="index.html" className="cursor-pointer"><h1 className="text-2xl p-4 font-bold uppercase">Despacho Contable</h1></a>
                    <svg className="w-12 sm:hidden cursor-pointer hover:rotate-180 transition ease-linear duration-300" id="burger" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>
                </div>
                <ul className="hidden sm:block" id="nav">
                    <li className="navBtn  "><a href="/">Home</a></li>
                    <li className="navBtn"><a href="/galery">Galeria</a></li>
                    <li className="navBtn"><a href="/services">Servicios</a></li>
                    <li className="navBtn"><a href="contacto">Contacto</a></li>

                    <li className="navBtn "><a href="/login">Ingresar</a></li>
                    <li className="navBtn activeNav"><a href="/register">Registro</a></li>

                    <li className="navBtn"><a href="/profile">Perfil</a></li>
                    <li className="navBtn"><a href="/agenda">Agenda</a></li>
                    <li className="navBtn"><a href="/register">Salir</a></li>
                </ul>
            </nav>
            <script src="script.js"></script> 
        </div>
    )
}

export default navComp