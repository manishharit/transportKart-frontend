import React from 'react';

import ReactSearchBox from "react-search-box";



export const Search = () => {
  const data = [
    {
      key: "john",
      value: "John Doe",
    },
    {
      key: "jane",
      value: "Jane Doe",
    },
    {
      key: "mary",
      value: "Mary Phillips",
    },
    {
      key: "robert",
      value: "Robert",
    },
    {
      key: "karius",
      value: "Karius",
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
  ]
  const [serviceType, setServiceType] = React.useState('Service Type');
  const handleServiceType = (e) => {
    console.log(e.item.value);
    setServiceType(e.item.value);
  };
  return (
    <>
    <div className='lg:h-40 z-10 h-80 '>
      <div className='text-center mt-10'>
      <h1 className='font-bold  lg:text-3xl text-xl'>Explore all Transporter and Trucks</h1>
      </div>
      {/* search */}
    <div className='flex-1 lg:flex lg:ml-40 mt-10 lg:mr-4 p-5 rounded-3xl '>
    <div className='flex'>
    <div className='lg:w-40'>
    <ReactSearchBox
        placeholder={serviceType}
        data={serviceTypeData}
        onSelect={handleServiceType}
        inputBorderColor='violet'
      />
    </div>
     <div className='lg:w-40 lg:ml-10'>
    <ReactSearchBox
        placeholder="ToCity"
        value="Doe"
        data={data}
        callback={(record) => console.log(record)}
        inputBorderColor='violet'
      />
    </div>
    </div>
    <div className='flex mt-3 lg:mt-0'>
     <div className='lg:w-40 lg:ml-10'>
    <ReactSearchBox
        placeholder="FromCity"
        value="Doe"
        data={data}
        callback={(record) => console.log(record)}
        inputBorderColor='violet'
      />
    </div>
    <div className='lg:w-40 lg:ml-10' style={{ pointerEvents: 'auto' }}>
    <ReactSearchBox
        placeholder="Vehicle Type"
        value="Doe"
        data={data}
        callback={(record) => console.log(record)}
        inputBorderColor='violet'
      />
    </div>
    </div>
    
    <h1 className='pt-2 lg:pl-5 pl-44 '>OR</h1>
    <div className='lg:w-40 lg:ml-5' style={{ pointerEvents: 'auto' }}>
    <ReactSearchBox
        placeholder="Company Name"
        value="Doe"
        data={data}
        callback={(record) => console.log(record)}
        inputBorderColor='violet'
      />
    </div>
   <div className='mt-5 lg:mt-0  h-10 lg:ml-10 ml-24 lg:w-28 w-44 bg-purple-600 rounded-3xl pl-5 pr-5 p-1'>
      <button className='text-white pt-1 pl-10 lg:pl-0'>Search 🔍</button>
    </div>
    </div>


    {/* card section */}
    

    </div>
    </>
  );
};
