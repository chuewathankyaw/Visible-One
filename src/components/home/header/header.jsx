import React from "react";
import logoheader from "../../../../src/images/Header.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faSortDown,
  faChevronDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
      <div>
        <img
          className="absolute ml-[12rem] mt-[-2px]"
          alt="logo"
          src={logoheader}
        />
        <div className="flex   bg-[#00000029] h-[40px] py-2">
          <div className="basis-1/2 	"></div>
          <div className="flex gap-5">
            <div className=" flex gap-2">
              <FontAwesomeIcon
                icon={faPhone}
                style={{ color: "#2DC4EA" }}
                className="mt-1"
              />
              <p>6248 0838</p>
            </div>
            <div className="flex gap-2">
              <i className="uil uil-whatsapp" style={{ color: "#2DC4EA" }}></i>
              <p>8484 9948</p>
            </div>
            <div className="flex gap-2">
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ color: "#2DC4EA" }}
                className="mt-1"
              />
              <p>info@visibleone.com</p>
            </div>
            <div className="bg-green-400 px-[4px] rounded">
              <button className="flex gap-1">
                <i class="uil uil-clipboard-alt" style={{ color: "#fff" }}></i>
                <p>QUOTE</p>
              </button>
            </div>
            <div className="border-2 border-[#2DC4EA] px-1">
              <button className="flex gap-2">
                <p className="text-[14px]">SG EN</p>
                <FontAwesomeIcon
                  icon={faSortDown}
                  style={{ color: "#2DC4EA" }}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="flex h-[40px] py-2">
          <div className="basis-7/12	"></div>
          <div className="flex gap-8">
            <div className="flex gap-5 ">
              <Link className="hover:text-[#2DC4EA]"> Home</Link>
              <Link className="hover:text-[#2DC4EA] group">
                Service{" "}
                <FontAwesomeIcon
                  className="text-[12px] text-slate-400	group-hover:text-[#2DC4EA]"
                  icon={faChevronDown}
                />
              </Link>
              <Link className="hover:text-[#2DC4EA] group">
                Company{" "}
                <FontAwesomeIcon
                  className="text-[12px] text-slate-400	group-hover:text-[#2DC4EA]"
                  icon={faChevronDown}
                />
              </Link>
              <Link className="hover:text-[#2DC4EA]">Blog</Link>
              <Link className="hover:text-[#2DC4EA] group">
                Contact Us{" "}
                <FontAwesomeIcon
                  className="text-[12px] text-slate-400	group-hover:text-[#2DC4EA]"
                  icon={faChevronDown}
                />
              </Link>
            </div>
            <div className="">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </div>
        </div>
      </div>
    );
};
