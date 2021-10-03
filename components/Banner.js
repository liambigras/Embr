

const Banner = () => {
    return (
      <div className="flex justify-center pl-2 sm:pl-0 h-12 sm:h-8 bg-redOxyde ">
        <p className="text-embrWhite text-sm pt-1">
          Our exclusive presale will begin on the 16th of August 2021. To find
          out if you are eligible{" "}
          <a className="text-embrOrange underline" href="">
            {" "}
            click here
          </a>
        </p>
      </div>
    );
}

export default Banner;