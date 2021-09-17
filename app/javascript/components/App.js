import React from 'react'
import AddAnswer from './AddAnswer'
import { AddAppointement } from './AddAppointement'
import { AddComment } from './AddComment'
import { AddFacebookemodif } from './AddFacebookmodif'
import { AddGooglemodif } from './AddGooglemodif'
import { AddWebmodif } from './AddWebmodif'
import AsideBar from './AsideBar'
import Action from './Action'

import Comment from './Comment'
import Communication from './Communication'
import PannelClient from './PannelClient'



function App(){
    

        
   
    
 
        return (
  <>
    <div className="flex  bg-yellow-300">
         
      
         <AsideBar/>
         <div className="bg-red-400 w-full h-full  ">

            <h1 className="text-2xl bg-gray-400 ">Big Section made of 3 component switchable</h1>
           <PannelClient/>

         </div>
         <Action/>

    </div>
       
            
              
                   
        
              

   
   


         
           </>
        )
    }


export default App