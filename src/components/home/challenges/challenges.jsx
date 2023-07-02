import { useEffect, useState } from "react";
import ourwebsite from "../../../../src/images/ourwebsite.png"
import axios from "axios";
import Fade from "react-reveal/Fade"

export const Challenges = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => setData(res.data))
        .catch(err => console.log(err))
        
    },[])
    return (
      <>
        <Fade bottom>
          <div className="flex items-center mt-32 lg:mx-[150px] sm:mx-[100px]">
            <div className="">
              <img src={ourwebsite} alt="" />
            </div>
            <div>
              <h1 className="text-[36px] font-bold">
                {" "}
                OUR <span className="text-[#2DC4EA]">CHALLENGES</span>
              </h1>
              <div className=" ">
                {data.slice(0, 5).map((info, index) => {
                  return (
                    <div className="challenges_more">
                      <div
                        key={index}
                        className="lg:h-[60px] sm:h-[60px] lg:w-[600px] sm:w-[400px] box_shadow flex items-center lg:gap-8 sm:gap-4 mt-6 group  "
                      >
                        <p className="text-[#2DC4EA] lg:text-[40px] sm:text-[25px] font-bold ml-6 group-hover:text-white">
                          0{info.id}
                        </p>
                        <p className="lg:text-[18px] sm:text-[14px] ">{info.title}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <button className="button_bg lg:px-8 sm:px-4 lg:py-2 sm:py-1 rounded-[50px] text-[20px] font-bold text-white mt-10">
                VIEW MORE
              </button>
            </div>
          </div>
        </Fade>
      </>
    );
}