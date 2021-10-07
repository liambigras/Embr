

const AboutPage = () => {
    return (
      <div className="sm:flex justify-center bg-greywhite w-full h-auto pb-40">
        <div className="sm:w-600 pt-20 mr-5">
          <div className="font-semibold text-darkRed text-40 leading-9 tracking-tight">
            <div className="flex">
              <p className="">The &nbsp;</p>
              <p className=" -mb-1 underline underline-embrOrange underline-offset-small">
                {" "}
                Embr Protocol{" "}
              </p>
              <p> &nbsp; is a community </p>
            </div>
            <div className="flex">
              <p> focused, fair launched DeFi Token </p>
            </div>
          </div>
          <p className="text-darkRed leading-21 text-16 w-5/6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
            consequat tortor, condimentum ullamcorper. Vel sed turpis neque
            faucibus porta. <br /> Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
            <br /> Aenean consectetur non nulla eleifend laoreet. Suspendisse
            viverra neque sit amet nisi volutpat feugiat.
          </p>
          <div className="block w-32  rounded-md bg-gradient-to-r from-yellowishOrange to-orange text-embrWhite mt-5">
            <div className="flex pt-1 ">
              <a href="" className=" mr-1 ml-4 text-16 font-medium leading-17">
                About Embr
              </a>{" "}
              <img src={RightArrowWhite.src} className="h-6 pb-1" />
            </div>
          </div>
        </div>
        <div className="relative w-481">
          <div className="absolute bg-large-backdrop bg-no-repeat bg-right-bottom sm:w-340 z-10">
            <img src={Vector_Large.src} className="max-w-285 pt-10 ml-5" />
          </div>

          <div className="absolute -bottom-12 right-28 z-20">
            <div className=" bg-right-bottom w-194 transform ">
              <img src={Vector_Medium.src} className="pr-5" />
            </div>
          </div>
          <div className="absolute -bottom-14 right-28 z-00 ">
            <div className="transform scale-y-90 pt-5">
              <img src={Vector_medium_backdrop.src} />
            </div>
          </div>
          <div className="absolute -bottom-24 left-24 z-30">
            <div className="h-145 w-146">
              <img src={Vector_Small.src} />
            </div>
          </div>
          <div className="absolute -bottom-24 left-18 z-00">
            <div className="h-145 w-146">
              <img src={Vector_Small_backdrop.src} className="pb-5" />
            </div>
          </div>
        </div>
      </div>
    );
}