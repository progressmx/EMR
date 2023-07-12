import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { CheckIcon } from "@heroicons/react/24/outline";

const pricing = [
    {
        name: "Basic", 
        price:"10"
    },
    {
        name: "Standard", 
        price:"20"
    },
    {
        name: "Premium", 
        price:"30"
    }
]

function Pricing() {
  return (
    <div id='pricing' className='grid grid-rows-auto min-h-[100vh]  p-4'>
        <div className='text-white m-6 mx-auto text-center mb-8'>
            <Typography  variant="h1" color="White" className="text-bold text-3xl">
                Pricing plans for teams of all sizes
            </Typography>
            <span className="text-bold text-[18px] w-full md:w-2/4 ">
                Choose an affordable plan that’s packed with the best features for engaging your audience, 
                creating customer loyalty, and driving sales.
            </span>

        </div>
        <div className='grid grid-cols-1 mx-auto gap-6 md:grid-cols-2 lg:grid-cols-3'>

            {
                pricing.map((price)=>(
                    <Card color="blue" variant="gradient" className="w-full max-w-[20rem] p-8">
                        <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
                        >
                            <Typography
                            variant="small"
                            color="white"
                            className="font-normal uppercase"
                            >
                            {price.name}
                            </Typography>
                            <Typography
                            variant="h1"
                            color="white"
                            className="mt-6 flex justify-center gap-1 text-7xl font-normal"
                            >
                            <span className="mt-2 text-4xl">$</span>{price.price}{" "}
                            <span className="self-end text-4xl">/mo</span>
                            </Typography>
                        </CardHeader>
                        <CardBody className="p-0">
                            <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <CheckIcon strokeWidth={2} className="h-3 w-3" />
                                </span>
                                <Typography className="font-normal">5 team members</Typography>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <CheckIcon strokeWidth={2} className="h-3 w-3" />
                                </span>
                                <Typography className="font-normal">200+ components</Typography>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <CheckIcon strokeWidth={2} className="h-3 w-3" />
                                </span>
                                <Typography className="font-normal">40+ built-in pages</Typography>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <CheckIcon strokeWidth={2} className="h-3 w-3" />
                                </span>
                                <Typography className="font-normal">1 year free updates</Typography>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <CheckIcon strokeWidth={2} className="h-3 w-3" />
                                </span>
                                <Typography className="font-normal">Life time technical support</Typography>
                            </li>
                            </ul>
                        </CardBody>
                        <CardFooter className="mt-12 p-0">
                            <Button
                            size="lg"
                            color="white"
                            className="text-blue-500 hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                            ripple={false}
                            fullWidth={true}
                            >
                            Buy Now
                            </Button>
                        </CardFooter>
                    </Card>

                ))

            }
            
        </div>
       
    </div>

    
  )
}

export default Pricing
