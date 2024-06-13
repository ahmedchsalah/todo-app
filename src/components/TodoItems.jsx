import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'
// eslint-disable-next-line react/prop-types
const TodoItems = ({text,id,isCompleted,deleteTodo,toggle}) => {
    return (
        <div onClick={()=>{toggle(id)}} className='flex items-center my-3 gap-2'>
            <div className='flex flex-1 items-center cursor-pointer'>
                <img src={isCompleted ? tick : not_tick} alt='' className='w-7'/>
                <p className={`ml-4 text-slate-700 text-[17px] decoration-slate-600 ${isCompleted ? " line-through" : ""}`}>{text}</p>
            </div>
            <img onClick={()=> deleteTodo(id)} src={delete_icon} className='w-3.5 cursor-pointer' alt=''/>
        </div>
    )
}
export default TodoItems
