import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const linkClass = ({ isActive }) =>
    isActive
      ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
      : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';

  return (
    <nav className='bg-indigo-700 border-b border-indigo-500'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between'>
          <div className='flex flex-1 items-center md:items-stretch justify-between'>
            <NavLink className='flex flex-shrink-0 items-center mr-4' to='/'>
              <img className='h-10 w-auto mx-2' src={logo} alt='Logo' />
            </NavLink>
            <div className='md:ml-auto lg:block hidden'>
              <div className='flex space-x-2'>
                <NavLink to='/' className={linkClass}>
                  Home
                </NavLink>
                <NavLink to='/weather' className={linkClass}>
                  Weather
                </NavLink>
                <NavLink to='/favourite' className={linkClass}>
                  My Favourite
                </NavLink>
              </div>
            </div>
            {/* Add Hamburger menu icon */}
            <div className='lg:hidden'>
              <button
                className='flex justify-center w-full px-4 py-2 text-sm text-white bg-indigo-600 hover:bg-indigo-700 rounded-md'
                aria-label='Open navigation'
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'}`}>
          <div className='flex flex-col space-y-2'>
            <NavLink to='/' className={linkClass}>
              Home
            </NavLink>
            <NavLink to='/weather' className={linkClass}>
              Weather
            </NavLink>
            <NavLink to='/favourite' className={linkClass}>
              My Favourite
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;