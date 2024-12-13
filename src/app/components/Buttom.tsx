const Buttom = () => {
    return (
        <div className="w-full flex justify-center mt-10">
            <button className="btn overflow-hidden relative w-64 bg-green-400 text-white py-4 px-4 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-full before:bg-red-300 before:left-0 before:top-0 before:-translate-y-full hover:before:translate-y-0 before:transition-transform">
                <span className="relative">Descargar CV</span>
            </button>
        </div>
    )
}


export default Buttom;