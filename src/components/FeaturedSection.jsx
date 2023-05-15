import React from 'react'
import { Features } from '../data'
import { Link } from 'react-router-dom'

const FeaturedSection = () => {
  return (
    <React.Fragment>
      <div className="relative isolate p-4 px-6 py-10 lg:px-16 w-full bg-gray-300">
            <div className='mb-6 flex flex-col items-center justify-center'>
              <h2 className='mb-4 text-3xl font-bold text-cyan-500 hover:underline'>Our Featured Services</h2>
              <p className='text-xl font-medium text-gray-500'>Enjoy convenience with our improved digital products.</p>
            </div>
          <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4'>
              {
                Features.map( (feature) => {
                  return (
                    <div
                      key={feature.id}
                      className="group ml-8 rounded-xl hover:-translate-y-1 hover:scale-110 
                      duration-700 transition ease-in-out block items-center justify-center 
                      max-w-sm p-6 bg-white hover:border hover:border-gray-500 
                      hover:rounded-lg hover:shadow-xl dark:hover:bg-cyan-50 dark:bg-transparent
                       dark:hover:border-cyan-500"
                    >
                      <span className="  w-16 h-16 mb-2 rounded-xl group-hover:dark:bg-cyan-500 flex items-center justify-center transition ease-in-out duration-700">
                        {feature.icon}
                      </span>
                      <Link to={feature.path}>
                        <h5 className="mb-2 text-2xl group-hover:text-blue-700 text-cyan-500 font-semibold transition ease-in-out duration-700">
                          {feature.title}
                        </h5>
                      </Link>
                      <p className="mb-3 font-normal text-gray-400 text-lg flex items-center justify-center">
                        {feature.info}
                      </p>
                    </div>
                  );
                })
              }
          </div>
      </div>
    </React.Fragment>
  )
}

export default FeaturedSection
