import photoProfile from '../assets/photo-profile.png'
import { Mail, Link } from 'lucide-react'

export default function ProfileHeader(){
    return(
        <header>
            <img src={photoProfile} alt="Imagen de perfil de María Bayán" />
            <h1 className="header__title">María Bayán Escobar</h1>
            <p className="header__subtitle">Frontend Developer Junior</p>
            <p className="header__tech">HTML, CSS, JavaScript, React, Vite</p>

            <div className="contact-links">
                <a href="mailto:mariabayanescobar@gmail.com" rel="noopener noreferrer" target="_blank">
                    <Mail />
                </a>
                <a href="https://mariabayan.netlify.app/" rel="noopener noreferrer" target="_blank">
                    <Link />
                </a>
            </div>
        </header>
    )
}