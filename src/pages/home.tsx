
import Logo from '../assets/LogoB2bit.svg';
import { LoginForm } from '../components/loginForm';


export function Home() {
  return (
    <div className="flex flex-1 min-h-screen antialiased items-center justify-center 
      font-nunito bg-primary">
          <div 
            className=" flex flex-col items-center bg-secondary rounded-[18px] 
            px-6 pt-14 pb-10 shadow-lg w-[27.375rem] h-auto"
          >
            {/* Logo */}
            <img className=' w-[18rem] h-[7.5rem] mb-9' src={Logo} alt="Logo b2bit" />

            <LoginForm/>
          </div>
        </div>
    );
}