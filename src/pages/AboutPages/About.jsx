import React from 'react'
import { Directors, Executives, aboutInfo } from '../../data';

const About = () => {
  return (
    <React.Fragment>
      <article className="relative w-full right-0 inset-y-0 h-auto overflow-hidden transition ease-in duration-700">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center py-4">
          <div className="mx-auto max-w-7xl rounded-lg bg-gray-700 py-6 px-4 lg:mx-0 text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-gray-100 sm:text-6xl dark:text-cyan-500">
              About Us
            </h1>
            <p className="ml-3 text-gray-300 mt-6 text-lg leading-8">
              Microfinance Ltd (MDI) is a Microfinance Deposit- taking
              institution regulated and supervised by Central Bank of Kenya (CBK) under
              the MDI Act, 2003 and MDI Regulations, 2004. From inception, MicroFinance
              has grown to become the leading MDI in Kenya, providing
              innovative financial solutions to the economically vulnerable
              people. Pride serves its customers through 33 networked branches
              spread across the country and 11 contact offices
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-7xl lg:mx-0 lg:max-w-none rounded-lg shadow-sm dark:bg-gray-700">
            <div className="grid text-base font-semibold
             leading-7 text-gray-100 sm:grid-cols-2 max-md:grid-cols-1">
                {
                  aboutInfo.map( (link, index) => (
                      <div key={index}className="flex p-8">
                        <div className='mr-4'>
                          <span className='h-12 w-12 dark:bg-gray-900 rounded-full flex items-center justify-center '>{link.icon}</span>
                        </div>
                        <div className="mx-auto block max-w-2xl">
                          <h2 className="text-xl tracking-tight font-semibold text-gray-900 dark:text-cyan-500">{link.title}</h2>
                          <p className="my-4 text-gray-400">{link.desc}</p>
                        </div>
                      </div>
                  ))
                }
            </div>
          </div>

          <div className="mx-auto w-full py-4 px-6 lg:px-8 mt-10 max-w-7xl lg:mx-0 lg:max-w-none rounded-lg shadow-md dark:bg-gray-700">
              <div className="text-center">
                <h1 className='text-4xl font-semibold tracking-tight text-gray-100 sm:text-6xl dark:text-cyan-500'>Our Team</h1>
              </div>
              <div className="text-center w-auto text-3xl my-4 py-1 font-semibold rounded-xl dark:bg-cyan-600 dark:shadow-slate-700 shadow-2xl">
                Board of Directors
              </div>
              <div className='grid leading-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 space-y-4'>
                  {
                    Directors.map( (director, index) => (
                      <div key={index} className="flex items-center space-x-6 py-8 px-8 rounded-xl dark:transparent shadow-2xl

                      space-y-2">
                          <img src={director.img} alt={director.name} className='block max-auto h-24 w-24 shadow-2xl rounded-full sm:mx-0 sm:shrink-0' />
                          <div className=" space-y-2 m-4">
                            <div className="space-y-0 5">
                              <h5 className="text-lg font-medium leading-7 tracking-wide
                              text-cyan-100 dark:text-cyan-300">{director.name}</h5>
                              <span className="text-sm text-slate-500 font-medium dark:text-gray-400">{director.occupation}</span>
                            </div>
                          </div>
                      </div>
                    ))
                  }
              </div>
          </div>

          <div className="mx-auto w-full py-4 px-6 lg:px-8 mt-10 max-w-7xl lg:mx-0 lg:max-w-none rounded-lg shadow-md dark:bg-gray-700">
              <div className="text-center w-auto text-3xl my-4 py-1 font-semibold rounded-xl dark:bg-cyan-600 dark:shadow-slate-700 shadow-2xl">
                Executive Committee
              </div>
              <div className='grid leading-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 space-y-4'>
                  {
                    Executives.map( (executive, index) => (
                      <div key={index} className="flex items-center space-x-6 py-8 px-8 rounded-xl dark:transparent shadow-2xl

                      space-y-2">
                          <img src={executive.img} alt={executive.name} className='block max-auto h-24 w-24 shadow-lg rounded-full sm:mx-0 sm:shrink-0' />
                          <div className=" space-y-2 m-4">
                            <div className="space-y-0 5">
                              <h5 className="text-lg font-medium leading-7 tracking-wide
                              text-cyan-100 dark:text-cyan-300">{executive.name}</h5>
                              <span className="text-xs text-slate-500 font-medium dark:text-gray-400">{executive.occupation}</span>
                            </div>
                          </div>
                      </div>
                    ))
                  }
              </div>
          </div>


        </div>
      </article>
    </React.Fragment>
  );
}

export default About
