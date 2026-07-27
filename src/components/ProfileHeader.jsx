import photoProfile from '../assets/photo-profile.png'
import { Mail, Link } from 'lucide-react'

export default function ProfileHeader(){
    return(
        <header>
            <img src={photoProfile} alt="Imagen de perfil de María Bayán" />
            <h1 className="header__title">María Bayán Escobar</h1>
            <p className="header__subtitle">Frontend Developer Junior</p>
            
            <div className="header__tech">
                <span className="tech__html">HTML</span>
                <span className="tech__css">CSS</span>
                <span className="tech__js">JS</span>
                <span className="tech__react">React</span>
            </div>

            <div className="contact-links">
                <a className="contact__btn" href="mailto:mariabayanescobar@gmail.com" rel="noopener noreferrer" target="_blank">
                    <Mail size={18} />
                </a>
                <a className="contact__btn" href="https://mariabayan.netlify.app/" rel="noopener noreferrer" target="_blank">
                    <Link size={18} />
                </a>
            </div>
        </header>
    )
}