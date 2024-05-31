import logoImg from '../assets/quiz-logo.png'

export default function Header(){
    return(
        <header>
            <img src={logoImg} alt="logo" />
            <h1>เกมส์ตอบคำถาม</h1>
        </header>
    );
}