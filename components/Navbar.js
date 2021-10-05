import logo from '../public/logo.svg'
import NavbarItems from './NavbarItems';
import Bars from '../public/bars.svg'
const Navbar = () => {
    return (
     <div className='fixed w-screen'>
            <div className='flex pl-10 sm:pl-20 mt-5'>
            <img src={logo.src} className='h-5'/>
            <div className='flex w-full justify-end sm:pr-20 h-5'>
                <div className='hidden sm:block'>
                <NavbarItems />
                </div>
                <div className='sm:hidden pr-5 '>
                    <img src={Bars.src} className='h-8' />
                </div>
               
               
            </div>
        </div>
     </div>
    )
}

export default Navbar;