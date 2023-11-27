import React from 'react'
import { Button, Card } from '@mui/material'

const MenuItemCard = ({item}) => {
    const handleAddItemToCart=()=>{
        console.log("handle add item to cart")
    }
  return (
    <Card className='p-5 lg:flex items-center justify-between box '>
        <div className='lg:flex items-center lg:space-x-5'>
                <img className = "w-[7rem] h-[7rem] object-cover" 
                src="https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="" />

                <div className='space-y-1 lg:space-x-5 lg:max-w-2xl'>
                        <p className='font-semibold text-xl'>{`Pizza`}</p>
                        <p>₹{399}</p>
                        <p className='text-gray-400'>{`Rice, Sambar, Papad`}</p>
                </div>     
        </div>
        <div>
            <Button onClick={handleAddItemToCart}>Add To Cart</Button>
        </div>

    </Card>
  )
}

export default MenuItemCard