import React from 'react'

function Footer() {
  return (
      <div className=' flex flex-col bg-black text-white  mt-10' >
      
          <div className='flex flex-row justify-center w-[100%] '>

            <div className=' flex flex-col'>
                <p className='p-1  mb-6'>Company</p>
                <p className='p-1'>About</p>
                <p className='p-1'>Blogs</p>
                <p className='p-1'>Press</p>
                <p className='p-1'>Jobs</p>
                <p className='p-1'>Partners</p>
            </div>

              <div className=' flex flex-col'>
                  <p className='p-1  mb-6'>Solutions</p>
                  <p className='p-1'>Marketing</p>
                  <p className='p-1'>Analytics</p>
                  <p className='p-1'>Commerce</p>
                  <p className='p-1'>Insights</p>
                  <p className='p-1'>Support</p>
              </div>

              <div className=' flex flex-col'>
                  <p className='p-1 mb-6'>Documentation</p>
                  <p className='p-1'>Guides</p>
                  <p className='p-1'>Api Status</p>
              </div>

              <div className=' flex flex-col'>
                  <p className='p-1 mb-6'>Legal</p>
                  <p className='p-1'>Claims</p>
                  <p className='p-1'>Privacy</p>
                  <p className='p-1'>Terms</p>
              </div>

        </div>

        <div className='pt-12'>
            <p>c 2023 My Company All. Rights Reserve</p>
            <p>Made with Love By Me</p>
            <p>Icons Made by Freepik from www.freepik.com</p>
        </div>

    </div>
  )
}

export default Footer
