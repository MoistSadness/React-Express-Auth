import React, { useState, useEffect } from "react";
import axios from "axios";

import './MysticCodes.css'

export default function MysticCodes(){
    const [mysticCodes, setMysticCodes] = useState([])
    useEffect(() => { getMysticCodes() }, [])

    async function getMysticCodes() {
        await axios
            .get('http://localhost:5000/api/v1/mysticCodes')
            .then(response => setMysticCodes(response.data))
    }

    function showMysticCodes() {
        return mysticCodes.map(mysticCode => (
            <div key={mysticCode.id}>{mysticCode.name}</div>
        ))
    }

    console.log(mysticCodes)

    return (
        <div>
            {showMysticCodes()}
        </div>
    )
}