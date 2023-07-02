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
          <div className="flex mt-32 mx-[150px]">
            <div>
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
                        className="h-[60px] w-[600px] box_shadow flex items-center gap-8 mt-6 group  "
                      >
                        <p className="text-[#2DC4EA] text-[40px] font-bold ml-6 group-hover:text-white">
                          0{info.id}
                        </p>
                        <p className="text-[18px] ">{info.title}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <button className="button_bg px-8 py-2 rounded-[50px] text-[20px] font-bold text-white mt-10">
                VIEW MORE
              </button>
            </div>
          </div>
        </Fade>
      </>
    );
}