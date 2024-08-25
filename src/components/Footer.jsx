import React from 'react'
import manilogo from '../assets/logo.png'
import { Link } from 'react-router-dom'

export const Footer = () => {
    
  return (
        

<footer class="bg-black dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl p-2 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="hidden md:block mb-6 mr-5 md:mb-0">
              <Link to="#" class="flex items-center">
                  <img src={manilogo} class="h-20 me-3" alt="FlowBite Logo" />
              </Link>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Resources</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <Link to="/about" class="hover:underline  hover:text-gray-300">About Us</Link>
                      </li>
                      <li>
                          <Link to="/explore" class="hover:underline hover:text-gray-300">Trucks For You</Link>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Follow us</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                          <a href="https://www.facebook.com/people/Transportkart/61560239111419/" class="hover:underline hover:text-gray-300 ">Facebook</a>
                      </li>
                      <li>
                          <a href="https://www.instagram.com/transportkart?igsh=MTd5YjYya2hiZjdvZA==" class="hover:underline hover:text-gray-300">Instagram</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white ">Contact Us</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium ">
                      <li class="mb-4">
                      <a href="tel:+918595146008" class="hover:underline hover:text-gray-300">+91 8595146008</a>
                      </li>
                      <li>
                      <a href="mailto:connect@transportkart.com" class="hover:underline hover:text-gray-300">Email Us</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white ">Legal</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium ">
                      <li class="mb-4">
                          <Link to="#" class="hover:underline hover:text-gray-300">Privacy Policy</Link>
                      </li>
                      <li>
                          <Link to="#" class="hover:underline hover:text-gray-300">Terms &amp; Conditions</Link>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400 hover:text-gray-300">© 2024 <a href="https://transportkart.com/" class="hover:underline">TransportKart</a> All Rights Reserved @ <a href="https://www.linkedin.com/company/smart-ems/mycompany/" class="hover:underline">SmART EMS</a>
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
              <a href="https://www.facebook.com/people/Transportkart/61560239111419/" class="text-gray-500 dark:hover:text-white  hover:text-gray-300">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span class="sr-only">Facebook page</span>
              </a>
              <a href="mailto:connect@transportkart.com" class="text-gray-500  hover:text-gray-300 dark:hover:text-white ms-5">
                   <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 6l-10 7L2 6"></path>
                   </svg>
                   <span class="sr-only">Email</span>
              </a>
              <a href="https://www.instagram.com/transportkart?igsh=MTd5YjYya2hiZjdvZA==" class="text-gray-500  hover:text-gray-300 dark:hover:text-white ms-5">
              <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
              </svg>
                  <span class="sr-only">Instagram</span>
              </a>
              <Link to="#" class="text-gray-500  hover:text-gray-300 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Twitter page</span>
              </Link>
          </div>
      </div>
    </div>
</footer>


  )
}