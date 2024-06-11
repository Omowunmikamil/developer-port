import wunmi from './Header.module.css';
import github from '../../assets/github.svg';
import frontend from '../../assets/frontend.svg';
import linkedin from '../../assets/linkedIn.svg';
import twitter from '../../assets/twitter.svg';

const Header = () => {
    return (
        <header>
            <h2 className={wunmi.heading}>adamkeyes</h2>
            <div className={wunmi.icons}>
                <img src={github} alt="github" />
                <img src={frontend} alt="frontend" />
                <img src={linkedin} alt="linkedin" />
                <img src={twitter} alt="twitter" />
            </div>
        </header>
    )
}

export default Header;