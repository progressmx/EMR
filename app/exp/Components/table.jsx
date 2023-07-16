import React from 'react'
import { Card, Typography } from "@material-tailwind/react";
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai"

const TABLE_HEAD = ["Name", "Reason", "Date visited", "",""];
 
const TABLE_ROWS = [
  {
    name: "John Michael",
    reason: "Consultation",
    date: "23/04/18",
  },
  {
    name: "Peter Rabbit",
    reason: "Bill payment",
    date: "23/04/18",
  },
  {
    name: "John Chibadura",
    reason: "Review",
    date: "23/04/18",
  },
  {
    name: "Lil Tunechi",
    reason: "Consultation",
    date: "23/04/18",
  },
];
function Table({patients}){
  return (
    <Card color="transparent" shadow={false} className="h-full w-full rounded-none overflow-x-hidden overscroll-y-aut mt-8">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => {
            const isLast = index === patient.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={patient.date}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {patient.fname + " "+ patient.lname}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {patient.reason}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {patient.date}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue" className="font-medium hover:cursor-pointer">
                    <AiOutlineEdit className='w-5 h-5'></AiOutlineEdit>
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue" className="font-medium hover:cursor-pointer">
                    <AiOutlineDelete className='w-5 h-5 text-red-500'></AiOutlineDelete>
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  )
}

export default Table