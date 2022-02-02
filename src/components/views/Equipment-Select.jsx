import React, {useState} from "react";
import {Link} from 'react-router-dom';

const Equipment=()=>{
    const [weapon, setWeapon]=useState(false)
    const [armor, setArmor]=useState(false)
    const clickHandler=(equipment)=>{
        if(equipment==='weapon'){
            setWeapon(true)
            setArmor(false)
        }
        if(equipment==='armor'){
            setWeapon(false)
            setArmor(true)
        }
    }
    return (
        <div>
            <div>
                <button onClick={()=>clickHandler('weapon')}><h1>Weapons</h1></button>
            </div>
            <div>
                <button onClick={()=>clickHandler('armor')}><h1>Armor</h1></button>
            </div>
            <div>
                <button><h1>Pendants</h1></button>
            </div>
            <div>
                <button><h1>Charms</h1></button>
            </div>
            {weapon?
            <div>
                <ul>
                    <button><Link to={`/weapon/great-sword`}>Great Sword</Link></button>
                    <button><Link to={'/weapon/long-sword'}>Long Sword</Link></button>
                    <button><Link to={'/weapon/sword-and-shield'}>Sword and Shield</Link></button>
                    <button><Link to={'/weapon/dual-blades'}>Dual Blades</Link></button>
                    <button><Link to={'/weapon/hammer'}>Hammer</Link></button>
                    <button><Link to={'/weapon/hunting-horn'}>Hunting Horn</Link></button>
                    <button><Link to={'/weapon/lance'}>Lance</Link></button>
                    <button><Link to={'/weapon/gunlance'}>Gunlance</Link></button>
                    <button><Link to={'/weapon/switch-axe'}>Switch Axe</Link></button>
                    <button><Link to={'/weapon/charge-blade'}>Charge Blade</Link></button>
                    <button><Link to={'/weapon/insect-glaive'}>Insect Glaive</Link></button>
                    <button><Link to={'/weapon/light-bowgun'}>Light Bowgun</Link></button>
                    <button><Link to={'/weapon/heavy-bowgun'}>Heavy Bowgun</Link></button>
                    <button><Link to={'weapon//bow'}>Bow</Link></button>
                </ul>
            </div>
            :armor?
            <div>
                <ul>
                    <button><Link to={'/armor/head'}>Helmet</Link></button>
                    <button><Link to={'/armor/chest'}>Chestpiece</Link></button>
                    <button><Link to={'/armor/gloves'}>Arms</Link></button>
                    <button><Link to={'/armor/waist'}>Waist</Link></button>
                    <button><Link to={'/armor/legs'}>Legs</Link></button>
                </ul>
            </div>
            :<></>
            }
        </div>
    )
}

export default Equipment;