import './styles.css';
import React from 'react';
import { ReactComponent as YouTubeIcon } from './youtube.svg'
import { ReactComponent as InstagranIcon } from './instagram.svg'


function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/c/DevSuperior" target="_new">
                    <YouTubeIcon />
                </a>
                <a href="https://www.linkedin.com/school/devsuperior/" target="_new">
                    <InstagranIcon />
                </a>
                <a href="https://www.instagram.com/c/devsuperiorig" target="_new">
                <InstagranIcon />
                </a>
            </div>
        </footer>
    )
}

export default Footer;