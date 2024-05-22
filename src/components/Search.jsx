import {useEffect, useState } from 'react';
import axios from 'axios';
import ReactSearchBox from "react-search-box";
import fromToCityData from '../fromToCityData.json'



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
  const vehicleTypeData = [
    {
      key: "Champion",
      value: "Champion",
    },
    {
      key: "Tata Ace",
      value: "Tata Ace",
    },
    {
      key: "Pickup",
      value: "Pickup",
    },
    {
      key: "Tata",
      value: "Tata",
    },
    {
      key: "Tata 407",
      value: "Tata 407",
    },
    {
      key: "14 Ft Open / Container",
      value: "14 Ft Open / Container",
    },
    {
      key: "17 Ft Open / Container",
      value: "17 Ft Open / Container",
    },
    {
      key: "20 Ft Open",
      value: "20 Ft Open",
    },
    {
      key: "20 Ft Container",
      value: "120 Ft Container",
    },
    {
      key: "22 Ft Open",
      value: "22 Ft Open",
    },
    {
      key: "22 Ft Container",
      value: "22 Ft Container",
    },
    {
      key: "24 Ft Container",
      value: "24 Ft Container",
    },
    {
      key: "24 Ft Open",
      value: "24 Ft Open",
    },
    {
      key: "32 Ft XL Container",
      value: "32 Ft XL Container",
    },
    {
      key: "32 Ft XXL Container",
      value: "32 Ft XXL Container",
    },
    {
      key: "32 Ft XXXL Container",
      value: "32 Ft XXXL Container",
    },
    {
      key: "40 Ft Container",
      value: "40 Ft Container",
    },
    {
      key: "10 Tyre Open Truck",
      value: "10 Tyre Open Truck",
    },
    {
      key: "12 Tyre Open Truck",
      value: "12 Tyre Open Truck",
    },
    {
      key: "14 Tyre Open Truck",
      value: "14 Tyre Open Truck",
    },
    {
      key: "16 Tyre Open Truck",
      value: "16 Tyre Open Truck",
    },
    {
      key: "18 Tyre Open Truck",
      value: "18 Tyre Open Truck",
    },
    {
      key: "20 Tyre Open Truck",
      value: "20 Tyre Open Truck",
    },
    {
      key: "20 Tyre Open Truck",
      value: "20 Tyre Open Truck",
    },
    {
      key: "24 Tyre Open Truck",
      value: "24 Tyre Open Truck",
    },
    {
      key: "40 Ft Trailer Low Bed",
      value: "40 Ft Trailer Low Bed",
    },
    {
      key: "40 Ft Trailer High Bed",
      value: "40 Ft Trailer High Bed",
    },
  ];
  const serviceTypeData = [
    {
        key: "wareHouse",
        value: "WAREHOUSE",
      },
      {
        key: "fullLoad",
        value: "FULLLOAD",
      },
      {
        key: "partLoad",
        value: "PARTLOAD",
      },
      {
        key: "broker",
        value: "BROKER",
      },
      {
        key: "truckOwner",
        value: "TRUCKOWNER",
      },
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
    console.log("test")
    console.log(companyName)
    if(companyName !== "Company Name") {
       setDisabled(true)
       setServiceType("Service Type")
       setToCity("To City")
       setFromCity("From City")
       setVehicleType("Vehicle Type")
      }
    if(serviceType === "PARTLOAD") { setDisabled1(true)}
    if (serviceType !== "PARTLOAD" ) {setDisabled1(false)}
    if(serviceType === "WAREHOUSE") { setDisabled2(true)}  
    if (serviceType !== "WAREHOUSE" ) {setDisabled2(false)}
  },[serviceType,handleServiceType,toCity,fromCity,vehicleType,companyName,Search])

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
      <h1 className='font-bold  lg:text-3xl text-xl'>Explore All Transporter And Trucks</h1>
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
    <div className='lg:w-40 lg:ml-10' style={{ pointerEvents: disabled?"none":"auto" }}>
    <ReactSearchBox
        placeholder={fromCity}
        data={fromToCityData}
        onSelect={handleFromCity}
        inputBorderColor='violet'
      />
    </div>
     
    </div>
    <div className='flex mt-3 lg:mt-0'>
    <div className='lg:w-40 lg:ml-10' style={{ pointerEvents: disabled?"none": disabled2?"none":"auto" }}>
    <ReactSearchBox
        placeholder={toCity}
        data={fromToCityData}
        onSelect={handleToCity}
        inputBorderColor='violet'
      />
    </div>
    <div className='lg:w-40 lg:ml-10' style={{ pointerEvents: disabled?"none": disabled1?"none":disabled2?"none":"auto" }}>
    <ReactSearchBox
        placeholder={vehicleType}
        data={vehicleTypeData}
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
   <div className='mt-5 lg:mt-0  h-10 lg:ml-10 ml-24 lg:w-32 w-44 bg-purple-600 rounded-3xl pl-5 pr-5 p-1'>
      <button onClick={fetchData} className='text-white pt-1 pl-10 lg:pl-0'>Search 🔍</button>
    </div>
    </div>


    {/* card section */}
    

    </div>
    </>
  );
};
