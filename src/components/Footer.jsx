import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,    
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <div className='hover:cursor-pointer w-fit'>
                <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
            </div>
          <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nam quas error consequuntur libero repellendus blanditiis sapiente illum, fuga eveniet?</p>
            <div className='flex justify-between md:w-[75%] my-6'>
                <FaFacebookSquare size={30} className='hover:cursor-pointer hover:scale-150 duration-300' />
                <FaInstagram size={30} className='hover:cursor-pointer hover:scale-150 duration-300' />
                <FaTwitterSquare size={30} className='hover:cursor-pointer hover:scale-150 duration-300' />
                <FaGithubSquare size={30} className='hover:cursor-pointer hover:scale-150 duration-300' />
                <FaDribbbleSquare size={30} className='hover:cursor-pointer hover:scale-150 duration-300' />
            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
            <h6 className='font-medium text-white'>Solutions</h6>
            <ul>
                <li className='py-2 text-sm text-gray-400 hover:text-white hover:cursor-pointer'>Analytics</li>
                <li className='py-2 text-sm text-gray-400 hover:text-white hover:cursor-pointer'>Marketing</li>
                <li className='py-2 text-sm text-gray-400 hover:text-white hover:cursor-pointer'>Commerce</li>
                <li className='py-2 text-sm text-gray-400 hover:text-white hover:cursor-pointer'>Insights</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-white'>Support</h6>
            <ul>
                <li className='py-2 text-sm text-gray-400 hover:text-white hover:cursor-pointer'>Pricing</li>
                <li className='py-2 text-sm text-gray-400 hover:text-white hover:cursor-pointer'>Documentation</li>
                <li className='py-2 text-sm text-gray-400 hover:text-white hover:cursor-pointer'>Guides</li>
                <li className='py-2 text-sm text-gray-400 hover:text-white hover:cursor-pointer'>API Status</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-white'>Company</h6>
            <ul>
                <li className='py-2 text-sm text-gray-400 hover:text-white hover:cursor-pointer'>About</li>
                <li className='py-2 text-sm text-gray-400 hover:text-white hover:cursor-pointer'>Blog</li>
                <li className='py-2 text-sm text-gray-400 hover:text-white hover:cursor-pointer'>Jobs</li>
                <li className='py-2 text-sm text-gray-400 hover:text-white hover:cursor-pointer'>Press</li>
                <li className='py-2 text-sm text-gray-400 hover:text-white hover:cursor-pointer'>Careers</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-white'>Legal</h6>
            <ul>
                <li className='py-2 text-sm text-gray-400 hover:text-white hover:cursor-pointer'>Claim</li>
                <li className='py-2 text-sm text-gray-400 hover:text-white hover:cursor-pointer'>Policy</li>
                <li className='py-2 text-sm text-gray-400 hover:text-white hover:cursor-pointer'>Terms</li>               
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Footer