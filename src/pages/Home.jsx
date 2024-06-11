import Contact from '../components/contact/Contact';
import Hero from '../components/hero/Hero';
import Project from '../components/projects/Project';
import Skills from '../components/skills/Skills';
import VerticalLine from '../components/vertical-line/VerticalLine';
import Header from '../layout/header/Header';

const Home = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <VerticalLine />
            <Skills />
            <Project />
            <Contact />
        </div>
    )
}

export default Home;