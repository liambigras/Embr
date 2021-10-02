import {useState } from 'react'

const NavbarItems = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)

    return (
        <div className='flex text-sm text-embrWhite tracking-wide'>
            <div className='border-b-2 border-embrOrange'>
                <a href=''>Why Embr</a>
            </div>
            <div className='pl-5'>
                <a href='' className='focus:border-b-2 border-embrOrange'>Presale</a>
            </div>
            
            <a href='' className='pl-5 '>Products</a>
            <a href='' className='pl-5'>Team</a>
            <a href='' className='pl-5'>Contact</a>
            <a href='' className='pl-5 text-embrOrange'>Check eligibility</a>
        </div>
    )
}

export default NavbarItems;