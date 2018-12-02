import React from 'react'
import './Containers.css'

function Containers(props){
    return(
        <div className="floating-containers">
             <img src={props.image} alt="" />
             <p className="text-content__second_part">{props.children}</p>
            
        </div>
    )
}

export default Containers