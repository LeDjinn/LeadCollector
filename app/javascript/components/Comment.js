import React from 'react'

export default function Comment() {
    const test ='testifying'
    const data ={
        comment: [
            {
              id: '1',
              title: 'Active Rails',
              userId: 2
            },
          ],
        }
    
    return (
        <div>
          <div className="bg-red-300 h-24 w-24 rounded-xl">{test}</div>  
          
        </div>
    )
}
