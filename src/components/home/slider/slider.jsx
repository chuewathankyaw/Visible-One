import React, { useRef } from "react";
import iphx from "../../../../src/images/iphx.png";
import desktop from "../../../../src/images/desktop.png";
import desktop2 from "../../../../src/images/desktop2.png";
import mobile1 from "../../../../src/images/mobile1.png";
import mobile2 from "../../../../src/images/mobile2.png";
import mobile3 from "../../../../src/images/mobile3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faAngleLeft,
  faAngleRight,
  faMobileScreenButton,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const Slider = () => {
  const swiperRef = useRef(null);
  const goToPrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goToNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  return (
    <>
      <div className="mt-20">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          ref={swiperRef}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className=" lg:h-[520px] sm:h-[400px]"
        >
          <SwiperSlide>
            <div className="  flex">
              <div className="flex items-center lg:h-[520px] sm:h-[400px]">
                <div>
                  <img src={mobile3} alt="" />
                </div>

                <div>
                  <img src={mobile2} alt="" />
                </div>
                <div>
                  <img src={mobile1} alt="" />
                </div>
              </div>
              <div className="flex bg_section_mobile">
                <div>
                  <img
                    className="lg:h-[520px] sm:h-[400px] w-[480px]"
                    src={iphx}
                    alt=""
                  />
                </div>
                <div className="lg:mt-12 sm:mt-6 ml-12 pr-20">
                  <h1 className="lg:text-[36px] sm:text-[25px] font-bold text-white">
                    Their Old Website & Peoblemss
                  </h1>
                  <div className="mt-4 grid grid-rows-3 gap-4">
                    <div className="flex gap-2">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ color: "white", marginTop: "6px" }}
                      />
                      <p className="text-white lg:text-[16px] sm:text-[12px]">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ color: "white", marginTop: "6px" }}
                      />
                      <p className="text-white lg:text-[16px] sm:text-[12px]">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ color: "white", marginTop: "6px" }}
                      />
                      <p className="text-white lg:text-[16px] sm:text-[12px]">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam
                      </p>
                    </div>
                  </div>
                  <div className="lg:mt-6 sm:mt-4 flex gap-4">
                    <FontAwesomeIcon
                      icon={faAngleLeft}
                      onClick={goToPrevSlide}
                      style={{ color: "white" }}
                    />
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      onClick={goToNextSlide}
                      style={{ color: "white" }}
                    />
                  </div>

                  <div className="flex gap-3 border-2 rounded-[50px] button_bg pl-4 py-1 lg:w-[25%] sm:w-[50%] lg:mt-4 sm:mt-2">
                    <span className="block rounded-[50%] bg-white h-6 w-6"></span>
                    <FontAwesomeIcon
                      icon={faMobileScreenButton}
                      style={{
                        color: "white",
                        fontSize: "20px",
                        marginTop: "2px",
                      }}
                    />
                    <p className="text-white font-semibold">Mobile</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="  flex">
              <div className="flex items-center lg:h-[520px] sm:h-[400px]">
                <div>
                  <img src={desktop2} alt="" />
                </div>
              </div>
              <div className="flex bg_section_desktop">
                <div>
                  <img
                    className="lg:h-[520px] sm:h-[400px] w-[680px]"
                    src={desktop}
                    alt=""
                  />
                </div>
                <div className="lg:mt-12 sm:mt-6 lg:ml-12 sm:ml-6 pr-20">
                  <h1 className="lg:text-[36px] sm:text-[25px] font-bold text-white">
                    Their Old Website & Peoblems
                  </h1>
                  <div className="mt-4 grid grid-rows-3 gap-4">
                    <div className="flex gap-2">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ color: "white", marginTop: "6px" }}
                      />
                      <p className="text-white lg:text-[16px] sm:text-[12px]">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ color: "white", marginTop: "6px" }}
                      />
                      <p className="text-white lg:text-[16px] sm:text-[12px]">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ color: "white", marginTop: "6px" }}
                      />
                      <p className="text-white lg:text-[16px] sm:text-[12px]">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam
                      </p>
                    </div>
                  </div>
                  <div className="lg:mt-6 sm:mt-4 flex gap-4">
                    <FontAwesomeIcon
                      icon={faAngleLeft}
                      onClick={goToPrevSlide}
                      style={{ color: "white" }}
                    />
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      onClick={goToNextSlide}
                      style={{ color: "white" }}
                    />
                  </div>
                  <div className="flex gap-3 border-2 rounded-[50px] button_bg pl-4 py-1 lg:w-[25%] sm:w-[50%] lg:mt-4 sm:mt-2">
                    <FontAwesomeIcon
                      icon={faDesktop}
                      style={{
                        color: "white",
                        fontSize: "20px",
                        marginTop: "2px",
                      }}
                    />
                    <p className="text-white font-semibold">Desktop</p>
                    <span className="block rounded-[50%] bg-white h-6 w-6"></span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};