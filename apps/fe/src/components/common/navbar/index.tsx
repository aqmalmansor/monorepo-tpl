import { NavLink } from 'react-router';

export function Navbar() {
    return (
        <nav>
            <div className='container mx-auto my-4 flex gap-3'>
                <NavLink to='/' end>
          Home
                </NavLink>
                <NavLink to='/about' end>
          About
                </NavLink>
            </div>
        </nav>
    );
}
