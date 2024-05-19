import React from 'react'
import manilogo from '../assets/logo.png'

export const Footer = () => {
    
  return (
        

<footer class="bg-black dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 mr-5 md:mb-0">
              <a href="#" class="flex items-center">
                  <img src={manilogo} class="h-20 me-3" alt="FlowBite Logo" />
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Resources</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a to="/about" class="hover:underline  hover:text-gray-300">About Us</a>
                      </li>
                      <li>
                          <a to="/bgmievent" class="hover:underline hover:text-gray-300">Trucks For You</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Follow us</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="#" class="hover:underline hover:text-gray-300 ">Facebook</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline hover:text-gray-300">Instagram</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white ">Legal</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium ">
                      <li class="mb-4">
                          <a href="#" class="hover:underline hover:text-gray-300">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline hover:text-gray-300">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white ">Contact Us</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium ">
                      <li class="mb-4">
                          <a href="#" class="hover:underline hover:text-gray-300">+91 7894561230</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline hover:text-gray-300">connect@transportkart.com</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400 hover:text-gray-300">© 2024 <a href="https://transportkart.com/" class="hover:underline">TransportKart</a> All Rights Reserved @ SmART EMS
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" class="text-gray-500 dark:hover:text-white  hover:text-gray-300">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span class="sr-only">Facebook page</span>
              </a>
              <a href="#" class="text-gray-500  hover:text-gray-300 dark:hover:text-white ms-5">
                   <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 6l-10 7L2 6"></path>
                   </svg>
                   <span class="sr-only">Email</span>
              </a>
              <a href="#" class="text-gray-500  hover:text-gray-300 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12,2C6.476,2,2,6.476,2,12s4.476,10,10,10s10-4.476,10-10S17.524,2,12,2z M12,19.5c-3.891,0-7.046-3.155-7.046-7.045C4.954,8.563,8.11,5.408,12,5.408c3.89,0,7.046,3.155,7.046,7.047C19.046,16.345,15.89,19.5,12,19.5z M12,16.14 c-2.623,0-4.75-2.127-4.75-4.75c0-2.623,2.127-4.75,4.75-4.75s4.75,2.127,4.75,4.75C16.75,13.013,14.623,16.14,12,16.14z M17.25,7.871c-0.323,0-0.586-0.263-0.586-0.586c0-0.322,0.263-0.586,0.586-0.586c0.322,0,0.586,0.264,0.586,0.586C17.836,7.607,17.572,7.871,17.25,7.871z M17.25,14.229c-0.322,0-0.586-0.263-0.586-0.586c0-0.322,0.264-0.586,0.586-0.586c0.322,0,0.586,0.264,0.586,0.586 C17.836,13.965,17.572,14.229,17.25,14.229z M17.25,10.045c-0.322,0-0.586-0.263-0.586-0.586s0.264-0.586,0.586-0.586 s0.586,0.263,0.586,0.586S17.572,10.045,17.25,10.045z"/>
    </svg>
    <span class="sr-only">Instagram</span>
</a>
              <a href="#" class="text-gray-500  hover:text-gray-300 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Twitter page</span>
              </a>
              <a href="#" class="text-gray-500  hover:text-gray-300 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                  <span class="sr-only">GitHub account</span>
              </a>
          </div>
      </div>
    </div>
</footer>


  )
}