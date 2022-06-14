import { useUserContext } from '../../Contexts/UserContext';

const UserPage = () => {
  const { logout } = useUserContext();

  return (
    <div className="flex flex-col justify-between items-start min-h-screen bg-gradient-to-r from-green-400 to-blue-500 ">
      <div className="flex justify-between items-center w-full h-10 px-2 bg-blue-100">

        <h1 className="font-sans font-black">Esta es la pagina del rol usuario</h1> 
        <button className=" flex justify-center items-center cursor-pointer text-white bg-indigo-600 rounded w-14 h-8 hover:bg-indigo-400"
        onClick={()=> { logout(); }} >Logout</button>

      </div>
      <div className=" flex flex-row pb-96 justify-center self-center ">
        <h2 className="font-sans font-black text-2xl">No hay nada aún aquí... pero lo habrá </h2> <p className="text-2xl">😉</p>
      </div>
      
    </div>
  )
}

export default UserPage;