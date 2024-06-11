import SkillCard from "../skills-card/SkillCard"
import wunmi from './Skills.module.css'
import circle_2 from '../../assets/circle-2.svg'

const Skills = () => {
  return (
    <section className={wunmi.skills}>
        <SkillCard title='HTML' text='4 Years Experience'/>
        <SkillCard title='CSS' text='4 Years Experience'/>
        <SkillCard title='Javascript' text='4 Years Experience'/>
        <SkillCard title='Accessibility' text='4 Years Experience'/>
        <SkillCard title='React' text='3 Years Experience'/>
        <SkillCard title='Sass' text='3 Years Experience'/>

        <img src={circle_2} alt='circle' className={wunmi.circle_2}/>
    </section>
  )
}

export default Skills