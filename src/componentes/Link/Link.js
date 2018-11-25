import React from 'react'
import './Link.css'

function Link(props) {
  return (
    <Link className="link" to={props.url}>
      {props.children}
    </Link>
  )
}

export default Link