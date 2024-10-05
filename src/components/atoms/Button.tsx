import React from 'react'
import cn from "classnames"

type ButtonProp = {
    className?: string,
    action: (e: any) => void;
    children: React.ReactNode;
    type: string | any,
    disabled?: boolean
 
}
const Button = ({className, action, children, type, disabled} : ButtonProp) => {
  return (
    <button disabled={disabled} onClick={action} type={type}  className={cn(className, "flex items-center md:py-3 py-2 px-5 gap-3 rounded-md border-b-4  border-l-2 active:border-0")}>
      {children}
    </button>
  )
}

export default Button
