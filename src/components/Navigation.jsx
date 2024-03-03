import { Navbar, NavbarBrand, NavbarToggle, NavbarCollapse } from 'flowbite-react';
import DefaultButton from './DefaultButton.jsx';
import { NavLink, Link } from "react-router-dom";



function Navigation() {
    return (
        <Navbar fluid rounded className='px-10 font-custom dark:bg-white xl:px-20'>
            <NavbarBrand>
                <Link to="/" exact className="mr-3 mt-3 h-6 sm:h-9 text-base font-bold"> Adewale O. Obadina </Link>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse className='m-4 font-bold'>
                <NavLink to="/" exact="true" className='mt-3 text-primaryTextDark' > Home</NavLink>
                <NavLink to="/about" className='mt-3 text-primaryTextDark'> About </NavLink>
                <NavLink to="/research" className='mt-3 text-primaryTextDark'> Research </NavLink>
                <NavLink to="/publications" className='my-3 text-primaryTextDark'> Publication </NavLink>
                <DefaultButton className={'dark:bg-white bg-white w-full text-primaryGreen border-green-400 border-2 border-solid rounded-lg'} buttonText={'Contact'} />
            </NavbarCollapse>
        </Navbar>
    );
}

export default Navigation;