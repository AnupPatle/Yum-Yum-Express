import { Card, Button } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';

const AddressCard = ({handleSelectAddress,item,showButton}) => {

  return (
    <Card className='flex space-x-5 lg:w-64 m-5 p-5'>
        <HomeIcon/>
        <div className='space-y-3 text-gray-500'>
            <h1 className='font-semibold text-lg text-white'>Home</h1>
            <p>
                new shivam building, gokuldham market, 42001, maharashtra, india
            </p>

            {showButton && (
            <Button variant='outlined' 
            fullWidth 
            onClick={()=>handleSelectAddress(item)}>
            select
            </Button>
                )}
        </div>

    </Card>
  )
}

export default AddressCard