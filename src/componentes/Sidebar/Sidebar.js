import React, { Component } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Sidebar.css'

class Sidebar extends Component{
    render(){
        return(
        <section className="container__sidebar">
            <ul>
                <li>
                <AnchorLink href='#item1'>Things1</AnchorLink>
                </li>
                <li>
                  <AnchorLink href='#item2'>Things2</AnchorLink>
                </li>
                <li>
                <AnchorLink href='#item3'>Things3</AnchorLink>
                </li>
                <li>
                <AnchorLink href='#item4'>Things4</AnchorLink>
                </li>
                <li>
                <AnchorLink href='#item5'>Things5</AnchorLink>
                </li>
            </ul>
        </section>    
        )
    }
}

export default Sidebar 