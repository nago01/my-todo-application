import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { BACKEND_QUERY } from '../graphql/Queries';
import {DELETE_ITEM , ADD_ITEM} from '../graphql/Mutation';

function Todo() {
    const {data , loading , error , refetch} = useQuery(BACKEND_QUERY);
    const [deleteItem] = useMutation(DELETE_ITEM);
    const [addItem] = useMutation(ADD_ITEM)
    const [newItem,setItem] =useState("");
    if(loading) return <div>Loading Data</div>

    // const {loading,data,error} = useQuery(BACKEND_QUERY)
    const deleteItemFun = (id) => {
        deleteItem(
            {
                variables: {
                    id
                }
            }
        )
        refetch()
    }

    const addItemFun = (id) => {
        addItem(
            {
                variable: {
                    id
                }
            }
        )
    }

    return (
        <div>
            <div>
                <h1>ADD YOUR TASK</h1>
                <input type="text"
                onChange = {
                    (e)=> {
                      setItem(e.target.value);
                    }
                }
                />
                
                <button onClick={()=> addItemFun(newItem)}> ADD </button>
            </div>
            <div>
            {
                data.users.map(
                    user => (
                        <p key={user.id}>
                            <span>{user.name}</span>
                            <button  onClick={()=> deleteItemFun(user.id)}>DELETE the task</button>
                            
                        </p>

                    )
                )
            }
            </div>
        </div>
    )
}

export default Todo
