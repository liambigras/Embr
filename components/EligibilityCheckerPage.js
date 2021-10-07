import RightArrowWhite from '../public/rightarrowWhite.svg'
import RightArrowOrange from '../public/rightarrowOrange.svg'

const EligibilityCheckerPage = () => {

  const clear = () => {
    let eligible = document.getElementById('eligible');
    let noteligible = document.getElementById('noteligible');
    let validAddress = document.getElementById('validAddress');

    eligible.setAttribute('class', 'hidden');
    noteligible.setAttribute('class', 'hidden');
    validAddress.setAttribute('class', 'hidden');
  }

  const validateAddress = async() => {
    //validate ok bsc address
    clear();
    let address = document.getElementById('addressInput');
    let eligible = document.getElementById('eligible');
    let noteligible = document.getElementById('noteligible');
    let validAddress = document.getElementById('validAddress');

    if(address.value.length > 0 && address.value.startsWith('0x') && address.value.length > 41){
      const res = await fetch('api/validate', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(address.value)
      })
      const data = await res.json();
      if(data.inWhitelist){
        eligible.setAttribute('class', 'block text-green-500')
      }else{
        noteligible.setAttribute('class', 'block text-red-500')
      }
    }else{
      validAddress.setAttribute('class', 'block text-red-500')
    } 
    
  }

    return (
        <div className='sm:flex justify-center text-embrWhite '>
        <div className='ml-5 sm:ml-0 sm:w-547 mt-20 '>
          <p className='text-40 leading-9'>Empowering the next generation of makers, creators 	&amp; innovators.</p>
          <p className='font-extralight leading-snug text-16 mt-2 opacity-80'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, consequat tortor, condimentum ullamcorper. Vel sed turpis neque faucibus porta.</p>
          <div className='flex mt-5'>
          <div className='inline-block rounded-md bg-embrOrange pt-1 pb-1 pl-4 pr-2 text-sm'>
            <div className='flex'>
            <a href='' className='mr-1 text-14 font-medium'>Find out more</a> <img src={RightArrowWhite.src} className='h-6' />
            </div>
          </div>
          <div className='flex pl-5 text-sm pt-1 pb-1 text-embrOrange'>
            <a href='' className='mr-1 text-14 font-medium'>Check eligibility</a> <img src={RightArrowOrange.src} className='h-6' />
            </div>
          </div>
        </div>
        <div className='mt-10 ml-5 mr-5 sm:ml-10 p-xs bg-gradient-to-r from-yellowishOrange to-orange rounded-3xl'>
        <div className='sm:w-481  rounded-3xl  border-embrYellow p-6 bg-customBlue'>
            <p className='tracking-normal text-22 font-medium'>Private presale eligibility checker</p>
            <p className='leading-5 text-16 mt-2 opacity-50 sm:w-420'>Bonfire token holders are eligible for the first community pre-sale. Please enter your contract address below to confirm your eligibility.</p>
            <div className='pt-4'>
                <p className='text-sm tracking-wide opacity-90 pb-1'>Your wallet address</p>
                <div className='flex w-full h-10'>
                    <input id='addressInput' className='rounded-md w-320 text-16 text-embrBlack pl-2 font-medium'  placeholder='0x295e26495CEF6F69dFA69911d9D8e4F3bB'></input>
                    <div className='ml-4 pl-6 pr-6 pt-2 rounded-md bg-embrOrange text-16 font-medium' onClick={e => validateAddress()}><a >Check</a></div>
                </div>
                <div>
                  <p id='eligible' className='hidden'>Your wallet address is eligible</p>
                  <p id='noteligible' className='hidden'>Your wallet address is not eligible</p>
                  <p id='validAddress' className='hidden'>Please enter a valid wallet address</p>
                </div>
                <div className='w-full  bg-blueishCard bg-opacity-40 mt-5 p-2 sm:p-5 text-16 opacity-80 rounded-2xl tracking-normal font-normal leading-5'>
                  <p>If your contract address is deemed ineligible for our private pre-sale and you feel this is in error; Please <a href='' className='text-embrOrange underline'>contact us</a> to discuss or join us during our public pre-sale.</p>
                </div>
            </div>
        </div>
        </div>
        
      </div>
    )
};

export default EligibilityCheckerPage;