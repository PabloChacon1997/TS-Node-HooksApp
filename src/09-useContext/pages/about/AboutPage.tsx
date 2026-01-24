import { UserContext } from "@/09-useContext/context/UserContext"
import { Button } from "@/components/ui/button"
import { use } from "react"
import { Link } from "react-router"

export const AboutPage = () => {

  const { isAuthenticated, logout }= use(UserContext)

  return (
    <div className=" flex flex-col items-center jusitfy-cente min-hscreen">
      <h1 className="text-4xl font-bold">Página sobre mi</h1>
      <hr />
      <div className="flex flex-col gap-2">
        {
          isAuthenticated && (
            <Link to="/profile" className="hover:text-blue-500 underline text-2xl">Perfil</Link>
          )
        }
        {
          isAuthenticated ? (
            <Button variant='destructive' onClick={logout}>Salir</Button>
          ): (
            <Link to="/login" className="hover:text-blue-500 underline text-2xl">Iniciar sesion</Link>
          )
        }
        
      </div>
    </div>
  )
}
