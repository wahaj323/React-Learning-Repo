import React, { useReducer } from 'react'

const Counter = () => {

    const countReducer = (state, action)=>{
        switch(action){
            case "Increment":
                return state + 1;
            case "Decrement":
                return state - 1;
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(countReducer, 0);

    
  return (
    <div className='mx-16 flex gap-10 items-center'>
      <button onClick={() => dispatch("Increment")} className='border-1 px-5 py-5 rounded-sm'>Increment</button>
      <h1 className='text-2xl'>Count: {state}</h1>
      <button onClick={()=> dispatch("Decrement")} className='border-1 px-5 py-5 rounded-sm'>Decrement</button>
    </div>
  )
}

export default Counter
