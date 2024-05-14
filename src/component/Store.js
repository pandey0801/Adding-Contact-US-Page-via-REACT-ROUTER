import React, { useContext } from 'react'
// import Album1 from './image/Album 1.png';
import Album2 from '../image/Album 2.png';
import Album3 from '../image/Album 3.png';
import Album4 from '../image/Album 4.png';
import Album1 from '../image/Album 1.png';
import { Context } from '../store/Context';




function Store() {

  const {item, addCart, total } = useContext(Context);

  const handleAddToCart = (itemName, itemPrice) => {
    addCart(itemName, itemPrice); // Call the addCart function to add item to the cart
    // total(itemPrice); // Call the total function to update the total price
    // total();
  };

  return (
    <>
     
        <div className="bg-slate-400 h-[12rem] flex justify-center items-center">
          <h1 className='text-6xl text-white font-serif font-bold'>The Generics</h1>
        </div>

        <div className='bg-white h-[5rem] flex justify-center items-center'>
          <h1 className='text-2xl'>Music</h1>
        </div>

        
        <div class="columns-2 flex justify-center">

          <div className='text-center text-xl font-bold'> 
          <h1>Album 1 </h1>
           <img className='p-10' src={Album1} alt="Album 1" />
           <div className="flex justify-between items-center m-8">
            <h1>$12.99</h1>
            <button className='bg-blue-400 text-white px-2 rounded border-2 border-blue-600' onClick={() => handleAddToCart("album1", 12.99)} >Add To Cart</button>
            </div>
           </div>
           


           <div className='text-center text-xl font-bold'>  
            <h2> Album2</h2>
           <img className='p-10'  src={Album2} alt="Album 2" />
           <div className="flex justify-between items-center m-8">
            <h1>$14.99</h1>
            <button className='bg-blue-400 text-white px-2 rounded border-2 border-blue-600' onClick={()=>addCart("album2",14.99)}>Add To Cart</button>
            </div>
           </div>

        </div>

        <div class="columns-2 flex justify-center">

          <div className='text-center text-xl font-bold'> 
          <h1>Album 3 </h1>
           <img className='p-10' src={Album3} alt="Album 1" />
           <div className="flex justify-between items-center m-8">
            <h1>$9.99</h1>
            <button className='bg-blue-400 text-white px-2 rounded border-2 border-blue-600' onClick={()=>addCart('album3',9.99)}>Add To Cart</button>
            </div>
           </div>
           


           <div className='text-center text-xl font-bold'>  
            <h2> Album 4</h2>
           <img className='p-10'  src={Album4} alt="Album 2" />
           <div className="flex justify-between items-center m-8">
            <h1>$19.99</h1>
            <button className='bg-blue-400 text-white px-2 rounded border-2 border-blue-600 'onClick={()=>addCart("album4",19.99)}>Add To Cart</button>
            </div>
           </div>

        </div>


        <div className='flex justify-center items-center h-[10rem]'>
          <button className='bg-slate-500 text-white px-2 py-4 rounded border-2 border-blue-600'>see the card</button>
        </div>

        <div className='bg-cyan-300 h-[8rem] text-white py-4 px-5'>
        <h2 className='text-2xl font-semibold'>The Generics</h2>
        </div>
        


    </>
  )
}
export default Store;
