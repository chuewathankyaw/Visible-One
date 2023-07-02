import responsive from "../../../../src/images/responsive.svg";
import wordpress from "../../../../src/images/wordpress.svg";
import shoppingcart from "../../../../src/images/shoppingcart.svg";
import projectImg from "../../../../src/images/My project.png";

export const Banner = () => {
  return (
    <>
      <div className="banner_bg ">
        <h1 className="lg:text-[54px] sm:text-[30px] text-white lg:pt-[40px] sm:pt-[20px] text-center">
          TRIPPRO - AN ECOMMERCE SOLUTION
        </h1>
        <div class="flex justify-center">
          <p className="lg:w-4/6 text-center text-white lg:h-[73px] sm:mb-2 ">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
        </div>
        <div className="flex  justify-center  space-x-6">
          <div className="flex gap-2">
            <h1 className=" text-white lg:text-[24px] sm:text-[18px] font-bold lg:w-[7rem] ">
              Built for:
            </h1>
            <img
              className=" mr-2 lg:h-[4rem] sm:h-[2rem] "
              alt="res"
              src={responsive}
            />
            <span className="w-1 h-full bg-white block"></span>
          </div>
          <div className="flex gap-4">
            <h1 className=" text-white lg:text-[24px] sm:text-[18px]">
              Technologies:
              <h1 className=" text-white lg:text-[24px] sm:text-[18px] font-bold">
                Wordpress{" "}
              </h1>
            </h1>

            <img
              className=" lg:h-[4rem] sm:h-[3rem]"
              alt="res"
              src={wordpress}
            />
            <span className="w-1 h-full bg-white block"></span>
          </div>{" "}
          <div className="flex gap-4">
            <h1 className=" text-white lg:text-[24px] sm:text-[18px]">
              industry:{" "}
              <h1 className=" text-white lg:text-[24px] sm:text-[18px] font-bold">
                Ecommerce{" "}
              </h1>{" "}
            </h1>

            <img
              className=" lg:h-[4rem] sm:h-[3rem]"
              alt="res"
              src={shoppingcart}
            />
          </div>
        </div>
        <div className="absolute lg:start-[33%] lg:w-[600px] lg:mt-[50px] sm:w-[400px] sm:start-[30%] sm:mt-[10px]">
          <img src={projectImg} alt="" />
        </div>
      </div>
    </>
  );
};
