import React, { Component } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Sidebar.css'

class Sidebar extends Component {

    render() {
        return (
                <li className="sidebar_styling">
                        <AnchorLink href={this.props.linkid} className="sidebar_links">{this.props.link}</AnchorLink>
                </li>
        )
    }
}

export default Sidebar