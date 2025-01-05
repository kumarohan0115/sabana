import React, { useEffect } from 'react'

const Todo:React.FC = () => {
    const url = 'https://jsonplaceholder.typicode.com/todos'
    useEffect(()=>{
        fetch(url)
            .then((res)=>{
                console.log(res)
            })
    },[])
  return (
    <div>
      
    </div>
  )
}

export default Todo
