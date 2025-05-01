import React, { useReducer, useState } from 'react'

const Todo = () => {
    const [todos, dispatch] = useReducer(todoReducer, []);
    const [title, setTitle] = useState("")

    function todoReducer(state, action){
        switch(action.type){
            case "add":
                return [...state, {id: Date.now(), title: action.payload.title, completed: false}]
            case "delete":
                return state.filter((todo) => todo.id != action.payload.id)
            default:
                return state
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch({
            type: "add",
            payload: {title}
        })
        setTitle("")
    }

    function deleteTodo(key){
        dispatch({
            type: "delete",
            payload: {id:key}
        })
    }

    function toggleTodo(){

    }

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border px-4 py-2 flex-grow"
          placeholder="Enter todo"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Add</button>
      </form>

      {todos.map((todo) => {
        return <div className='border-1 p-10' key={todo.id}>
                    <h1 className='text-3xl ms-3 '>{todo.title}</h1>
                    <button onClick={() => deleteTodo(todo.id)} className='border-1 p-3 rounded-sm me-4'>delete</button>
                    <button onClick={toggleTodo} className='border-1 p-3 rounded-sm'>completed</button>
                </div>
      })}
    </div>
  )
}

export default Todo
