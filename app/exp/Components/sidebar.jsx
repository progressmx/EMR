import React from 'react'
import {BsGraphUpArrow} from "react-icons/bs"
import { NavLink } from '@remix-run/react'
import {FiUsers} from "react-icons/fi"
import {FaUsersCog} from "react-icons/fa"
import {AiOutlineHome,AiOutlineCalendar,AiOutlinePieChart} from "react-icons/ai"
import { Typography } from '@material-tailwind/react'

const data = [
    {
        name:"Dashboard",
        link:"./",
        icon:AiOutlineHome
    },
    {
        name:"Patients",
        link:"/new_patient",
        icon:FiUsers
    },
    {
        name:"Appointments",
        link:"#",
        icon:AiOutlineCalendar
    },
    {
        name:"Reports",
        link:"#",
        icon:AiOutlinePieChart
    },
    {
        name:"Users",
        link:"#",
        icon:FaUsersCog
    },
]

export default function SideBar() {
  return (
    <div className='md:absolute top-0 bg-[#00091A] w-[20%] h-[100vh] p-2'>
        <div className='mb-8 p-4 border-b-[1px] border-gray-700'>
            <Typography variant="h3" className='text-white'>
                Octaven
            </Typography>
        </div>
        {
            data.map((links)=>(
                <ul>
                    <li className='flex mb-2 p-2 text-white hover:bg-gray-500 rounded hover:text-black'>
                        <links.icon className='w-5 h-5 mr-2' />
                        <NavLink to={links.link}>{links.name}</NavLink>
                    </li>
                </ul>
            ))
        }
    </div>
  )
}
