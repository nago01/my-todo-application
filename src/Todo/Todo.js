import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { BACKEND_QUERY } from '../graphql/Queries';
import {DELETE_ITEM , ADD_ITEM} from '../graphql/Mutation';

function Todo() {
    const [addItem] = useMutation(ADD_ITEM , {
        refetchQueries: [
            BACKEND_QUERY
        ],
    })

    const {data , loading , error , refetch} = useQuery(BACKEND_QUERY);
    const [deleteItem] = useMutation(DELETE_ITEM);
    // const [addItem] = useMutation(ADD_ITEM)
    const [name,setItem] =useState("");
    const [email,setDetail] = useState("");
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
                <h1>ADD YOUR TASK and DETAILS</h1>
                <input type="text"
                onChange = {
                    (e)=> {
                      setItem(e.target.value);
                      console.log({name})
                    }
                }
                />

                <input type="text"
                onChange = {
                    (e)=> {
                      setDetail(e.target.value);
                      console.log({email})
                    }
                }
                />
                

                <button onClick={(e)=>{
                    addItem({variables: {name,email}})
                }} > ADD </button>
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
