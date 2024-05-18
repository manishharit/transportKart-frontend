import React from 'react';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import homefourthSec from '../assets/homefourthSec.jpg'
import ReactSearchBox from "react-search-box";
import { Search } from './Search';



export const UserCard = () => {
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
  return (
    <>
     <NavBar/>
    <Search/> 
    <div className='lg:flex lg:flex-wrap lg:justify-between mt-1'>
    <div className='lg:w-[30%] '>
      {/* image */}
      <div className="lg:h-56 h-48">
            <img className="rounded-t-3xl " src={homefourthSec} />
      </div>
      <div></div>
      {/* card */}
      <div className='bg-slate-100 rounded-b-3xl'>
        <div className='text-center p-5 '>
          <h1 className='text-2xl font-bold'>Company</h1>
        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odit eius autem commodi ducimus, deleniti repellat vitae tenetur ullam facilis, cupiditate culpa reprehenderit! Autem in laudantium ipsam provident illum suscipit.</p>
        
        <button className="text-white font-semibold mt-5 pt-3 pb-3 pl-4 pr-4 rounded-xl bg-violet-600 ">Explore more</button>
        </div>
        <div className='flex bg-orange-400 text-white pb-2 pt-2 mt-2 rounded-b-3xl '>
          <div className="flex-1 text-center">
            <h1 className='text-3xl font-bold'>1990</h1>
            <h1>Established</h1>
          </div>
          <div className="flex-1 text-center">
            <h1 className='text-3xl font-bold'>true</h1>
            <h1>Verified</h1>
          </div>
          <div className="flex-1 text-center">
            <h1 className='text-3xl font-bold'>20</h1>
            <h1>No of trucks</h1>
          </div>
        </div>

      </div>


    </div>

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
