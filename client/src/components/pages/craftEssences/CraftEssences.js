import React, { useState, useEffect } from "react";
import axios from 'axios'

import './CraftEssences.css'

export default function CraftEssences() {
    const [craftEssences, setCraftEssences] = useState([])
    useEffect(() => { getCraftEssences() }, [])

    async function getCraftEssences() {
        await axios
            .get('http://localhost:5000/api/v1/craftEssences')
            .then(response => setCraftEssences(response.data))
    }

    function showCraftEssences() {
        return craftEssences.map(craftEssence => (
            <div key={craftEssence.id}>{craftEssence.name}</div>
        ))
    }

    console.log(craftEssences)

    return (
        <div>
            {showCraftEssences()}
        </div>
    )
}