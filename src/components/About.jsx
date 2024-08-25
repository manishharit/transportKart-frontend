import React from "react";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar";
import herSecondSec from "../assets/heroSecondSec.png"
import homethirdbg from "../assets/homethirdbg.png"
import homefourthSec from '../assets/homefourthSec.jpg'

export const About = () => {
   return (
    <>
     <NavBar/>

        <div className="mt-5 lg:flex">
        <div className="p-5 lg:w-[50%]">
            <h3 className="font-bold text-center text-yellow-600 text-2xl"> Who We Are</h3>
            <h4 className="font-semibold pt-1 pb-1 text-center"> Your Long Term Transport Partner</h4>
            <p className="text-justify ">
                Our platform provides a seamless experience for users to create shared websites, enabling them to showcase their services and connect with potential partners. Whether you're a truck owner looking for new clients, a logistics company seeking reliable transportation solutions, or a warehousing company in need of efficient distribution channels, TransportKART has you covered. <br />
                By consolidating transportation, logistics partners, traders, and manufacturers onto a single platform, TransportKART streamlines the process of finding and engaging with the right partners. Gone are the days of endless searching and fragmented communication – with TransportKART, everything you need is just a click away. <br />
                Our user-friendly interface makes it easy to navigate through listings, filter search results, and communicate with potential partners. Whether you're on a desktop or mobile device, accessing TransportKART is convenient and intuitive. <br />
                At TransportKART, we prioritize transparency and trust. That's why we vet all listings to ensure they meet our rigorous standards for reliability and professionalism. You can trust that every partner you find on our platform is reputable and committed to delivering exceptional service. <br />
            </p>
        </div>
        <div className="lg:pt-12 lg:pl-12">
            <img className="lg:rounded-3xl" src={herSecondSec} />
        </div>
        </div>
        <div className="lg:h-[50vh] h-[31vh] bg-no-repeat bg-cover mt-5" style={{backgroundImage: `url(${homethirdbg})`}}>
            <div className="bg-[rgba(0,0,0,0.5)] gap-2.5 h-full flex justify-center items-center text-xl">
                <p className="text-gray-100 font-bold text-justify">
                Our foremost goal is to cater the<br/>requirements of our nationwide
                as<br/>well as global customers by<br/>rendering The Transportation and<br/>
                ensure utmost client satisfaction.
                </p>
            </div>
        </div>
        <div className="mt-5 lg:flex">
        <div className="lg:w-[40%] lg:pt-20 lg:pl-5">
            <img className="lg:rounded-3xl" src={homefourthSec}  alt="heroSecondSec"  />
        </div>
        <div className="lg:pl-10 p-5">
            <h3 className="font-extrabold text-center text-yellow-600 text-2xl"> Why Choose Us?</h3>
            <h4 className="font-bold text-center"> Start-to-Finish Trucks Services</h4>
            <p className="text-justify">
            1. Digital listing platform for transportation and logistics stakeholders. <br />
            2. Allows truck owners, brokers, logistics companies and warehousing companies to create shared websites. <br />
            3. Centralized hub for finding transportation, logistics partners, traders, and manufacturers. <br />
            4. User-friendly interface for easy navigation and communication. <br />
            5. Vetting process ensures listings meet standards for reliability and professionalism. <br />
            6. Desktop and mobile accessibility for convenience on the go. <br />
            7. Promotes transparency, trust, and collaboration within the industry. <br />
            8. Opportunities for growth and success for businesses of all sizes. <br />
            9. Experience the power of connectivity with TransportKART. <br />
            10. Join today and unlock your business's full potential. <br />
            </p>
        </div>
        
        </div> 
     <Footer/>
    </>
   ) 
}