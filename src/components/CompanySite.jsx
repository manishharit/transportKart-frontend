import mainBg from "../assets/mainBg.png"
import homefourthSec from '../assets/homefourthSec.jpg'
import { Footer } from "../components/Footer"
import { NavBar } from "../components/NavBar"
import { useLocation } from 'react-router-dom';

export const CompanySite = () => {
    const location = useLocation();
    const { item } = location.state;
  return (

    <>
    <NavBar/>
    {/* hero image */}
        <div className="h-[30vh] bg-no-repeat bg-cover" style={{backgroundImage: `url(${mainBg})`}}>
            <div className="h-full flex-col bg-[rgba(0,0,0,0.5)] gap-2.5 text-center pt-20">
                <h2 className="text-white font-bold text-[3rem]">{item.companyName}</h2>
            </div>
        </div>


    {/* home forth */}

    <div className="m-10 lg:flex">
        <div className=" lg:pt-5 lg:pl-5">
            <img className="lg:rounded-3xl" src={homefourthSec}  alt="heroSecondSec"  />
        </div>
        <div className="lg:pl-10 p-5">
            <h3 className="font-extrabold text-3xl"> {item.companyName}</h3>
            <h4 className="font-bold text-lg">{item.contactName}</h4>
            <p className="text-justify font-light lg:w-96">
            {item.aboutUs}
            </p>
            <h4 className="font-medium pt-1">Address: {item.address}</h4>
            <div className="flex text-blue-600">
                <h5 >ContactNo: {item.contactNo}</h5>
                <h5 className="pl-5">WhatsappNo {item.whatsAppNo}</h5>
            </div>
            <h5>From: {item.fromCity}</h5>
            <h5>To: {item.fromCity}</h5>
            <h5>vehicleType: {item.vehicleType}</h5>
            <h5>serviceType: {item.serviceType}</h5>
            <h5>Emp: {item.numberOfEmployee}</h5>
            <h5>Year: {item.established}</h5>

        </div>
        
        </div>

    <div className="m-10 p-5 bg-violet-500 text-center rounded-3xl">
        <h1 className="text-white lg:text-xl font-bold">Call Us! For more Information..</h1>
    </div>    



    
    <Footer/>
    </>

  )
}
