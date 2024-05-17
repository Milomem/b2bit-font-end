import { useEffect, useState } from "react";
import { Header } from "../components/header";
import { api } from "../service/api";
import { ProfileBox } from "../components/profileBox";
import { useNavigate } from "react-router-dom";

export interface UserProps{
    avatar: {
        high: string
    }
    name: string
    last_name?: string
    email: string
}

export function Profile() {
    const [ user, setUser ] = useState<UserProps>({} as UserProps)
    const [loading, setLoading] = useState(true)

    const navigation = useNavigate()

    async function getUser() {
        try{
        const localToken = localStorage.getItem("token")

        if(!localToken){
            navigation("/")
            return
        }

        const token = JSON.parse(localToken)

        const response = await api.get("/profile", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return response.data

    } catch(error) {
        console.log(error)
    }
    
    }

    useEffect(() => {
        setLoading(true)
        async function fetchData() {
            const response = await getUser();
            setUser(response);
            setLoading(false);
        }
        fetchData();
    }, []);

    return (
        <div className="flex flex-col bg-profile items-center justify-start w-full h-screen shadow-lg">
            <Header/>

            {loading ? <div></div> 
            : <ProfileBox avatar={user.avatar}  name={user.name} last_name={user.last_name} email={user.email}/> }
            
        </div>
    )
}