import mainBg from "../assets/mainBg.png"
import herSecondSec from "../assets/heroSecondSec.png"
import homethirdbg from "../assets/homethirdbg.png"
import homefourthSec from '../assets/homefourthSec.jpg'
import homefifthSec from '../assets/homeFifthSec.png'
import homeContactbg from '../assets/homeContactbg.png'
import creditcardicons from '../assets/creditcardicons.png'
import { Footer } from "../components/Footer"
import { NavBar } from "../components/NavBar"
import { Link } from 'react-router-dom'
export const Home = () => {
  return (

    <>
    <NavBar/>
    {/* hero image */}
        <div className="h-[80vh] bg-no-repeat bg-cover" style={{backgroundImage: `url(${mainBg})`}}>
            <div className="h-full flex-col bg-[rgba(0,0,0,0.5)] gap-2.5 text-center pt-44">
                <h2 className="text-white font-bold text-[3rem]">Driving The Future</h2>
                <p className="text-slate-200 text-[1.2rem] font-semibold pb-5">
                      Where Trucks Meet Solution.
                </p>
                <Link to="/explore" className="text-white font-semibold pt-3 pb-3 pl-4 pr-4 rounded-xl bg-violet-600 ">Explore more</Link>
            </div>
        </div>
    {/* home second */}
        <div className="mt-5 lg:flex">
        
        <div className="p-5 lg:w-[50%]">
            <h3 className="font-bold"> Who We Are</h3>
            <h4 className="font-semibold pt-1 pb-1"> Your Long Term Transport Partner</h4>
            <p className="text-justify">
                Our platform provides a seamless experience for users to create shared websites, enabling them to showcase their services and connect with potential partners. Whether you're a truck owner looking for new clients, a logistics company seeking reliable transportation solutions, or a warehousing company in need of efficient distribution channels, TransportKART has you covered. <br />
                By consolidating transportation, logistics partners, traders, and manufacturers onto a single platform, TransportKART streamlines the process of finding and engaging with the right partners. Gone are the days of endless searching and fragmented communication – with TransportKART, everything you need is just a click away. <br />
                Our user-friendly interface makes it easy to navigate through listings, filter search results, and communicate with potential partners. Whether you're on a desktop or mobile device, accessing TransportKART is convenient and intuitive. <br />
                At TransportKART, we prioritize transparency and trust. That's why we vet all listings to ensure they meet our rigorous standards for reliability and professionalism. You can trust that every partner you find on our platform is reputable and committed to delivering exceptional service. <br />
            </p>
        </div>
        <div className="lg:pt-5 lg:pl-12">
            <img className="lg:rounded-3xl" src={herSecondSec} />
        </div>
      
        </div>

    {/* home third */}
    <div className="lg:h-[50vh] h-[31vh] bg-no-repeat bg-cover mt-5" style={{backgroundImage: `url(${homethirdbg})`}}>
            <div className="bg-[rgba(0,0,0,0.5)] gap-2.5 h-full flex justify-center items-center text-xl">
                <p className="text-gray-100 font-bold text-justify">
                Our foremost goal is to cater the<br/>requirements of our nationwide
                as<br/>well as global customers by<br/>rendering The Transportation and<br/>
                ensure utmost client satisfaction.
                </p>
            </div>
        </div>

    {/* home forth */}

    <div className="mt-5 lg:flex">
        <div className="lg:w-[40%] lg:pt-5 lg:pl-5">
            <img className="lg:rounded-3xl" src={homefourthSec}  alt="heroSecondSec"  />
        </div>
        <div className="lg:pl-10 p-5">
            <h3 className="font-extrabold"> Why Choose Us?</h3>
            <h4 className="font-bold"> Start-to-Finish Trucks Services</h4>
            <p className="text-justify font-light">
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

    {/* home fifth  */}

    <div className="lg:h-[100vh] sm:h-0 bg-no-repeat bg-cover mt-5" style={{backgroundImage: `url(${homefifthSec})`}}>
    </div>

    {/* sixth component */}

    <div className="lg:h-[90vh] sm:h-0 bg-no-repeat bg-cover mt-5" style={{backgroundImage: `url(${homeContactbg})`}}>
      <div className="h-full flex-col bg-[rgba(0,0,0,0.9)] gap-2.5 text-center pt-44">
      <h3 className="text-white text-7xl">Contact Us</h3>
        <p className="text-white text-xl pt-2">
          Where Trucks Meet Solution.
        </p>
        <form className="flex-1">
        <div className="">
          <input className="w-40 p-2 bg-transparent placeholder-white text-white border border-violet-600 rounded-xl" type="text" placeholder="Name" />
          <input className="ml-5 p-2 bg-transparent placeholder-white text-white border border-violet-600 rounded-xl" type="text" placeholder="Phone" />
        </div>
        
        <input className=" p-2 mt-5 w-96 bg-transparent placeholder-white text-white border border-violet-600 rounded-xl" type="text" placeholder="Email" />
        <div>
        <input className=" p-2 mt-5 h-20 w-96 bg-transparent placeholder-white text-white border border-violet-600 rounded-xl" type="text" placeholder="Your message" />
        </div>
        <button  className="mt-5 text-white font-semibold pt-3 pb-3 pl-4 pr-4 rounded-xl bg-violet-600 ">Explore more</button>
        </form>

      </div>

    </div>


    
    <Footer/>
    </>

  )
}
