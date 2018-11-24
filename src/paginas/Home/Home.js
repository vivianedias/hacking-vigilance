import React, { Component } from 'react'
import Navbar from '../../componentes/Navbar/Navbar'
import './Home.css'

class Home extends Component {
    
    render(){
        return(
            <div>
                <Navbar />
                <h1>Hellow Vivi!</h1>
            </div>
        )
    }
}

export default Home