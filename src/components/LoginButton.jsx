import React, {useState} from 'react'
import PopUpShade from './PopUpShade'
import LoginPopup from './LoginPopup';

const LoginButton = () => {

    const [isOpen, setOpenModal] = useState(false)
  return (
    <div>
    <button className="cursor-pointer [border:none] py-2.5 px-2 bg-primary-500 w-40 rounded-xl flex flex-row items-center justify-center box-border" onClick={() =>{ setOpenModal(true);}}>
      <div className="relative text-base leading-[24px] font-semibold font-body-regular text-neutral-100 text-center">
        Login
      </div>
      <img
        className="w-6 relative h-6 overflow-hidden shrink-0 object-cover"
        alt=""
        src="/hugeiconarrowssolidin@2x.png"
        
      />
    </button>
    {isOpen && 
    <LoginPopup/>
    }
    </div>
  );
};

export default LoginButton;
