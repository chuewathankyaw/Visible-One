import tablet from "../../../../src/images/Tablet.png"
import Fade from 'react-reveal/Fade'

export const AboutTrippro = () => {
   
  return (
    <>
     
      <Fade bottom >
        <div className=" grid grid-cols-2 lg:mx-[200px] sm:mx-[100px]  lg:gap-[100px] sm:gap-[50px]  mt-[15rem]">
          <div className="">
            <h1 className="font-bold text-[36px]">
              ABOUT <span className="text-[#2DC4EA]">TRIPPRO</span>
            </h1>
            <span className="w-32 h-1 block bg-[#2DC4EA] mt-4"></span>
            <p className="mt-4 text-justify ">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita
            </p>
            <button className="mt-8 text-[20px] font-bold rounded-[50px] button_bg px-6 py-2">
              TOUR TO WEBSITE
            </button>
          </div>
          <div>
            <img
              className="flex justify-center lg:h-[480px] sm:h-[350px]  "
              src={tablet}
              alt=""
            />
          </div>
        </div>
      </Fade>
    </>
  );
}