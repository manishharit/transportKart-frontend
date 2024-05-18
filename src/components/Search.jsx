import {useEffect, useState } from 'react';
import axios from 'axios';
import ReactSearchBox from "react-search-box";



export const Search = ({ baseUrl , onDataFetch }) => {
  const data = [
    {
      key: "john",
      value: "John Doe",
    },
    {
      key: "truck",
      value: "truck",
    },
    {
      key: "mumbai",
      value: "mumbai",
    },
    {
      key: "delhi",
      value: "delhi",
    },
    {
      key: "oneday",
      value: "oneday",
    },
  ];
  const serviceTypeData = [
    {
        key: "wareHouse",
        value: "WareHouse",
      },
      {
        key: "fullLoad",
        value: "Full Load",
      },
      {
        key: "partLoad",
        value: "Part Load",
      },
      {
        key: "brocker",
        value: "Brocker",
      },
      {
        key: "truckOwner",
        value: "Truck Owner",
      },
      {
        key:"oneday",
        value:"oneday"

      }
  ]
  const [serviceType, setServiceType] = useState('Service Type');
  const [ toCity, setToCity] = useState("To City")
  const [ fromCity, setFromCity] = useState("From City")
  const [ vehicleType, setVehicleType] = useState("Vehicle Type")
  const [ companyName, setCompanyName] = useState("Company Name")
  const [ disabled, setDisabled] = useState(false)
  const [ disabled1, setDisabled1] = useState(false)
  const [ disabled2, setDisabled2] = useState(false)
  const handleServiceType = (e) => {
    setServiceType(e.item.value);
  };
  const handleToCity = (e) => {
    setToCity(e.item.value);
  };
  const handleFromCity = (e) => {
    setFromCity(e.item.value);
  };
  const handleVehicleType = (e) => {
    setVehicleType(e.item.value);
  };
  const handleCompanyName = (e) =>{
    setCompanyName(e.item.value)
  }
  // logic start here

  useEffect(()=>{
    // look for disable
    console.log(companyName)
    if(companyName !== "Company Name") {
       setDisabled(true)
       setServiceType("Service Type")
       setToCity("To City")
       setFromCity("From City")
       setVehicleType("Vehicle Type")
      }
    if(serviceType === "Part Load") { setDisabled1(true)}
    if(serviceType === "WareHouse") { setDisabled2(true)}
  },[serviceType,toCity,fromCity,vehicleType,companyName,Search])

  const fetchData = async () => {
    try {
      const request = "id"
      const response = await axios.post(`${baseUrl}/user/${serviceType}/${fromCity}/${toCity}/${vehicleType}`,request)
      onDataFetch(response.data)
    } catch (error) {
      console.log(error.response.data.message)
      alert(error.response.data.message)
    }
  }

  return (
    <>
    <div className='lg:h-40 z-10 h-80 '>
      <div className='text-center mt-10'>
      <h1 className='font-bold  lg:text-3xl text-xl'>Explore all Transporter and Trucks</h1>
      </div>
      {/* search */}
    <div className='flex-1 lg:flex lg:ml-40 mt-10 lg:mr-4 p-5 rounded-3xl '>
    <div className='flex'>
    <div className='lg:w-40' style={{ pointerEvents: disabled?"none":"auto" }}>
    <ReactSearchBox
        placeholder={serviceType}
        data={serviceTypeData}
        onSelect={handleServiceType}
        inputBorderColor='violet'
      />
    </div>
     <div className='lg:w-40 lg:ml-10' style={{ pointerEvents: disabled?"none": disabled2?"none":"auto" }}>
    <ReactSearchBox
        placeholder={toCity}
        data={data}
        onSelect={handleToCity}
        inputBorderColor='violet'
      />
    </div>
    </div>
    <div className='flex mt-3 lg:mt-0'>
     <div className='lg:w-40 lg:ml-10' style={{ pointerEvents: disabled?"none":"auto" }}>
    <ReactSearchBox
        placeholder={fromCity}
        data={data}
        onSelect={handleFromCity}
        inputBorderColor='violet'
      />
    </div>
    <div className='lg:w-40 lg:ml-10' style={{ pointerEvents: disabled?"none": disabled1?"none":disabled2?"none":"auto" }}>
    <ReactSearchBox
        placeholder={vehicleType}
        data={data}
        onSelect={handleVehicleType}
        inputBorderColor='violet'
      />
    </div>
    </div>
    
    <h1 className='pt-2 lg:pl-5 pl-44 '>OR</h1>
    <div className='lg:w-40 lg:ml-5' style={{ pointerEvents: 'auto' }}>
    <ReactSearchBox
        placeholder={companyName}
        data={data}
        onSelect={handleCompanyName}
        inputBorderColor='violet'
      />
    </div>
   <div className='mt-5 lg:mt-0  h-10 lg:ml-10 ml-24 lg:w-28 w-44 bg-purple-600 rounded-3xl pl-5 pr-5 p-1'>
      <button onClick={fetchData} className='text-white pt-1 pl-10 lg:pl-0'>Search 🔍</button>
    </div>
    </div>


    {/* card section */}
    

    </div>
    </>
  );
};
