import React, {useState} from 'react'
import { AddAppointement } from './AddAppointement'
import { AddFacebookemodif } from './AddFacebookmodif'
import { AddGooglemodif } from './AddGooglemodif'
import { AddWebmodif } from './AddWebmodif'

export default function Action() {

      const [showgoogle, setShowgoogle]=useState(true)
      const showGoogle =()=> setShowgoogle(false)
      const closeGoogle =()=>setShowgoogle(true)

      const [showfacebook, setShowfacebook]=useState(true)
      const showFacebook =()=> setShowfacebook(false)
      const closeFacebook =()=>setShowfacebook(true)

      const [showweb, setShowweb]=useState(true)
      const showWeb =()=> setShowweb(false)
      const closeWeb =()=>setShowweb(true)

      const [rdv, setRdv]=useState(true)
      const showRdv =()=> setRdv(false)
      const closeRdv =()=>setRdv(true)


    return (
        
             <div className='bg-indigo-700 h-96 w-52 pr-8 pl-4 mx-auto mt-8'>
                    <div onClick={showWeb} className=' cursor-pointer m-4 px-2 rounded-xl h-16 w-full bg-gray-400 text-white'>
                      Demande de changement Contenu web
                      </div>
                        <div className={`fixed ${showweb ? "hidden": ""} inset-0 h-screen w-full bg-opacity-75 bg-gray-900 p-48`}>
                              <div className="bg-blue-700 h-96 w-96 p-12 ">
                                    <AddWebmodif/>
                              </div>
                              <button type="button" onClick={closeWeb} className="rounded-xl bg-red-700 text-center font-bold text-xl text-white px-4 py-2">Close X</button>
                        
                    </div>

                    <div onClick={showFacebook} className=' cursor-pointer m-4 px-2  rounded-xl h-16 w-full bg-indigo-900 text-white'>
                          Demande de changement Contenu Facebook
                    </div>
                    <div className={`fixed ${showfacebook ? "hidden": ""} inset-0 h-screen w-full bg-opacity-75 bg-blue-500 p-48`}>
                              <div className="bg-blue-700 h-96 w-96 p-12 ">
                                    <AddFacebookemodif/>
                              </div>
                              <button type="button" onClick={closeFacebook} className="rounded-xl bg-red-700 text-center font-bold text-xl text-white px-4 py-2">Close X</button>
                        
                    </div>

                    <div onClick={showGoogle} className='cursor-pointer m-4 px-2  rounded-xl h-16 w-full bg-green-900 text-white'>
                          Demande de changement Contenu Google 
                    </div>
                    <div className={`fixed ${showgoogle ? "hidden": ""} inset-0 h-screen w-full bg-opacity-75 bg-green-900 p-48`}>
                              <div className="bg-blue-700 h-96 w-96 p-12 ">
                                    <AddGooglemodif/>
                              </div>
                              <button type="button" onClick={closeGoogle} className="rounded-xl bg-red-700 text-center font-bold text-xl text-white px-4 py-2">Close X</button>
                        
                    </div>


                    <div className=' m-4 mt-8 px-2  rounded-xl h-16 w-full bg-red-900 text-white'>
                          Uploader des documents/vidéo 
                    </div>

                    <div onClick={showRdv} className=' cursor-pointer m-4 mt-24 px-2  rounded-xl text-2xl h-16 w-full bg-red-400 text-white'>
                          Prendre rendez vous 
                    </div>
                    <div className={`fixed ${rdv ? "hidden": ""} inset-0 h-screen w-full bg-opacity-75 bg-green-900 p-48`}>
                              <div className="bg-blue-700 h-96 w-96 p-12 ">
                                    <AddAppointement/>
                              </div>
                              <button type="button" onClick={closeRdv} className="rounded-xl bg-red-700 text-center font-bold text-xl text-white px-4 py-2">Close X</button>
                        
                    </div>
             </div>
        
    )
}
