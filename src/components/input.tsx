import { InputHTMLAttributes } from "react"

 type InputProps =  {
    label: string
    type: string
    placeholder: string
    name: string
 } & InputHTMLAttributes<HTMLInputElement>

export function Input({ label,type,placeholder,name, ...rest}: InputProps) {
    return (
        <div {...rest}>
            <h2 className=" font-bold text-lg">{label}</h2>
            <input 
            name={name}
            className=" bg-primary px-[1.125rem] pt-[1.125rem] pb-5 w-full rounded-lg" 
            placeholder={placeholder}
            type={type} 
            />
        </div>
    )
}