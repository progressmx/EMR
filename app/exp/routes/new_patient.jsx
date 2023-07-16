import { Typography,Button,Dialog} from '@material-tailwind/react'
import { useState } from 'react'
import {useLoaderData } from '@remix-run/react'
import NewPatient from '~/Components/newpatient'
import { BsFillPersonPlusFill} from 'react-icons/bs'
import Table from '~/Components/table'
import { getStoredData } from '~/data/notes'
import { storeData } from '~/data/notes'
import { redirect } from '@remix-run/node'

export default function patient() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const patients = useLoaderData()

    console.log("hello world" + patients);

  return (
    <div className="relative top-20 left-[20%] h-auto w-[80%] p-8 flex flex-col">
        <div className='flex flex-row'>
            <div className='w-2/4 flex flex-col'>
                <Typography varient="h3" className="text-gray-900 text-bold text-2xl">
                    My patients
                </Typography>
                <Typography varient="lead" className="text-gray-900 opacity-80">
                   List of all the patients you captured
                </Typography>
            </div>
            <div className='flex justify-end w-2/4'>
                <button onClick={handleOpen} className='flex flex-row bg-blue-800 gap-2 justify-center place-items-center h-8 p-4 w-[30%] rounded text-white'>
                    Add New <BsFillPersonPlusFill/>
                </button>
            </div>
        </div>
        <div>
            <Table patients={patients} ></Table>
        </div>
        <Dialog open={open} handler={handleOpen} className='overflow-y-scroll'>
            <NewPatient></NewPatient>
        </Dialog>
    </div>
  )
}
export async function loader()
{
    const patients = await getStoredData();
    return patients
}

export async function action({request})
{
    const Formdata = await request.formData();
    const patientdata = Object.fromEntries(Formdata);

    // if(patientdata.reason.trim().length < 1)
    // {
    //     console.log(patientdata.reason)
    //     return{message : "reason for visit must not be empty"}
    // }
    const existingPatientData = await getStoredData();
    patientdata.id = new Date().toISOString();
    const updatedData = existingPatientData.concat(patientdata);
    await storeData(updatedData)

    return redirect("/new_patient")
}