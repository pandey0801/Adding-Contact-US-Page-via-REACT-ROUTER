import React, { useContext } from 'react'
import CartItem from './CartItem'
import { Context } from '../store/Context';

export default function CartMain({closeCart}) 
{

  const {cartItem, totalItem} = useContext(Context);

const cartElements = [

    {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
    name: 'Album1'
    },
    
    {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
    name: 'Album2'
    },
    
    {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
    name: 'Album3'
    }
    
    ];


  return (
    <>
    <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white w-[22rem] h-[25rem] rounded-lg px-3 py-2">
          <div className='flex justify-between'>
          
          <h2 className="text-lg font-bold mb-2">Cart</h2>
          <button className="top-2 right-2 text-gray-500 border rounded-sm border-gray-800 px-2" onClick={closeCart} >Close</button>
          </div>

          <div>
          <section className='flex justify-center'>
        <table class="border-collapse border-b border-slate-500">
        <thead>
        <tr className='flex justify-evenly w-[20rem]'>
            <th className="border-b border-slate-700 text-base ">ITEM</th>
            <th className="border-b border-slate-700 text-base ">PRICE</th>
            <th className="border-b border-slate-700 text-base ">QUANTITY</th>
        </tr>
        </thead>

        <tbody>
                  {cartItem.map((item, index) => (
                    <CartItem key={index} item={item} />
                  ))}
        </tbody>
        
        {/* <CartItem/> */}

        {/* <tbody>
    <tr>

      <td className="border-b border-slate-700 text-xl px-6">item 1</td>
      <td className="border-b border-slate-700 text-xl px-6">70</td>
      <td className=" border-slate-700 text-xl px-6 flex justify-between">
      <button  className='bg-green-600 text-white font-semibold  rounded border-2 border-blue-400 m-2 px-1'>1</button>
        <button  className='bg-red-500 text-white font-semibold  rounded border-2 border-blue-400  m-2 px-1'>Remove</button>
      </td>
      
    </tr>
    </tbody> */}
          </table>
          </section>
            </div>


          {/* Your cart items here */}
          {/* Example item */}
          {/* <div className="flex items-center mb-2">
            <img src="example.jpg" alt="Item" className="w-10 h-10 mr-2" />
            <div>
              <p className="text-sm">Item Name</p>
              <p className="text-sm text-gray-500">$10</p>
              <p className="text-sm text-gray-500">Quantity: 1</p>
            </div>
          </div> */}
          {/* End of example item */}


          <div className='flex justify-end'>
            <h1 className='text-xl'>total{totalItem}</h1>
          </div>

          <div className='flex justify-center '>
            <button className='h-[2rem] bg-cyan-300 text-white font-semibold px-4 rounded border-2 border-blue-400  '>purchase</button>
            </div>
        </div>
      </div>
      </>
  );
}
