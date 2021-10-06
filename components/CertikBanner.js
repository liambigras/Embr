import Certik from '../public/certik-clear.png'

 const CertikBanner = () => {
     return ( 
        <div className='flex justify-center  h-100 bg-embrLightOrange w-full bg-opacity-30 pt-6'>
        <img src={Certik.src} className='h-12 pr-2' />
        <img src={Certik.src} className='h-12 pr-2' />
        <img src={Certik.src} className='h-12 pr-2' />
        <img src={Certik.src} className='h-12 pr-2' />
        <img src={Certik.src} className='h-12 pr-2' />
        <img src={Certik.src} className='h-12 pr-2' />
       </div>
     )
 }

 export default CertikBanner;