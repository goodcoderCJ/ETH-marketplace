/* eslint-disable @typescript-eslint/no-unused-vars */


type ButtonProps = {
    text: string,
    onClick: () => void,
    className: string
}


// Creating customized button component
const Button: React.FC<ButtonProps> = ({text, onClick, className}) => {
  
  return (
    <button className={`${className} py-[0.3rem] px-[0.8rem] rounded-[6px] text-[14px]`} onClick={onClick}>{text}</button>
  )
}

export default Button