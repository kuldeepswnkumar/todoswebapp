import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../../redux/slice/todoSlice'

function DisplayTodo({ inputTexts }) {
    const dispatch = useDispatch()
    const item = useSelector((state) => state.Todo)
    const handleDelete = (id) => {
        dispatch(removeTodo(id))
    }
    return (
        <div>
            <div>
                <table className="table">
                    {
                        item.length > 0 ?
                            item.map((todo, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{todo.id}</td>
                                        <td>{todo.text}</td>
                                        <td>
                                            <button className='btn-sec btn btn-danger' onClick={() => handleDelete(todo.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            <p>Record not found</p>
                    }


                </table>

            </div>
        </div>
    )
}

export default DisplayTodo