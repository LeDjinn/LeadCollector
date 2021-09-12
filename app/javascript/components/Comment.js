import React from 'react'
import Hello from './Hello';
import {useQuery} from '@apollo/client'
import  AddAnswer  from './AddAnswer';
import {COMMENTS} from '../queries/allQueries'



function Comment(comId){
  const { loading, error, data } = useQuery(COMMENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.comments.map((comment) => (
    <div key={comment.id}>
      <p className="text-5xl">
        {comment.body}
        {comment.userId}
      <AddAnswer comId={comment.id}/>
      </p>
        {comment.answers.map((answer)=>
        <>
        <div className='bg-red-400' key={answer.id}>{answer.body}</div>
        
        </>)
        }
    
    </div>
  ));
}

export default Comment
