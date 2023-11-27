import React from 'react'
import {Card} from '@mui/material'
import {Button} from '@mui/material'

const OrderCard = ({item}) => {
  return (
    <Card className='flex justify-between item-center p-5'>
        <div className='flex items-center space-x-5'>
            <img className='h-16 w-16' src="https://images.pexels.com/photos/17910326/pexels-photo-17910326/free-photo-of-a-dish-with-rice-and-vegetables.jpeg?auto=compress&cs=tinysrgb&w=600"
             alt="" />

             <div>
                <p>Rice Meals</p>
                <p className='text-gray-400 '>₹399</p>
             </div>

        </div>

        <div>
            <Button variant='contained'>
                Track
            </Button>
        </div>

    </Card>
  )
}

export default OrderCard