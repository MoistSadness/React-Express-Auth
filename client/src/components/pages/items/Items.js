import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../../context/AuthProvider";
import requestErrorHandler from "../../../etc/requestErrorHandler";
import axios from 'axios'

import './Items.css'

export default function Items(){
    const {auth} = useContext(AuthContext)
    console.log(auth)

    const [err, setErr] = useState({})

    const [items, setItems] = useState([])
    useEffect(() => { getItems() }, [])
    //console.log()

    async function getItems() {
        try {
            await axios
                .get(
                    'http://localhost:5000/api/v1/items',
                    {
                        headers: { 
                            'Content-Type': 'application/json',
                            'authorization': 'Bearer ' + auth.accessToken
                        },
                        withCredentials: true
                    }
                )
                .then(response => setItems(response.data))
        } catch (error) {
            //console.log(error.response)
            //requestErrorHandler(error.response.data, error.response.status)
            setErr({
                status: error.response.status,
                message: error.response.data
            })
        }
    }

    function showItems() {
        return items.map(item => (
            <div key={item.id}>{item.name}</div>
        ))
    }

    console.log(items)

    return (
        <div>
            
            {showItems()}
        </div>
    )
}