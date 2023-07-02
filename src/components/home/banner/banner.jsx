import responsive from "../../../../src/images/responsive.svg";
import wordpress from "../../../../src/images/wordpress.svg";
import shoppingcart from "../../../../src/images/shoppingcart.svg";
import projectImg from "../../../../src/images/My project.png";

export const Banner = () => {
  return (
    <>
      <div className="banner_bg">
        <h1 className="text-[54px] text-white pt-[40px] text-center">
          TRIPPRO - AN ECOMMERCE SOLUTION
        </h1>
        <div class="flex justify-center">
          <p className="w-4/6 text-center text-white h-[73px] ">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
        </div>
        <div className="flex  justify-center  space-x-6">
          <div className="flex gap-2">
            <h1 className=" text-white text-[24px] font-bold w-[7rem] ">
              Built for:
            </h1>
            <img className=" mr-2 h-[4rem] " alt="res" src={responsive} />
            <span className="w-1 h-full bg-white block"></span>
          </div>
          <div className="flex gap-4">
            <h1 className=" text-white text-[24px]">
              Technologies:
              <h1 className=" text-white text-[24px] font-bold">Wordpress </h1>
            </h1>

            <img className=" h-[4rem]" alt="res" src={wordpress} />
            <span className="w-1 h-full bg-white block"></span>
          </div>{" "}
          <div className="flex gap-4">
            <h1 className=" text-white text-[24px]">
              industry:{" "}
              <h1 className=" text-white text-[24px] font-bold">Ecommerce </h1>{" "}
            </h1>

            <img className=" h-[4rem]" alt="res" src={shoppingcart} />
          </div>
        </div>
        <div className="absolute start-[33%] w-[600px] mt-[50px]">
          <img src={projectImg} alt="" />
        </div>
      </div>
    </>
  );
};
