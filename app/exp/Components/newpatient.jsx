import { Form , useNavigation, useActionData} from "@remix-run/react";

import { Card,
    Typography,
    Button,
    Select,
    Option,
    Input} from "@material-tailwind/react";
import { useState } from "react";

const text_fields = [
    {
        name:"fname",
        label:"first name"
    },
    {
        name:"lname",
        label:"last name"
    },
]


const visit_reason = [
    {
        label:"Consultation",
        value:"consult"
    },
    {
        label:"Check-up",
        value:"check"
    },
    {
        label:"Bill payment",
        value:"bill"
    },
]
const payment_method = [
    {
        label:"Cash",
        value:"cash"
    },
    {
        label:"Medical AID",
        value:"MA"
    },
]

export default function NewPatient()
{
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';
    const [selectedReason, setReason] = useState('consult')
    const data = useActionData()

    return(
        <div className="h-full w-full">
            <Card color="transparent" shadow={false} className="flex justify-center place-items-center rounded">
                <Typography variant="h4" color="blue-gray">
                    Create new patient
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Enter patient details.
                </Typography>
                <Form method="post" className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    {data?.message && <p>{data.message}</p>}
                    <div className="mb-[10px] flex flex-col gap-4">
                        {
                            text_fields.map((field)=>(
                                <Input size="md" color="indigo" label={field.label} name={field.name} />
                            ))
                        }
                        <Input type="date" label="date of bith" name="dob" />
                        <Input label="ID / Passport No." name="id_num" />
                        <Input type="phone" label="Phone number" name="phone_number" />
                        <Select label="reason for visit" name="reason" color="indigo" value="consult">
                            {
                                visit_reason.map((reason)=>(
                                    <Option value={reason.name} >
                                        {reason.label}
                                    </Option>
                                ))
                            }
                        </Select>
                        <Select label="payment method" name="payment_method" color="indigo">
                            {
                                payment_method.map((payment)=>(
                                    <Option value={payment.name} >
                                        {payment.label}
                                    </Option>
                                ))
                            }
                        </Select>
                        <Button disabled={isSubmitting} type="submit" className="mt-6" fullWidth>
                           {isSubmitting ? 'Adding...': 'Add Patient'}
                        </Button>
                    </div>
                </Form>
                    
            </Card>
        </div>
       

    );
}