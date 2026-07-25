import photoProfile from '../assets/photo-profile.png'

export default function ProfileHeader(){
    return(
        <header>
            <img src={photoProfile} alt="Imagen de perfil" />
            <h1>María Bayán Escobar</h1>
            <span>Frontend Developer Junior</span>
            <p>HTML, CSS, JavaScript, React, Vite</p>
        </header>
    )
}