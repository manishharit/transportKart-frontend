import mainBg from "../assets/mainBg.png"
import homefourthSec from '../assets/homefourthSec.jpg'
import { Footer } from "../components/Footer"
import { NavBar } from "../components/NavBar"

export const CompanySite = () => {
  return (

    <>
    <NavBar/>
    {/* hero image */}
        <div className="h-[30vh] bg-no-repeat bg-cover" style={{backgroundImage: `url(${mainBg})`}}>
            <div className="h-full flex-col bg-[rgba(0,0,0,0.5)] gap-2.5 text-center pt-20">
                <h2 className="text-white font-bold text-[3rem]">My Company</h2>
            </div>
        </div>


    {/* home forth */}

    <div className="m-10 lg:flex">
        <div className=" lg:pt-5 lg:pl-5">
            <img className="lg:rounded-3xl" src={homefourthSec}  alt="heroSecondSec"  />
        </div>
        <div className="lg:pl-10 p-5">
            <h3 className="font-extrabold text-3xl"> Company Name</h3>
            <h4 className="font-bold text-lg"> contact person name</h4>
            <p className="text-justify font-light lg:w-96">
            Digital listing platform for transportation and logistics stakeholders.
            Allows truck owners, brokers, logistics companies and warehousing companies to create shared websites.
            Digital listing platform for transportation and logistics stakeholders.
            Allows truDigital listing platform for transportation and logistics stakeholders.
            Allows tru
            </p>
            <h4 className="font-medium pt-1">Address</h4>
            <div className="flex text-blue-600">
                <h5 >Contact No.</h5>
                <h5 className="pl-5">whatsUp No.</h5>
            </div>
            <h5>From City</h5>
            <h5>To City</h5>
            <h5>Vehicle Type</h5>
            <h5>Service Type</h5>
            <h5>Total No of Emp</h5>
            <h5>Year</h5>

        </div>
        
        </div>

    <div className="m-10 p-5 bg-violet-500 text-center rounded-3xl">
        <h1 className="text-white lg:text-xl font-bold">Call Us! For more Information..</h1>
    </div>    



    
    <Footer/>
    </>

  )
}
