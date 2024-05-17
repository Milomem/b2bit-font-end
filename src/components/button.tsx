import { ButtonHTMLAttributes } from "react"

type ButtonProps =  {
    label: string
    classname: string
 } & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({label, classname, ...rest}: ButtonProps) {
    return (
        <button {...rest} className={classname}>
                <h2 className=" font-bold text-lg text-white text-center">{label}</h2>
        </button>
    )
}