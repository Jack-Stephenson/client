import React from "react";
import {Link} from 'react-router-dom';

const Home =()=>{
    return (
        <div>
            <div>
                <button><Link to={'/equip_select'}><h1>Select Equipment!</h1></Link></button>
            </div>
        </div>
    )
}

export default Home;