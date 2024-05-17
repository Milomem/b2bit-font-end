import { UserProps } from "../pages/profile";
import { ProfileTextBox } from "./profileTextBox";

export function ProfileBox({ avatar, name, last_name, email}:UserProps) {
    return (
        <div 
                className="flex flex-col items-center justify-start p-7 mt-24 w-[22.25rem] 
                h-auto shadow-xl bg-secondary rounded-lg"
            >

                 <div className=" flex flex-col items-center justify-center mb-8">
                    <p className=" text-xs font-semibold mb-2">Profile picture</p>
                    <img className=" w-14 h-14 rounded-lg" src={avatar.high} alt="" />
                 </div>

                 <div className=" w-full space-y-5">
                    <ProfileTextBox title="Name" last_name={last_name} label={name}/>
                    <ProfileTextBox title="E-mail" label={email}/>
                 </div>
            </div>
    )
}