export default function Principal () {
    return(
        <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500 ">
            <div className="flex justify-center items-center self-center" >
                <h2 className="font-sans font-black text-2xl">Esta es la página principal, aunque aquí no hay nada... aún.</h2> <p className="text-xl">👨‍💻</p>
            </div>
            <div className="flex p-3">
                <p className="font-sans font-semibold">¿Por qué no pruebas agregando: </p> <p className="font-sans font-black">"/login"</p> <p className="font-sans font-semibold"> en el URL?</p>
            </div>
            

        </div>
    );
}