import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function SocialFooter(){
    return(
        <footer>
            <div className="footer__social">
                <a href="">
                    <FaGithub size={28}/>
                </a>

                <a href="">
                    <FaLinkedin size={28}/>
                </a>
            </div>
        </footer>
    )
}