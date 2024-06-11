import wunmi from './SkillCard.module.css'
const SkillCard = ({title, text}) => {
  return (
    <div className={wunmi.skill_card}>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

export default SkillCard