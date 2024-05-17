import { useNavigate } from "react-router-dom";
import { Button } from "./button";

export function Header() {
    const navigation = useNavigate()

    async function handleLogout() {
        localStorage.removeItem("token")
        navigation("/")
    }

    return (
        <div className="flex self-start items-center justify-end py-3 px-9 h-[4.375rem] bg-secondary w-full ">
            <Button 
                onClick={handleLogout}
                type="button" 
                classname="bg-Blue w-[17rem] h-14  px-6 py-2 rounded-lg disabled:bg-Blue/50"  
                label="Logout"
            />
        </div>
    )
}