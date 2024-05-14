import React, { useRef } from 'react'

export default function Contact() {

  console.log("wellcome");

const name = useRef("");
const email = useRef("");
const phone = useRef("");

const submitHandler = (event) =>
  {
    event.preventDefault();
    // console.log(name.current.value);
    // console.log(email.current.value);
    // console.log(phone.current.value);

    const contactDeitail = [{
      name:name.current.value,
      email:email.current.value,
      phone:phone.current.value,

    }]

    console.log(contactDeitail);

    async function addData(contactDeitail)
      {
          const response = await fetch('https://react-http-af8d1-default-rtdb.firebaseio.com/contact.json',{
            method:'POST',
            body:JSON.stringify(contactDeitail),
          })

          const data = await response.status
          console.log(data);
      }

      addData(contactDeitail);
  }



  return (
    <>
    
     <form onSubmit={submitHandler}>
      <div className="space-y-12 px-6 py-4">

      <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
              Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  ref={name}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

       
            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  ref={email}
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

   
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                phone number
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  ref={phone}
                  autoComplete="phone"
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>


        
            </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
          </button>
          <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Save
          </button>
          </div>

      </div>
      </form>
    
    </>
  )
}

// https://react-http-af8d1-default-rtdb.firebaseio.com/

