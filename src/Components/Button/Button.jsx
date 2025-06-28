import style from "./Button.module.css"

function Button({ link, children, size }) {
    
    const sizeClass = style[size];
  
    return (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`${style.btn} ${sizeClass}`}
      >
        {children}
      </a>
    );
  }

export default Button