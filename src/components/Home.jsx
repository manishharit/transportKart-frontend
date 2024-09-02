import mainBg from "../assets/mainBg.png"
import herSecondSec from "../assets/heroSecondSec.png"
import homethirdbg from "../assets/homethirdbg.png"
import homefourthSec from '../assets/homefourthSec.jpg'
import homefifthSec from '../assets/homeFifthSec.png'
import homeContactbg from '../assets/homeContactbg.png'
import { Footer } from "../components/Footer"
import { NavBar } from "../components/NavBar"
import { Link } from 'react-router-dom'
export const Home = () => {
  return (

    <>
    <NavBar/>
    {/* hero image */}
        <div className="lg:h-[100vh] h-[70vh] bg-no-repeat bg-cover" style={{backgroundImage: `url(${mainBg})`}}>
            <div className="h-full flex-col bg-[rgba(0,0,0,0.5)] gap-2.5 text-center pt-44">
                <h2 className="text-white font-semibold text-[3rem]">Driving The Future</h2>
                <p className="text-slate-200 text-[1.2rem] font-semibold pb-5">
                      Where Trucks Meet Solution.
                </p>
                <Link to="/explore" className="text-white font-semibold pt-3 pb-3 pl-4 pr-4 rounded-xl bg-purple-900 hover:bg-purple-700 ">EXPLORE MORE</Link>
            </div>
        </div>
    {/* home second */}
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
        {/* Pricing Component*/}

        <section class="py-6 leading-7 text-gray-900 bg-white sm:py-12 md:py-16">
    <div class="box-border px-4 mx-auto border-solid sm:px-6 md:px-6 lg:px-0 max-w-7xl">

        <div class="flex flex-col items-center leading-7 text-center text-gray-900 border-0 border-gray-200">
            <h2 id="pricing"
                class="box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl">
                Simple, Transparent Pricing
            </h2>
            <p class="box-border mt-2 text-xl text-gray-900 border-solid sm:text-2xl">
            </p>
        </div>

        
        <div id="pricing"
            class="grid grid-cols-1 gap-4 mt-4 leading-7 text-gray-900 border-0 border-gray-200 sm:mt-6 sm:gap-6 md:mt-8 md:gap-0 lg:grid-cols-3">
                 {/* Price 1  */}
            <div
                class="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg lg:-mr-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
                <h3
                    class="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                    Silver
                </h3>
                <div class="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                    <p class="box-border m-0 text-6xl font-semibold leading-none border-solid">
                        ₹3500
                    </p>
                    <p class="box-border m-0 border-solid" style={{borderImage: 'initial'}}>
                        / Year
                    </p>
                </div>
                <ul class="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
                    <li class="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        Customized Webpage
                    </li>

                    <li class="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        Business Logo
                    </li>

                    <li class="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        Company Business Profile
                    </li>
                    <li class="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        Free Webpage Promotion For Business <br />
                        (LinkedIn & Social Sites)
                    </li>
                    <li class="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        Guaranteed Truck Load <br />
                        (90-100/Year)
                    </li>   


                </ul>
                <Link to="/register-user" 
                    class="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-blue-600 rounded-md cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-base md:text-lg">
                    Start Now
                </Link>
            </div>
                 {/*  Price 2  */}
            <div
                class="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 bg-white border-4 border-blue-600 border-solid rounded-lg sm:p-6 md:px-8 md:py-16">
                <h3
                    class="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                    Gold
                </h3>
                <div class="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                    <p class="box-border m-0 text-6xl font-semibold leading-none border-solid">
                        ₹6999
                    </p>
                    <p class="box-border m-0 border-solid" style={{borderImage: 'initial'}}>
                        / Year
                    </p>
                </div>
                <ul class="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
                    <li class="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        Creative Webpage Design
                    </li>

                    <li class="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        Creative Logo Design
                    </li>

                    <li class="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        Business Profile PPT
                    </li>

                    <li class="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        Business Digital Card
                    </li>
                    <li class="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        Guaranteed Truck Load <br />
                        (140-150/Year)
                    </li>
                    <li class="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        Email Integration
                    </li>
                    <li class="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        SMS / WhatsApp Alerts
                    </li>
                </ul>

                <a href="#"
                    class="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-white no-underline bg-blue-600 border rounded-md cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-base md:text-lg">
                    Coming Soon
                </a>
            </div>
                   {/*  Price 3 */}
            <div
                class="relative z-8 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg lg:-ml-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
                <h3
                    class="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                    Diamond
                </h3>
                <div class="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                    <p class="box-border m-0 text-6xl font-semibold leading-none border-solid">
                        ₹10,999
                    </p>
                    <p class="box-border m-0 border-solid" style={{borderImage: 'initial'}}>
                        / Year
                    </p>
                </div>

                <ul class="flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200">
                    <li class="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        Creative Webpage Design
                    </li>

                    <li class="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        Creative Logo Design
                    </li>

                    <li class="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        Business Profile PPT
                    </li>


                    <li class="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        Business Digital Card
                    </li>


                    <li class="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        Guaranteed Truck Load <br />
                        (190-200/Year)
                    </li>

                    <li class="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        Email Integration
                    </li>

                    <li class="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        SMS / WhatsApp Alerts
                    </li>
                    <li class="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        Free Web Promotion For Business <br />
                        (LinkedIn & Social Sites)
                    </li>
                    <li class="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        Business Accounting Erp
                    </li>

                </ul>
                <a href="#"
                    class="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-blue-600 rounded-md cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-base md:text-lg">
                    Coming Soon
                </a>

            </div>
        </div>
       </div>
    </section>

    {/* home fifth  */}

    <div className="lg:h-[120vh] sm:h-0 bg-no-repeat bg-cover mt-5" style={{backgroundImage: `url(${homefifthSec})`}}>
    </div>

    {/* sixth component */}

    {/* <div className="lg:h-[90vh] h-[60vh] sm:h-0 bg-no-repeat bg-cover mt-5" style={{backgroundImage: `url(${homeContactbg})`}}>
      <div className="h-full flex-col bg-[rgba(0,0,0,0.9)] gap-2.5 text-center lg:pt-20 pt-20">
      <h3 className="text-white text-5xl">Contact Us</h3>
        <p className="text-white text-xl pt-5 pb-7">
          Where Trucks Meet Solution.
        </p>
        <form className="flex-1">
        <div className="">
          <input className="w-40 p-2 bg-transparent placeholder-white text-white border border-violet-600 rounded-xl" type="text" placeholder="Name" />
          <input className="w-52 ml-5 p-2 bg-transparent placeholder-white text-white border border-violet-600 rounded-xl" type="text" placeholder="Phone" />
        </div>
        
        <input className=" p-2 mt-5 w-96 bg-transparent placeholder-white text-white border border-violet-600 rounded-xl" type="text" placeholder="Email" />
        <div>
        <input className=" p-2 mt-5 h-20 w-96 bg-transparent placeholder-white text-white border border-violet-600 rounded-xl" type="text" placeholder="Your message" />
        </div>
        <button  className="mt-5 text-white font-semibold pt-2 pb-2 pl-8 pr-8 rounded-xl bg-purple-900 hover:bg-purple-700 ">Submit</button>
        </form>

      </div>

    </div> */}
    <div className='pt-[5rem] pb-[3rem] bg-gray-900' id='contact'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center w-[80%] mx-auto'>
            <div>
                <p className='text-[17px] text-white opacity-75'>Get in Touch</p>
                <h1 className='mt-[0.6rem] p-2 sm:p-0 leading-[3.5rem] text-white text-[27px] md:text-[30px] lg:text-[38px] xl:text-[45px]'>Let&apos;s make your <span className='text-yellow-400'>Brand</span> brilliant !
                </h1>
                <p className='text-[15px] text-white mt-[1rem] opacity-75'>Feel free to reach out to discuss your next project or any inquiries you may have. We look forward to hearing from you! You can also connect with us on </p>
                <a className='mt-[2rem] mb-[2rem] text-[25px] text-yellow-300 hover:text-yellow-500 font-semibold' href='mailto:connect@transportkart.com'>Email Us</a>
            </div>
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-[1rem] items-center'>
                    <input
                        type='text'
                        placeholder='Name'
                        className='py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4'
                    />
                    <input
                        type='number'
                        placeholder='Contact No'
                        className='py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4'
                    />
                </div>
                <input 
                    type='email' 
                    placeholder='Email' 
                    className='py-[0.7rem] mb-[1.5rem] mt-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4'
                />
                <textarea
                    placeholder='Message'
                    className='py-[0.7rem] w-full outline-none text-white bg-gray-800 rounded-md px-4'
                    rows={4}
                ></textarea>
                <button className='py-[0.7rem] mb-[1.5rem] mt-[1.5rem] w-full outline-none text-white bg-blue-700  hover:bg-blue-800 rounded-md px-4'>Submit</button>
            </div>
        </div>

    </div>

    
    <Footer/>
    </>

  )
}
