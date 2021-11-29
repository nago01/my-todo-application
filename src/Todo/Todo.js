import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import React from 'react';
import { BACKEND_QUERY } from '../graphql/Queries';
import {DELETE_ITEM} from '../graphql/Mutation';
function Todo() {
    const {data , loading , error , refetch} = useQuery(BACKEND_QUERY);
    const [deleteItem] = useMutation(DELETE_ITEM);
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
    return (
        <div>
            <div>
                <h1>ADD YOUR TASK</h1>
                <input></input>
                
                <button> ADD </button>
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
