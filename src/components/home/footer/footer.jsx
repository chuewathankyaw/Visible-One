import shopify1 from "../../../../src/images/shopify-partner-white-MIN.png";
import paypal from "../../../../src/images/paypal.png"
import adword from '../../../../src/images/adWord.png'
import trusted from '../../../../src/images/trusted.png'
import trusted1 from '../../../../src/images/googletrusted.png'
import analytics from '../../../../src/images/analytics.png'
import React, { useEffect } from "react";




export const Footer = () => {
 
 
  return (
    <>
  
      <div className="footer_bg text-white px-[8rem] z-40 	">
        <div className="grid grid-cols-4 pt-12">
          <div className="">
            <h1>QUICK LINKS</h1>
            <ul className="list-disc ml-6 mt-4 grid gap-2">
              <li>Services</li>
              <li>About Us</li>
              <li>Blog</li>
              <li>Quatation</li>
              <li>Partnership</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h1>OUR SERVICES</h1>

            <ul className="list-disc ml-6 mt-4 grid gap-2">
              <li>Web Development</li>
              <li>Web Design</li>
              <li>Responsive Website Design</li>
              <li>CMS Website Design</li>
              <li>Custom Website Design</li>
              <li>UI & UX Website Design</li>
              <li>360 Virtual Tour</li>
            </ul>
          </div>
          <div className="mt-10">
            <ul className="list-disc grid gap-2">
              <li>Ecommerce Development</li>
              <li>WooCommerce Development</li>
              <li>osCommerce Development</li>
              <li>Magento Development</li>
              <li>BigCommerce Development</li>
              <li>SSL Certificate</li>
              <li>Promtion Viedo</li>
            </ul>
          </div>
          <div>
            <h1>VISIBLE ONE SINGPORE</h1>
            <ul className=" mt-4 grid gap-2">
              <li>+65 6248 0838</li>
              <li>info@visibleone.com</li>
              <li>
                24 Sin Ming Lane Midview City#07-93,
                <br />
                Singapore 573970
              </li>
              <li>Office Hour:Mon-Fri(9am-6pm)</li>
              <div className="grid grid-cols-2 mt-4 content-center">
                <li>
                  <button className="bg-blue-500 py-2 px-4">Contact Us</button>
                </li>
                <li>
                  <p className="text-blue-400">Contact HK Office</p>
                </li>
              </div>
            </ul>
          </div>
        </div>
        <span className="block  h-[3px] bg-white  mt-12"></span>
        <div className="grid grid-cols-2 justify-items-stretch ">
          <div className="flex h-[5rem] mt-8 gap-4 ">
            <div className="flex">
              <img className="h-[3rem] w-[8rem]" src={shopify1} alt="" />
            </div>
            <div>
              <img className="h-[3rem] w-[8rem]" src={paypal} alt="" />
            </div>
            <div>
              <img className="h-h-[2rem] w-[6rem]" src={adword} alt="" />
            </div>
            <div className="flex gap-1">
              <img className="h-[2rem] w-[2rem]" src={analytics} alt="" />
              <p className="text-bold text-[12px] mt-[-2px]">
                Google <span className="text-[8px]">Analytics</span> <br />{" "}
                CERTIFIED
              </p>
            </div>
            <div className="flex h-[2rem] w-[6rem]">
              <img src={trusted1} alt="" />
              <img className="" src={trusted} alt="" />
            </div>
          </div>
          <div className=" justify-self-end">
            <p>Subscribe to our news, tips and guidelines</p>
            <div className="">
              <input
                type="text"
                placeholder="123@test.com"
                className="text-slate-200 border-2 border-white bg-transparent py-4 px-2 mt-2 w-[25rem]"
              />
              <button className="bg-blue-500 px-4 py-3 ml-6">Submit</button>
            </div>
          </div>
        </div>
        <span className="block  h-[3px] bg-white"></span>
        <div className="flex  justify-center mt-2 text-[30px] gap-4">
          <i class="uil uil-facebook-f"></i>
          <i class="uil uil-twitter"></i>
          <i class="uil uil-instagram"></i>
          <i class="uil uil-linkedin-alt"></i>
        </div>
        <div className="flex justify-center gap-4">
          <p>Shopping T&C </p>
          <ul className="list-disc ml-4 flex gap-4">
            <li className="">
              <p>Terms & Conditions</p>
            </li>
            <li className="ml-4">
              <p>Privacy Policy </p>
            </li>
          </ul>
          <div>
            <p className="copyright">&copy; 2018 - Visible One</p>
          </div>
        </div>
      </div>
    </>
  );
};
