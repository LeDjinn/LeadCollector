import React from 'react'


const AsideBar = ()=>(
                <aside className="relative bg-sidebar h-screen bg-green-600 w-64 hidden sm:block shadow-xl">
                <div className="p-6">
                    <a href="index.html" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">Admin</a>
                    <button className="w-full bg-red-600 cta-btn text-white text-2xl text-2xlfont-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-red-300 flex items-center justify-center">
                            Boostez LeadCollector
                    </button>
                </div>
                <nav className="text-white text-base font-semibold pt-3">
                    <a href="#test1" className="flex items-center active-nav-link text-white py-4 pl-6 nav-item">
                    
                        Vos Résultats en chiffres
                    </a>
                    <a href="#test" className=" items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                    
                    Nombre de visiteur sur le site
                        <div className="bg-green-300 mx-auto rounded-full h-10 w-10 text-white">
                                <h1 className='text-white text-sm p-2'>120</h1>
                        </div>
                    </a>
                <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                    
                    Nombre de like :
                    <h1 className='text-red-700 text-sm p-2'>120</h1>
                </a>
                <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                    
                    Nombre de Lead :
                    <h1 className='text-red-700 text-sm p-2'>120</h1>
                </a>
                <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                    
                    Les Pubs en cours :
                    <h1 className='text-sm text-red-700 p-2'>120</h1>
                </a>
                <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                    

                    Les résultats des publications:
                    <h1 className='text-red-400 text-sm p-2'>120</h1>
                </a>
                </nav>

                </aside>
)

export default AsideBar