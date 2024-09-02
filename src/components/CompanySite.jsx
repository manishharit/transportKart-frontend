import mainBg from "../assets/mainBg.png"
import commitmentimg from '../assets/commitmentimg.jpeg'
import { Footer } from "../components/Footer"
import { NavBar } from "../components/NavBar"
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import vehicletypelogo from '../assets/vehicletypelogo.svg'
import servicetypelogo from '../assets/servicetypelogo.svg'
import establisedlogo from '../assets/establisedlogo.svg'
import teamlogo from '../assets/teamlogo.svg'
import ownerlogo from '../assets/ownerlogo.svg'

export const CompanySite = ({ baseUrl }) => {
    const location = useLocation();
    const { companyName } = useParams();
    const [item, setItem] = useState(location.state?.item || null);
    const [loading, setLoading] = useState(item ===null ? true:false);


    const fetchData = async () => {
        try {
            setLoading(true);
          const request = "id"
           const response = await axios.post(`${baseUrl}/user/${companyName}`,request)
            setItem(response.data[0])
        } catch (error) {
          console.log(error.response.data.message)
          alert(error.response.data.message)
        } finally {
            setLoading(false);
        }
      }


    useEffect(() => {
        if (item === null) {
            fetchData()
        }
    }, []);

    if (loading) {
        return <div className="flex items-center justify-center min-h-screen">
            <div aria-label="Loading..." role="status" className="flex items-center space-x-2">
        <svg className="h-20 w-20 animate-spin stroke-gray-500" viewBox="0 0 256 256">
            <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
            <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="24"></line>
            <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
            </line>
            <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="24"></line>
            <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
            </line>
            <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="24"></line>
            <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
            <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
            </line>
        </svg>
        <span className="text-5xl font-medium text-gray-500">Loading...</span>
    </div>
        </div>
    }


  return (

    <>
    <NavBar/>
    {/* hero image */}
        {/* <div className="h-[30vh] bg-no-repeat bg-cover" style={{backgroundImage: `url(${mainBg})`}}>
            <div className="h-full flex-col bg-[rgba(0,0,0,0.5)] gap-2.5 text-center pt-20">
                <h2 className="text-white font-bold lg:text-[3rem] text-2xl">{item.companyName}</h2>
            </div>
        </div> */}


    {/* home forth */}

    <div className="lg:m-10 pt-2 lg:flex">

        <div className=" lg:pt-5 pt-5 lg:pl-5 bg-orange-400 lg:w-[50%] pb-10 lg:pb-10">
            {/* <img className="lg:rounded-3xl" src={homefourthSec}  alt="heroSecondSec"  /> */}
            <div className="text-white font-extrabold lg:w-96 text-center lg:ml-28 lg:mr-28 lg:mt-10">
            <h1 className="lg:text-7xl lg:pb-10 text-5xl pb-2">About</h1>
            <h1 className="lg:text-5xl text-3xl">{item.companyName}</h1>
            </div>
        </div>
        <div className="lg:pl-10 p-5">
            <p className="text-justify font-light lg:w-[40rem]">
            {item.aboutUs ? item.aboutUs :
            "Welcome to Our Company, where excellence in logistics meets unparalleled dedication to customer satisfaction.we have emerged as a dynamic force in the logistics industry.We prides itself on offering a comprehensive range of services tailored to meet the diverse needs of our clients. Specializing in part-load movement services across India, we ensure prompt and reliable transportation solutions that exceed expectations,providing efficient cargo transportation services nationwide.."
            }
            </p>
        </div>
        
    </div>

    {/* truck type */}
    <div>
    <div className="text-center">
        <div className="relative">
            <h1 className="text-6xl font-bold pb-5">Truck Type</h1>
            <div className="absolute inset-x-0 bottom-0 bg-slate-900 w-20 h-1 mx-auto"></div>
        </div>
        <h1 className="m-5 text-lg font-semibold">Which we Provide</h1>
    </div>
    
    <div className="lg:flex lg:flex-wrap lg:justify-center lg:ml-20 lg:mr-20 lg:mb-10 rounded-sm bg-slate-100">
      { item? 
    item.vehicleType.split(',').map((type, index) => {
    return(
    <div className="lg:w-[18%] flex justify-center items-center mb-2">
     <div className="text-center lg:w-36 w-40"> 
     <div className=""><img className="h-28 w-28" src={vehicletypelogo}/></div>
     <div className="lg:h-28"><h1 className="font-bold mt-1 lg:text-sm text-2xl">{type}</h1></div>
    </div>
    </div>
    )})
    :
    <h1>No Vehicle type available !</h1>
    }
    
    </div>

    </div>

    {/* our services */}
    <div>
        <div className="text-center lg:text-7xl text-6xl font-bold lg:font-semibold mb-10">
            <h1>Our Services</h1>
        </div>
        <div className="lg:flex lg:flex-wrap lg:justify-center lg:ml-20 lg:mr-20 lg:mb-10 rounded-sm ">
            { item? 
                item.serviceType.split(',').map((type, index) => {
            return(
            <div className="lg:w-[23%] flex justify-center items-center mb-2">
             <div className="text-center"> 
             <div className="flex justify-center items-center"><img className="w-6" src={servicetypelogo}/></div>
             <div className="p-4 rounded-lg text-orange-400"><h1 className="font-bold mt-1 lg:text-4xl text-2xl">{type}</h1></div>
            </div>
            </div>
            )})
            :
            <h1>No Vehicle type available !</h1>
            }
    
    </div>
    </div>

    {/* our commitment */}
    <div className="h-[60vh] bg-no-repeat bg-cover" style={{backgroundImage: `url(${commitmentimg})`}}>
            <div className="h-full flex-col bg-[rgba(0,0,0,0.5)] gap-2.5 text-center pt-20 p-2">
                <h2 className="text-white font-semibold text-[3rem]">Our Commitment to Excellence</h2>
                <p className="text-slate-200 text-[1.2rem] font-semibold pb-5 text-justify lg:ml-[28rem] lg:w-[35rem]">
                At 
                <span> {item.companyName}</span>
                , we are committed to providing top-notch transportation solutions that guarantee safety, reliability, and cost-effectiveness. Our dedicated team ensures that every aspect of our operations reflects our commitment to excellence. We prioritize online booking and safe delivery, setting us apart from our competitors.
                </p>
            </div>
    </div>

    {/* user data */}
    <div>
    <div className="lg:flex lg:flex-wrap lg:justify-center lg:pt-10 rounded-sm  bg-black">

        {/*  establ.. */}
            <div className="lg:w-[23%] flex justify-center items-center mb-2 pt-10 lg:pt-0">
             <div className="text-center"> 
             <div className="flex justify-center items-center bg-white rounded-full h-36 w-36">
                <div>
                <img className="w-20" src={establisedlogo}/>
                <h1>Estb.</h1>
                </div>
            </div>
            <div className="p-4 rounded-lg text-white"><h1 className="font-bold mt-1 lg:text-4xl text-2xl">{item.established}</h1></div>
            </div>
            </div>

        {/*  team.. */}
            <div className="lg:w-[23%] flex justify-center items-center mb-2">
             <div className="text-center"> 
             <div className="flex justify-center items-center bg-white rounded-full h-36 w-36">
                <div>
                <img className="w-20" src={teamlogo}/>
                <h1>Team</h1>
                </div>
            </div>
             <div className="p-4 rounded-lg text-white"><h1 className="font-bold mt-1 lg:text-4xl text-2xl">{item.numberOfEmployee}</h1></div>
            </div>
            </div>

        {/*  owner.. */}
            <div className="lg:w-[23%] flex justify-center items-center mb-2">
             <div className="text-center"> 
             <div className="flex justify-center items-center">
                <div className="bg-white rounded-full h-36 w-36 flex justify-center items-center">
                <div>
                <img className="w-20" src={ownerlogo}/>
                <h1>Owner</h1>
                </div>
                </div>
            </div>
             <div className="p-4 rounded-lg text-white"><h1 className="font-bold mt-1 lg:text-4xl text-2xl">{item.contactName}</h1></div>
            </div>
            </div>        
    
    </div>
    </div>

    <div className="bg-violet-500 lg:pl-40 lg:pr-40 pb-10">
        <div className="text-center text-white pt-12">
        <h1 className=" lg:text-5xl text-4xl font-bold">Get Your Free Quote</h1>
        </div>
        
        <div className="flex lg:mt-16 mt-5">

        <div className="w-[60%] pl-10 lg:pl-0">
            <div className="lg:w-72 w-40 text-white">
                <h1 className="text-2xl mb-5">Address</h1>
                <p>{item.address}</p>
            </div>
        </div>
        <div>
            <div className="p-2 pl-10 pr-10 rounded-full text-white text-xl">
            <button>Call -</button>
            <a href={`tel:${item.contactNo}`}class="hover:underline hover:text-gray-300">{item.contactNo}</a>
            </div>

            <div className="mt-5 p-2 pl-10 pr-10 rounded-full text-white text-xl">
            <button>WhatsApp -</button>
            <a href={`whatsapp://send?phone=${item.contactNo}`} className="hover:underline hover:text-gray-300">{item.contactNo}</a>
            </div>
        </div>

            {/*  */}
        </div>
        
    </div>    



    
    <Footer/>
    </>

  )
}
