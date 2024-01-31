import classNames from "classnames";
import cls from './Button.module.scss';

const variantClasses = {
    clear: 'clear',
    normal: 'normal'
}

const Button = (props) => {
    const {children, className, variant, border, active, onClick} = props;

    const variantClass = variantClasses[variant] || variantClasses.normal;
    console.log('variant', variantClass);

    return (
        <button className={classNames(`button ${className}`, cls[variantClass], {
            [cls.active] : active,
            [cls.border] : border
        })}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
 
export {Button};