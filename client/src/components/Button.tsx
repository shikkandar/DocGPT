import React from 'react'

interface ButtonProps {
    buttonName: string,
    type?: "submit"
}

const Button:React.FC<ButtonProps> = ({buttonName, type}) => {
  return (
    <>
    <button type={type}>{buttonName}</button>
    </>
  )
}

export default Button