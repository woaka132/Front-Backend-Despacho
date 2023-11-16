import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"


function navComp(){
    const {  isAuthenticated, logout } = useAuth() 
    

    return (
        <div className="navBar ">
        <nav className="text-right w-full">
                <div className="flex justify-between sm:justify-end">
                    <a href="index.html" className="cursor-pointer"><h1 className="text-2xl p-4 font-bold uppercase">Despacho Contable</h1></a>
                    <svg className="w-12 sm:hidden cursor-pointer hover:rotate-180 transition ease-linear duration-300" id="burger" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>
                </div>
                <ul className="hidden sm:block" id="nav">
                    <li className="navBtn "><Link to="/">Home</Link></li>
                    <li className="navBtn"><Link to="/galery">Galeria</Link></li>
                    <li className="navBtn"><Link to="/services">Servicios</Link></li>
                    <li className="navBtn"><Link to="/contacto">Contacto</Link></li>
                    { isAuthenticated ? (
                        <>
                        <li className="navBtn "><Link to="/profile">Perfil</Link></li>
                        <li className="navBtn "><Link to="/calendar">Agenda</Link></li>
                        <li className="navBtn" onClick={()=>{
                            logout()
                        }}><Link to="/">Cerrar Sesión</Link></li>
                        </>
                    ) : (
                        <>
                        <li className="navBtn "><Link to="/login">Ingresar</Link></li>
                        <li className="navBtn "><Link to="/register">Registro</Link></li>
                        </>
                    )}

                </ul>
            </nav>
            <script src="script.js"></script> 
        </div>
    )
}

export default navComp