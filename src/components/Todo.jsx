import React, {useEffect, useRef, useState} from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from "./TodoItems.jsx";
const Todo = () => {

    const inputRef = useRef();
    const [todoList,setTodoList] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []);
    const add = () =>{
        const inputText = inputRef.current.value.trim();
        if(inputText===''){
            return null;
        }
        const newTodo = {
            id : Date.now(),
            text : inputText,
            isCompleted : false
        }
        setTodoList((prev) => [...prev,newTodo])
        inputRef.current.value=''
    }
    const deleteTodo = (id) =>{
        setTodoList((prevs) => {
            return prevs.filter((todo) => todo.id !== id)
        })
    }
    const toggle = (id) =>{
        setTodoList((prevs) =>{
            return prevs.map((todo) =>{
                if(todo.id===id){
                    return {...todo,isCompleted: !todo.isCompleted}
                }
                return todo;
            })
        })
    }
    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todoList));
    },[todoList])
    return (
        <div className='bg-white w-11/12 place-self-center max-w-md flex
        flex-col p-7 min-h-[450px] rounded-xl'>
            <div className='flex items-center mt-7 gap-2'>
                <img src={todo_icon} className='w-8' alt=''/>
                <h1 className='text-3xl font-semibold'>To-Do List</h1>
            </div>
            <div className='flex items-center my-7 rounded-full bg-gray-200'>
                <input ref={inputRef} className='bg-transparent border-0 flex-1 outline-none h-14 pl-6 pr-2 placeholder:text-slate-600' type='text' placeholder='Add Your Task'/>
                <button onClick={add} className='bg-orange-600 w-32 h-14 border-none rounded-full text-white text-lg font-medium cursor-pointer'>Add +</button>
            </div>
            <div>
                {todoList.map((item,index) => {
                    return <TodoItems toggle={toggle} key={index} text={item.text} id={item.id} isCompleted={item.isCompleted} deleteTodo={deleteTodo}/>
                })}
                {/*<TodoItems text='Learn Coding'/>*/}
                {/*<TodoItems text='Learn Coding from me' />*/}
            </div>
        </div>
    )
}
export default Todo
