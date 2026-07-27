import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function SocialFooter(){
    return(
        <footer>
            <div className="footer__social">
                <a href="https://github.com/MariaBayan-Dev" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={28}/>
                </a>

                <a href="https://www.linkedin.com/in/mariabayanescobar/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={28}/>
                </a>
            </div>
        </footer>
    )
}