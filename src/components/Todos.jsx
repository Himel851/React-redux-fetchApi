import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getAllTodos} from '../services/actions/todosActions'

const Todos = () => {

    const { isLoading, todos, error } = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllTodos());
    },[]);

    return (
        <div>
            <h1>Todos App</h1>
            {isLoading && <h3>Loading....</h3>}
            {error && <h3>{error.message}</h3>}
            <section>
                {
                    todos && todos.map(data => {
                        const {id, title} = data;
                     return (
                        <div key={id}>
                            <h4>{id}</h4>
                            <h4>{title}</h4>

                        </div>
                     )   
                    })
                }
            </section>

        </div>
    )
}

export default Todos