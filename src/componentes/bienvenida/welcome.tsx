import { FaLaptopCode, FaLinkedin, FaGithub, FaYoutube, FaFreeCodeCamp } from "react-icons/fa";
import styles from './welcome.module.css'

import { useState, useEffect } from "react";


const Welcome: React.FC = () => {

    const [text, setText] = useState('');
    const fullText = " ¡Hola! Soy DaniDev.";
    const typingSpeed = 150;

    useEffect(() => {
        let currentIndex = 0;

        const typingInterval = setInterval(() => {
            if (currentIndex < fullText.length){
                setText(fullText.substring(0, currentIndex + 1));
                currentIndex++;
            }
            else{
                clearInterval(typingInterval);
            }
        }, typingSpeed);
        return () => clearInterval(typingInterval); 
    }, []);

    return (
        <section className={styles.welcomeSection}>
            <h1 className={styles.title}><FaLaptopCode /> {text}</h1>
            <p className={styles.description}>
                Soy desarrollador, con un gran gusto por las tecnologias.   
            </p>
            <div className={styles.icons}>
                <a href="https://www.linkedin.com/in/daniel-garcía-2b5327321/" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
                <a href="https://github.com/Torao403" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
                <a href="https://www.youtube.com/@efectoresidual" target="_blank" rel="noopener noreferrer"><FaYoutube/></a>
                <a href="https://www.freecodecamp.org/Torao403" target="_blank" rel="noopener noreferrer"><FaFreeCodeCamp/></a>
            </div>
        </section>
    );
};

export default Welcome;