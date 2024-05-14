import React, { useState } from 'react'
import './AddTodo.css'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../redux/slice/todoSlice'


function AddTodo() {

    const dispatch = useDispatch()

    const [formData, setformData] = useState('')

    const handleOnChage = (e) => {
        setformData(e.target.value)
    }

    return (
        <>
            <div className="card">
                <h3 className='head'>Add Task</h3>
                <div className="card-body">
                    <input type="text" name='todotext' onChange={handleOnChage} className='inputText' />
                    <button onClick={(e) => dispatch(addTodo({ id: Date.now(), text: formData }))} className="btn btn-success">Save</button>
                </div>
            </div>
        </>
    )
}

export default AddTodo