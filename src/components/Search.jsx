import {useEffect, useState } from 'react';
import axios from 'axios';
import ReactSearchBox from "react-search-box";
import fromToCityData from '../fromToCityData.json'
import Select from 'react-select';



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
  const companyNameData = [
    {
      key: "Beniwal Logistic Services",
      value: "Beniwal Logistic Services",
    },
    {
      key: "ADL Supply Chain Solutions (P) Ltd",
      value: "ADL Supply Chain Solutions (P) Ltd",
    },
    {
      key: "Endivour Logistics",
      value: "Endivour Logistics",
    },
    {
      key: "Zotek Services Pvt Ltd",
      value: "Zotek Services Pvt Ltd",
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
      key: "22 Tyre Open Truck",
      value: "22 Tyre Open Truck",
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
    {
      key: "40 Ft Trailer Semi High Bed",
      value: "40 Ft Trailer Semi High Bed",
    },
  ];
  const serviceTypeData = [
    {
      key: "TRUCKOWNER",
      value: "TRUCKOWNER",
    },
    {
      key: "BROKER",
      value: "BROKER",
    },
    {
      key: "FULLLOAD",
      value: "FULLLOAD",
    },
    {
      key: "PARTLOAD",
      value: "PARTLOAD",
    },
    {
      key: "WAREHOUSE",
      value: "WAREHOUSE",
    },
    {
      key: "FRIEGHTFORWARDING",
      value: "FRIEGHTFORWARDING",
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
  const handleServiceType = (selectedOption) => {
    if (selectedOption && selectedOption.value) {
      setServiceType(selectedOption.value);
    }
  };
  const handleToCity = (e) => {
    setToCity(e.item.value);
  };
  const handleFromCity = (e) => {
    setFromCity(e.item.value);
  };
  const handleVehicleType = (selectedOption) => {
    if (selectedOption && selectedOption.value) {
      setVehicleType(selectedOption.value);
    }
  };
  const handleCompanyName = (e) =>{
    setCompanyName(e.item.value)
  }
  // logic start here

  useEffect(()=>{
    // look for disable
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
      let response;
      if(companyName === "Company Name") {
        response = await axios.post(`${baseUrl}/user/${serviceType}/${fromCity}/${toCity}/${vehicleType}`,request)
      } else{
        response = await axios.post(`${baseUrl}/user/${companyName}`,request)
      }
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
      <div className='flex-1 lg:flex lg:ml-40 mt-10 lg:mr-4 p-5 rounded-3xl flex-col md:flex-row justify-center items-center'>
  <div className='lg:w-40 mb-5 md:mr-10 md:mb-0' style={{ pointerEvents: disabled?"none":"auto" }}>
    <Select
      options={serviceTypeData.map(item => ({ value: item.value, label: item.key }))}
      onChange={handleServiceType}
      placeholder={serviceType}
      styles={{
        control: base => ({
          ...base,
          borderColor: 'violet'
        })
      }}
    />
  </div>
  <div className='lg:w-40 mb-5 md:mr-10 md:mb-0' style={{ pointerEvents: disabled?"none":"auto" }}>
    <ReactSearchBox
      placeholder={fromCity}
      data={fromToCityData}
      onSelect={handleFromCity}
      inputBorderColor='violet'
    />
  </div>
  <div className='lg:w-40 mb-5 md:mr-10 md:mb-0' style={{ pointerEvents: disabled?"none": disabled2?"none":"auto" }}>
    <ReactSearchBox
      placeholder={toCity}
      data={fromToCityData}
      onSelect={handleToCity}
      inputBorderColor='violet'
    />
  </div>
  <div className='lg:w-40 mb-5 md:mr-10 md:mb-0' style={{ pointerEvents: disabled?"none": disabled1?"none":disabled2?"none":"auto" }}>
    <Select
      options={vehicleTypeData.map(item => ({ value: item.value, label: item.key }))}
      onChange={handleVehicleType}
      placeholder={vehicleType}
      styles={{
        control: base => ({
          ...base,
          borderColor: 'violet'
        })
      }}
    />
  </div>
  <h1 className='pt-2 pb-2 lg:pl-2 lg:pr-5 pl-44 '>OR</h1>
  <div className='lg:w-40 mb-5 md:mr-10 md:mb-0' style={{ pointerEvents: 'auto' }}>
    <ReactSearchBox
      placeholder={companyName}
      data={companyNameData}
      onSelect={handleCompanyName}
      inputBorderColor='violet'
    />
  </div>
  
  <div className='flex justify-center'>
  <div className='mt-5 lg:mt-0 lg:w-32 w-44 bg-purple-600 rounded-2xl pl-5 pr-5 p-2'>
    <button onClick={fetchData} className='text-white pt-1 pl-10 lg:pl-0'>Search 🔍</button>
  </div>
</div>
</div>



    {/* card section */}
    

    </div>
    </>
  );
};
