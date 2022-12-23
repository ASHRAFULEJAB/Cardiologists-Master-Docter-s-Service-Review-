import React, { useContext } from 'react'
import { DoctorsContext } from '../../Context/DoctorsContext/DoctorsProvider'


import useTitle from '../../hooks/useTitle'

const AddService = () => {
  
  const { loader } = useContext(DoctorsContext)
  useTitle('Add Service')

  const handleAddService = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const price = form.price.value
    const image = form.image.value
    const description = form.description.value

    const service = {
      // service: _id,
      title: name,
      img: image,
      price: price,
      description: description,
    }
    fetch('https://cardiologists-master-server.vercel.app/services-home', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
  }
  if (loader) {
    return (
      <div
        className='w-16 h-16 my-5 mx-auto border-4 border-dashed rounded-full animate-spin dark:border-violet-400'
        bis_skin_checked='1'
      ></div>
    )
  }

  return (
    <section className='p-6 dark:bg-gray-100 dark:text-gray-50'>
      <fieldset className='grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900'>
        <div
          className='space-y-2 col-span-full lg:col-span-1'
          bis_skin_checked='1'
        >
          <p className='font-medium'>Add A service</p>
          <p className='text-xs'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
            fuga autem eum!
          </p>
        </div>
        <form
          onSubmit={handleAddService}
          action=''
          className='container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid'
        >
          <div
            className='grid grid-cols-6 gap-4 col-span-full lg:col-span-3'
            bis_skin_checked='1'
          >
            <div className='col-span-full sm:col-span-3' bis_skin_checked='1'>
              <label htmlFor='firstname' className='text-sm'>
                Service name
              </label>
              <input
                id='firstname'
                type='text'
                name='name'
                placeholder='ENter your service name'
                className='w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 py-3 px-40'
              />
            </div>
            <div className='col-span-full sm:col-span-3 lg:ml-60' bis_skin_checked='1'>
              <label htmlFor='lastname' className='text-sm'>
                Price
              </label>
              <input
                id='lastname'
                name='price'
                type='text'
                placeholder='Enter Your Price'
                className='w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 py-3 px-40'
              />
            </div>
            <div className='col-span-full sm:col-span-3' bis_skin_checked='1'>
              <label htmlFor='email' className='text-sm'>
                Image
              </label>
              <input
                id='email'
                type='text'
                name='image'
                placeholder='Please add image'
                className='w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 py-3 px-40'
              />
            </div>
            <div className='col-span-full' bis_skin_checked='1'>
              <label htmlFor='address' className='text-sm'>
                Description
              </label>
              <input
                id='address'
                type='text'
                name='description'
                placeholder='Please enter Description'
                className='w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 py-3 px-40 '
              />
            </div>
          </div>
          <button
            className='inline-flex items-center justify-center h-12 px-16 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-800 hover:bg-purple-900 focus:shadow-outline focus:outline-none'
            type='submit'
          >
            Add Service
          </button>
        </form>
      </fieldset>
    </section>
  )
}

export default AddService
