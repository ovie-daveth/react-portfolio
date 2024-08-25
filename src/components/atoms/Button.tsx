import React from 'react'
import cn from "classnames"

type ButtonProp = {
    className?: string,
    action: (e: any) => void;
    children: React.ReactNode;
    type: string | any
 
}
const Button = ({className, action, children, type} : ButtonProp) => {
  return (
    <button onClick={action} type={type}  className={cn(className, "flex items-center py-3 px-5 gap-3 rounded-md border-b-4  border-l-2 active:border-0")}>
      {children}
    </button>
  )
}

export default Button
