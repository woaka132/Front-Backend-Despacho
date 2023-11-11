import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthProvide } from "./context/AuthContext"

import  HomePage  from "./pages/Home"
import   LoginPage  from "./pages/Login"
import  RegisterPage  from "./pages/Register"
import  GaleryPage  from "./pages/Galery"
import ContactoPage from "./pages/Contacto"
import ServicesPage from "./pages/Services"
import ProfilePage from "./pages/Profile"
import CalendarPage from "./pages/Calendar"

import { ProtectedRoute } from "./components/ProtectedRoute"

function App(){
  return (
    <AuthProvide>
      <BrowserRouter>
        <Routes>
          <Route path="/"         element={ <HomePage />}/>
          <Route path="/galery"   element={ <GaleryPage />}/>
          <Route path="/services" element={ <ServicesPage />}/>
          <Route path="/contacto" element={ <ContactoPage />}/>
          <Route path="/login"    element={ <LoginPage />}/>
          <Route path="/register" element={ <RegisterPage />}/>
          
          <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={ <ProfilePage />}/>
          <Route path="/calendar" element={ <CalendarPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvide>
  )
}

export default App