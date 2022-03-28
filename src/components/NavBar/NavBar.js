import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const NavBar = () => {
    const routes = [
        { id: 1, name: 'Home', link: './home' },
        { id: 2, name: 'Shop', link: './shop' },
        { id: 3, name: 'Deals', link: './deals' },
        { id: 4, name: 'Cupon', link: './cupon' },
        { id: 5, name: 'Contact', link: './contact' }
    ];
    const [open, setOpen] = useState(false)
    return (
        <nav>
            <div onClick={() => { setOpen(!open) }} className='w-6 h-6 md:hidden'>
                {open ? <XIcon></XIcon> : <MenuIcon ></MenuIcon>}
            </div>

            <ul className={`md:flex justify-center absolute ease-in duration-500 ${open ? 'top-6' : 'top-[-120px]'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav >
    );
};

export default NavBar;