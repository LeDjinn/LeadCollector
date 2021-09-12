import React from 'react';
import { useMutation } from '@apollo/client';

import { ADD_COMMENT, COMMENTS } from '../queries/allQueries';



export const AddComment =()=> {
     const [addComment, {data}] = useMutation(ADD_COMMENT)

     const onSubmit=(e)=>{
        e.preventDefault();

       const {body} = e.target.elements;
       
     addComment({
         variables: {body: body.value},
        refetchQueries: [{query:COMMENTS }]
    }).then(body.value="")
    //window.location.reload();
     }
    

    return <form onSubmit={onSubmit}>
        <div>
        
            <input type ='text' name ="body" placeholder= "Votre Commentaire"/>
        </div>
        <button className='text-2xl text-indigo-700 font-bold'>AddComment</button>
    </form>
}