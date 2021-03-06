import RightArrowWhite from '../public/rightarrowWhite.svg'
import Vector_Large from '../public/Vector_large.svg'
import Vector_Medium from '../public/Vector_medium.png'
import Vector_Small from '../public/Vector_small.png'
import Vector_Small_backdrop from '../public/Vector_small_backdrop.svg'
import Vector_medium_backdrop from '../public/Vector_medium_backdrop.svg'

const AboutSection = () => {
    return (
        <div className="sm:flex justify-center bg-greywhite w-full h-auto pb-72">
        <div className="sm:w-600 pt-20 mr-5 pl-5 sm:pl-0">
          <div className='font-semibold text-darkRed text-40 leading-9 tracking-tight pb-5 sm:pb-0'>
            <div className='flex'>
            <p className="">
            The &nbsp;
          </p>
          <p className='  underline underline-embrOrange underline-offset-small'> Embr Protocol </p>
          <p className=''> &nbsp; is a  </p> <p className='hidden sm:flex'>&nbsp; community &nbsp;</p>
            </div>
            <div className='flex'>
              <p className='sm:hidden'>community focused, fair launched DeFi Token </p> 
            <p className='hidden sm:flex'> focused, fair launched DeFi Token </p>
          </div>
         
          
        
          </div>
          <p className='text-darkRed leading-21 text-16 w-5/6'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
            consequat tortor, condimentum ullamcorper. Vel sed turpis neque
            faucibus porta. <br />   Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.<br /> Aenean consectetur non nulla eleifend laoreet. Suspendisse
            viverra neque sit amet nisi volutpat feugiat.
          </p>
          <div className='block w-32  rounded-md bg-gradient-to-r from-yellowishOrange to-orange text-embrWhite mt-5 mb-48 sm:mb-0'>
          <div className='flex pt-1 '>
            <a href='' className=' mr-1 ml-4 text-16 font-medium leading-17'>About Embr</a> <img src={RightArrowWhite.src} className='h-6 pb-1' />
          </div>
          </div>
        </div>
        <div className='relative w-481'>
        <div className='absolute bg-large-backdrop bg-no-repeat bg-right-bottom pr-5 sm:pr-0 -top-32 sm:top-0 right-20 sm:left-0 sm:w-340 z-10'>
          <img src={Vector_Large.src} className='max-w-285 sm:pt-10 sm:ml-5' />
        </div>
        
        <div className='absolute inset-y-10 sm:inset-y-52 right-5  sm:right-28 z-20'>
        <div className=' bg-right-bottom w-194 transform '>
          <img src={Vector_Medium.src} className='pr-5' />
        </div>
        
        </div>
        <div className='absolute inset-y-3 sm:inset-y-44  right-2 sm:right-28 z-00 '>
          <div className='transform scale-y-90 pt-5'>
            <img src={Vector_medium_backdrop.src} />
          </div>

        </div>
        <div className='absolute inset-y-32 sm:inset-y-72 right-32 sm:left-24 z-30'>
          <div className='h-145 w-146'>
          <img src={Vector_Small.src} />
          </div>
        </div>
        <div className='absolute inset-y-32 sm:inset-y-72 right-40 sm:left-18 z-00'>
        <div className='h-145 w-146'>
        <img src={Vector_Small_backdrop.src} className='pb-5'/>
        </div>
        </div>
        </div>
        
      </div>
    )
}

export default AboutSection;