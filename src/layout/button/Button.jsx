/* eslint-disable react/prop-types */
import wunmi from './Button.module.css';

const Button = ({ text, disable }) => {
    return (
        <button disabled={disable} className={wunmi.button}>
            {text}
        </button>
    );
}

export default Button;