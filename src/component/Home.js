import React, { useContext } from 'react'
import { Context } from '../store/Context'
 function Home() {

  const ctx = useContext(Context);
  console.log(ctx)

  return (
    <>
    
      {/* <h1 className="text-8xl text-center text-white font-bold font-serif">The Generics Home Page</h1> */}
      <div className="bg-slate-400 h-[25rem]">
        <h1 className='text-8xl text-center text-white font-bold font-serif'>The Generics</h1>

        <div className="flex justify-center ">
      <button className=" hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded border-2 border-blue-400 m-16">
      Get Our laters album
      </button>
      </div>
      </div>

      <div className='flex justify-center bg-white'>
        <h1 className='text-3xl font-bold'>TOURS</h1>
        </div>

        <section className='flex justify-center h-[25rem] items-center'>
        <table class="border-collapse border-b border-slate-500">
  <tbody>
    <tr>
      <td className="border-b border-slate-700 text-2xl px-9">JUL16</td>
      <td className="border-b border-slate-700 text-2xl px-9">DETROIT</td>
      <td className="border-b border-slate-700 text-2xl px-9">MI DTE ENERGY MUSIC THEATRE</td>
      <td className="border-b border-slate-700 text-2xl px-9">
        <button  className='bg-cyan-300 text-white font-semibold px-4 rounded border-2 border-blue-400 m-1.5 '>Buy</button>
      </td>
      
    </tr>
    <tr>
      <td className="border-b border-slate-700 text-2xl px-9">JUL19</td>
      <td className="border-b border-slate-700 text-2xl px-9">TORONTO</td>
      <td className="border-b border-slate-700 text-2xl px-9">ON BUDWEISER STAGE</td>
      <td className="border-b border-slate-700 text-2xl px-9">
      <button  className='bg-cyan-300 text-white font-semibold px-4 rounded border-2 border-blue-400 m-1.5 '>Buy</button>
      </td>
    </tr>
    <tr>
    <td className="border-b border-slate-700 text-2xl px-9">JUL 22</td>
      <td className="border-b border-slate-700 text-2xl px-9">BRISTOW</td>
      <td className="border-b border-slate-700 text-2xl px-9">VA JIGGY LUBE LIVE</td>
      <td className="border-b border-slate-700 text-2xl px-9">
      <button  className='bg-cyan-300 text-white font-semibold px-4 rounded border-2 border-blue-400 m-1.5 '>Buy</button>
      </td>
    </tr>
    <tr>
    <td className="border-b border-slate-700 text-2xl px-9">JUL 29</td>
      <td className="border-b border-slate-700 text-2xl px-9">PHOENIX</td>
      <td className="border-b border-slate-700 text-2xl px-9">AZ AK-CHIN PAVILION</td>
      <td className="border-b border-slate-700 text-2xl px-9">
      <button  className='bg-cyan-300 text-white font-semibold px-4 rounded border-2 border-blue-400 m-1.5 '>Buy</button>
      </td>
    </tr>
    <tr>
    <td className="border-b border-slate-700 text-2xl px-9">AUG 2</td>
      <td className="border-b border-slate-700 text-2xl px-9">LAS VEGAS</td>
      <td className="border-b border-slate-700 text-2xl px-9">NV T-MOBILE ARENA</td>
      <td className="border-b border-slate-700 text-2xl px-9">
      <button  className='bg-cyan-300 text-white font-semibold px-4 rounded border-2 border-blue-400 m-1.5 '>Buy</button>
      </td>
    </tr>
    <tr>
    <td className="border-b border-slate-700 text-2xl px-9">AUG 7</td>
      <td className="border-b border-slate-700 text-2xl px-9">CONCORD</td>
      <td className="border-b border-slate-700 text-2xl px-9">CA CONCORD PAVILION</td>
      <td className="border-b border-slate-700 text-2xl px-9">
      <button  className='bg-cyan-300 text-white font-semibold px-4 rounded border-2 border-blue-400 m-1.5 '>Buy</button>
      </td>
    </tr>
  </tbody>
</table>
</section>

<div className='bg-cyan-300 h-[8rem] text-white py-4 px-5'>
<h2 className='text-2xl font-semibold'>The Generics</h2>
</div>

    
    </>
  )
}
export default Home
