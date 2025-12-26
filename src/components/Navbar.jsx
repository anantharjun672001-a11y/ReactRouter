import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="bg-pink-200 fixed w-full z-20 top-0 start-0 border-b-pink-200 border-default">
            <div className="max-7xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    
                    <span className="self-center text-xl text-heading font-extrabold text-purple-950 whitespace-nowrap">Shopsy !</span>
                </Link>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                
                </div>
            </div>
            </nav>
        </div>
    );
};

export default Navbar;
