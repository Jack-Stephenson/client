import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
const WeaponView = () => {
    const [search, setSearch] = useState('')
    const [recipeName, setRecipeName] = useState('')
    const [materialsObj, setMaterialsObj] = useState({})
    const [equipment, setEquipment] = useState([])
    const { weapon_type } = useParams();
    useEffect(() => {
        axios.get(`https://mhw-db.com/weapons`)
            .then(res => {
                setEquipment(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    const submitHandler = e => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/recipes`, {
            recipeName,
            materialsObj
        })
            .then(res => {
                console.log('Progress posted to our mongoDB')
            })
            .catch(err => {
                console.log(err)
            })
    }
    const clickHandler = (equipment) => {
        setRecipeName(equipment.name)
        equipment.crafting.craftingMaterials.length ? setMaterialsObj(equipment.crafting.craftingMaterials) : setMaterialsObj(equipment.crafting.upgradeMaterials)
        setSearch(equipment.name)
    }
    return (
        <div>
            <div>
                <form onSubmit={submitHandler}>
                    <p>
                        <label htmlFor="">Search for your equipment:</label><br />
                        <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} />
                    </p>
                    {equipment.map((equipment, i) => {
                        return (
                            <div key={i}>
                                {search === equipment.name && equipment.type === `${weapon_type}`
                                    ? <Link to={`/${equipment.id}`}><input type="submit" value="Build" /></Link>
                                    : <></>
                                }
                            </div>

                        )

                    })}

                </form>
            </div>
            <div>
                {equipment.map((equipment, i) => {
                    return (
                        <div key={i}>
                            {
                                equipment.name.toLowerCase().includes(search.toLowerCase()) && equipment.type === `${weapon_type}` && equipment.name !== search
                                    ? <button onClick={(e) => clickHandler(equipment)}>{equipment.name}</button>
                                    : <></>
                            }
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default WeaponView;