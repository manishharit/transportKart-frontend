import { useState, useEffect } from 'react';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import homefourthSec from '../assets/homefourthSec.jpg'
import ReactSearchBox from "react-search-box";
import { Search } from './Search';
import { Link, useNavigate } from 'react-router-dom'



export const UserCard = ({ baseUrl }) => {
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

  const [userData, setData] = useState();

  const handleDataFetch = (fetchedData) => {
    setData(fetchedData);
    console.log(fetchedData)
  };

  useEffect(()=>{

  },[Search,handleDataFetch])
  const navigate = useNavigate();
  const handleExploreClick = (item) => {
    navigate(`/user/${item.companyName}`, { state: { item } });
  };

  return (
    <>
     <NavBar/>
    <Search baseUrl={baseUrl} onDataFetch={handleDataFetch}/> 
    <div className='lg:flex lg:flex-wrap lg:justify-between lg:mt-20 mt-48 ml-5 mr-5 mb-10'>


    { userData? 
    userData.map((item, index) => {
    return(
      
    <div key={index} className='lg:w-[30%] mb-4 bg-slate-100 rounded-3xl'>
      {/* image */}
      <div className="lg:h-[13rem] h-48">
            <img className="rounded-t-3xl " src={item.imageUrl} />
      </div>
      <div></div>
      {/* card */}
      <div className='rounded-b-3xl'>
        <div className='text-center p-5 '>
          <h1 className='text-2xl font-bold'>{item.companyName}</h1>
        <p className='text-justify mb-8'>{item.aboutUs}</p>
        
        {/* <Link to={`/user/${item.companyName}/${item.contactNo}/${item.whatsAppNo}/${item.fromCity}/${item.toCity}/${item.vehicleType}/${item.serviceType}/${item.numberOfEmployee}/${item.address}/${item.established}/${item.verified}/${item.numberOfTrucks}`} className="text-white font-semibold mt-5 pt-3 pb-3 pl-4 pr-4 rounded-xl bg-violet-600 ">Explore more</Link>
         */}
                 <button onClick={() => handleExploreClick(item)} className="text-white font-semibold mt-5 pt-3 pb-3 pl-4 pr-4 rounded-xl bg-violet-600 ">Explore more</button>
        </div>
        <div className='flex bg-orange-400 text-white pb-2 pt-2 mt-2 rounded-b-3xl '>
          <div className="flex-1 text-center">
            <h1 className='text-3xl font-bold'>{item.established}</h1>
            <h1>Established</h1>
          </div>
          <div className="flex-1 text-center">
            <h1 className='text-3xl font-bold'>{item.verified?"True":"False"}</h1>
            <h1>Verified</h1>
          </div>
          <div className="flex-1 text-center">
            <h1 className='text-3xl font-bold'>{item.numberOfTrucks}</h1>
            <h1>No of trucks</h1>
          </div>
        </div>

      </div>


    </div> 
    )}) :<h5 className='text-2xl lg:pl-[40rem] pl-32 mb-28'>No data</h5>}

    {/* stop there */}

    </div>
    <Footer/>
    </>
  //   <>
  //   <NavBar/>
  //   <div className='h-96'>
  //     <div className='text-center mt-10'>
  //     <h1 className='font-bold  lg:text-3xl text-xl'>Explore all Transporter and Trucks</h1>
  //     </div>
  //     {/* search */}
  //   <div className='flex-1 lg:flex lg:ml-40 mt-10 lg:mr-4 p-5 rounded-3xl '>
  //   <div className='flex'>
  //   <div className='lg:w-40'>
  //   <ReactSearchBox
  //       placeholder="Service Type"
  //       value="Doe"
  //       data={data}
  //       callback={(record) => console.log(record)}
  //       inputBorderColor='violet'
  //     />
  //   </div>
  //    <div className='lg:w-40 lg:ml-10'>
  //   <ReactSearchBox
  //       placeholder="ToCity"
  //       value="Doe"
  //       data={data}
  //       callback={(record) => console.log(record)}
  //       inputBorderColor='violet'
  //     />
  //   </div>
  //   </div>
  //   <div className='flex mt-3 lg:mt-0'>
  //    <div className='lg:w-40 lg:ml-10'>
  //   <ReactSearchBox
  //       placeholder="FromCity"
  //       value="Doe"
  //       data={data}
  //       callback={(record) => console.log(record)}
  //       inputBorderColor='violet'
  //     />
  //   </div>
  //   <div className='lg:w-40 lg:ml-10' style={{ pointerEvents: 'auto' }}>
  //   <ReactSearchBox
  //       placeholder="Vehicle Type"
  //       value="Doe"
  //       data={data}
  //       callback={(record) => console.log(record)}
  //       inputBorderColor='violet'
  //     />
  //   </div>
  //   </div>
    
  //   <h1 className='pt-2 lg:pl-5 pl-44 '>OR</h1>
  //   <div className='lg:w-40 lg:ml-5' style={{ pointerEvents: 'auto' }}>
  //   <ReactSearchBox
  //       placeholder="Company Name"
  //       value="Doe"
  //       data={data}
  //       callback={(record) => console.log(record)}
  //       inputBorderColor='violet'
  //     />
  //   </div>
  //  <div className='mt-5 lg:mt-0  h-10 lg:ml-10 ml-24 lg:w-28 w-44 bg-purple-600 rounded-3xl pl-5 pr-5 p-1'>
  //     <button className='text-white pt-1 pl-10 lg:pl-0'>Search 🔍</button>
  //   </div>
  //   </div>

  //   </div>
  //   </>
  );
};
