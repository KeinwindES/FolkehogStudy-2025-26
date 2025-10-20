import { useState } from 'react'

export function Todo() {
    const [todoList, setTodoList] = useState([]);
  return(
  <>
    <div>
        <input type="text" />
        <button type="button">Add Todo</button>
        {
            todoList.map((item,index) => (
                return(<>
                    <div>{item}</div>
                    <button type="button">X</button>
                </>)
            ))
        }
    </div>    
  </>
  )
}