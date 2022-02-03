import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
const WeaponDetails=()=>{
    const {equipment} = useParams();
    const [equipmentDetail, setEquipmentDetail]=useState({})
    const [monsters, setMonsters] = useState([])
    useEffect(()=>{
        axios.get(`https://mhw-db.com/weapons/${equipment}`)
            .then(res=>{
                setEquipmentDetail(res.data)
            })
            .catch(err=>console.log(err))
    }, [])
    useEffect(()=>{
        axios.get('https://mhw-db.com/monsters')
            .then(res=>{
                setMonsters(res.data)
            })
            .catch(err=>console.log(err))
    }, [])
    return (
        <div>
            <h1>Building {equipmentDetail.name}!</h1>
            <div>
                
            </div>
        </div>
    )
}