import Certik from '../public/certik-clear.png'

 const CertikBanner = () => {
     return ( 
        <div className='flex justify-center  h-100 bg-embrLightOrange w-full bg-opacity-30 pt-6'>
        <img src={Certik.src} className='h-14 sm:pr-10' />
        <img src={Certik.src} className='h-14 sm:pr-10' />
        <img src={Certik.src} className='h-14 pr-10 hidden sm:block' />
        <img src={Certik.src} className='h-14 pr-10 hidden sm:block' />
        <img src={Certik.src} className='h-14 pr-10 hidden sm:block'/>
        <img src={Certik.src} className='h-14' />
       </div>
     )
 }

 export default CertikBanner;