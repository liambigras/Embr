import logo from '../public/logo.svg'
import NavbarItems from './NavbarItems';
const Navbar = () => {
    return (
        <div className='flex h-20 w-screen pl-20 mt-5'>
            <img src={logo.src} className='h-5'/>
            <div className='flex w-full justify-end pr-20 h-5'>
                
                <NavbarItems />
               
            </div>
        </div>
    )
}

export default Navbar;