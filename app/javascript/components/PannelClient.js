import React,{useState} from 'react'
import Communication from './Communication'
import FacebbokAdd from './FacebbokAdd'
import GoogleAdd from './GoogleAdd'

export default function PannelClient() {

     const [target, setTarget]=useState(1)
     
     const openCom =()=>setTarget(1)
     const openFace =()=>setTarget(2)
     const openGoogle =()=>setTarget(3)

     let component =''
    if (target===1){
         component= <Communication/>
        }
    if(target===2){
        component=<FacebbokAdd/>
    }
    if(target===3){
        component=<GoogleAdd/>
    }
        
     
    return (
        <div>
            <button onClick ={openCom} type="button" className="text-white text-center text-2xl font-bold bg-gray-300 rounded-xl px-4 py-2">Commentaire</button>
            <button onClick={openFace} type="button" className="text-white text-center text-2xl font-bold bg-indigo-300 rounded-xl px-4 py-2">Facebook Result</button>
            <button onClick={openGoogle} type="button" className="text-white text-center text-2xl font-bold bg-green-300 rounded-xl px-4 py-2">Google Result</button>
           {component}
        </div>
    )
}
