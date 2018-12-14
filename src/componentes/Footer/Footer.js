import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer_container">
                <p className="footer-spacing"><a className="footer-link" href="/">Apoie esse projeto</a></p>
                <p className="footer-spacing"><a className="footer-link" href="/">Home</a></p>
                <p className="footer-spacing"><a className="footer-link" href="/teste">Teste</a></p>
                <p className="footer-spacing"><a className="footer-link" href="/docs">Docs</a></p>
                <p className="footer-spacing"><a className="footer-link" href="/sobre">Sobre</a></p>
        </footer>
    )
}

export default Footer