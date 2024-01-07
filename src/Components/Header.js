import React from 'react';
import Logo from "../Components/Assets/logo (1).png"
import './Header.scss'
const Header = () => {
    return (
       <header className={'header'}>
           <div className={'header-container'}>
               <img src={Logo} alt=""/>
               <nav className={'header-nav'}>
                   <a href={'/'}>Destination</a>
                   <a href={'/'}>Offer</a>
                   <a href={'/'}>Tour</a>
                   <a href={'/'}>Blog</a>
               </nav>
               <div className={'header-icons'}>
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle></svg><link/>
                       <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M19.7619 19.1139L15.5808 14.9328C16.8511 13.4064 17.6161 11.4448 17.6161 9.30954C17.6161 4.45122 13.6649 0.5 8.80657 0.5C3.95 0.5 -0.0012207 4.45122 -0.0012207 9.30779C-0.0012207 14.1644 3.95 18.1156 8.80657 18.1156C10.9436 18.1156 12.9034 17.3506 14.4299 16.0803L18.6109 20.2614C18.7706 20.421 18.9776 20.5 19.1864 20.5C19.3935 20.5 19.6023 20.421 19.7619 20.2614C20.0795 19.9456 20.0795 19.4315 19.7619 19.1139ZM1.62524 9.30779C1.62524 5.34779 4.84657 2.12646 8.80657 2.12646C12.7666 2.12646 15.9897 5.34779 15.9897 9.30779C15.9897 13.2678 12.7666 16.4909 8.80657 16.4909C4.84657 16.4909 1.62524 13.2678 1.62524 9.30779Z" fill="#2C2C2C"/>
                       </svg>

               </div>
           </div>
       </header>
    );
};

export default Header;
