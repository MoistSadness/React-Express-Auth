import React, { useState, useEffect } from "react";
import axios from 'axios'

import './Servants.css'

export default function Servants() {
    const [servants, setServants] = useState([])
    useEffect(() => { getServants() }, [])

    async function getServants() {
        await axios
            .get('http://localhost:5000/api/v1/servants')
            .then(response => setServants(response.data))
    }

    function showServants() {
        return servants.map(servant => (
            <div key={servant.id}>{servant.name}</div>
        ))
    }

    console.log(servants)

    return (
        <div>
            {showServants()}
        </div>
    )
}