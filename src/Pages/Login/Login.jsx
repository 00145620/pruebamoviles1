import { useEffect, useState } from "react";
import { useUserContext } from "../../Contexts/UserContext";
import { useNavigate } from 'react-router-dom';

const routes = {
  "admin": "/admin",
  "user": "/user"
}

export default function Login(){
    const context = useUserContext()
    const navigate = useNavigate(); 
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onChange = (e, save) => {
        save(e.target.value)
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        try{
            const response = await context.login(username, password)

            console.log( response )
            setPassword('')
            setUsername('')

        }catch(error){
            console.error(error)
        }
    }

    useEffect(()=> {
      if(context.user) {
        navigate(routes[context.user.role] ?? "/");
      }
    }, [context.user]);

    return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <main className="w-3/4 max-w-3xl bg-blue-100 rounded-md p-8 md:p-10 shadow-md">
        <form
          onSubmit={onSubmitHandler}
          className="flex flex-col gap-4 items-center justify-center"
        >
          <h2 className="uppercase text-gray-800 font-monserrat font-black text-4xl mb-4">
            ¡Inicia sesión!
          </h2>

          <input
            className="font-medium w-full text-gray-700 focus:outline-none focus:ring focus:border-gray-700 p-2 rounded"
            type="text"
            placeholder="Ingrese su nombre de usuario"
            value={username}
            onChange={(e) => onChange(e, setUsername)}
          />

          <input
            className="font-medium w-full text-gray-700 focus:outline-none focus:ring focus:border-gray-700 p-2 rounded"
            type="password"
            placeholder="Ingrese su contraseña"
            value={password}
            onChange={(e) => onChange(e, setPassword)}
          />

          <button className="mt-6 w-full transition rounded border border-blue-500 duration-300 ease-in-out text-xl text-extrabold uppercase bg-blue-500 hover:bg-blue-700 py-2 px-4 text-gray-100">
            Ingresar
          </button>
        </form>
      </main>
    </div>
  );
}