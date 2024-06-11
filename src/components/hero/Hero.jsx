
import Button from '../../layout/button/Button';
import heroImage from '../../assets/hero-image.svg';
import oval from '../../assets/oval.svg';
import circle_1 from '../../assets/circle-1.svg';
import wunmi from './Hero.module.css';


const Hero = () => {
    return (
        <section className={wunmi.hero_container}>
            <div className={wunmi.hero_content}>
                <h1>Nice to meet you!<br/> I'm <span>Adam Keyes</span>.</h1>
                <p>Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.</p>

                <img src={circle_1} alt="grouped circles" className={wunmi.circle_1}/>
                
                <div className={wunmi.button}>
                    <Button text='CONTACT ME'/>
                </div>
            </div>
            <div className="hero_image">
                <img src={heroImage} alt="Hero Image" className={wunmi.hero_image} />

                <img src={oval} alt="oval" className={wunmi.oval} />
            </div>

        </section>
    )
}

export default Hero;