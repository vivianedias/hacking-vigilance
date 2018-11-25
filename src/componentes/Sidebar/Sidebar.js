import React, { Component } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Link from '../Link/Link'
import './Sidebar.css'

class Sidebar extends Component {
    render() {
        return (
            <section className="container__sidebar container__sidebar-style">
                <ul>
                    <li>
                        <Link>
                            <AnchorLink href='#primeiraSecao'>Conectada na Web</AnchorLink>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <AnchorLink href='#segundaSecao'>Contas Online</AnchorLink>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <AnchorLink href='#terceiraSecao'>Mobile</AnchorLink>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <AnchorLink href='#quartaSecao'>Desktop</AnchorLink>
                        </Link>
                    </li>
                </ul>
            </section>
        )
    }
}

export default Sidebar 