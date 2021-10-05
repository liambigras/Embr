

const Banner = () => {
    return (
      <div className="fixed w-screen justify-center pl-2 sm:pl-0 h-12 sm:h-10 bg-redOxyde pt-1">
        <div className='flex justify-center'>
        <p className="text-embrWhite text-sm pt-1">
          Our exclusive presale will begin on the 16th of August 2021. To find
          out if you are eligible{" "}
          <a className="text-embrOrange underline" href="">
            {" "}
            click here
          </a>
        </p>
        </div>
      </div>
    );
}

export default Banner;