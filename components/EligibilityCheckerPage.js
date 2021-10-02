import RightArrowWhite from '../public/rightarrowWhite.svg'
import RightArrowOrange from '../public/rightarrowOrange.svg'

const EligibilityCheckerPage = () => {
    return (
        <div className='flex justify-center text-embrWhite '>
        <div className='w-1/3 mt-20 '>
          <p className='text-4xl font-light leading-9'>Empowering the next generation of makers, creators 	&amp; innovators.</p>
          <p className='font-extralight leading-4 text-sm mt-2 opacity-80'>Lorem ipsum dolor sit amet. Vel velit rerum et omnis ipsam est eaque nihil qui commodi commodi. Ad aperiam maiores sed sunt omnis rem laudantium unde ea voluptatibus nihil.</p>
          <div className='flex mt-5'>
          <div className='inline-block rounded-md bg-embrOrange pt-1 pb-1 pl-4 pr-2 text-sm'>
            <div className='flex'>
            <a href='' className='mr-1'>Find out more</a> <img src={RightArrowWhite.src} className='h-5' />
            </div>
          </div>
          <div className='flex pl-5 text-sm pt-1 pb-1 text-embrOrange'>
            <a href='' className='mr-1'>Check eligibility</a> <img src={RightArrowOrange.src} className='h-5' />
            </div>
          </div>
        </div>
        <div className='w-88 border-2 rounded-3xl mt-10 ml-10 border-embrYellow p-6'>
            <p className='tracking-wide'>Private presale eligibility checker</p>
            <p className='font-extralight leading-4 text-sm mt-2 opacity-60'>Bonfire token holders are eligible for the first community pre-sale. Please enter your contract address bellow to confirm your eligibility.</p>
            <div className='pt-4'>
                <p className='text-sm tracking-wide opacity-90'>Your wallet address</p>
                <div className='flex w-full h-6'>
                    <input className='rounded-md w-4/5 text-xs text-embrBlack pl-1'  placeholder='0x295e26495CEF6F69dFA69911d9D8e4F3bBadB89B'></input>
                    <div className='w-auto ml-2 pl-3 pr-3 pt-1 rounded-md bg-embrOrange text-xs '><a>Check</a></div>
                </div>
                <div className='w-full shadow bg-embrWhite bg-opacity-10 mt-5 p-5 text-xs opacity-80 rounded-2xl tracking-normal leading-1'>
                  <p>If your contract address is deemed ineligible for our private pre-sale and you feel this is in error; Please <a href='' className='text-embrOrange underline'>contact us</a> to discuss or join us during our public pre-sale.</p>
                </div>
            </div>
        </div>
      </div>
    )
};

export default EligibilityCheckerPage;