import React from 'react'
import { Link } from 'react-router-dom'
import {blogPosts} from "../../data"
import Scraper from "../../images/Scraper.jpg"

const Blog = () => {
  return (
    <React.Fragment>
      <article className="relative flex items-center justify-center w-full inset-y-0 mx-auto overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 bg-cyan-800 py-6 lg:mx-0">
          <div className="w-full lg:mx-0 flex items-center justify-center flex-col">
            <div className='relative z-40 flex flex-col justify-center items-center p-4 sm:p-10 mx-auto text-center'>
              <h2 className="text-3xl font-bold tracking-tight text-cyan-50 dark:text-cyan-500 
              first-letter:text-cyan-500 leading-10 sm:text-7xl">From the Blog</h2>
              <p className="mt-2 text-xl  leading-8 text-gray-600 dark:text-gray-50">
                Learn how to grow your business with our expert advice.</p>
              <p className=" mt-2 text-xl leading-8 text-gray-600 dark:text-gray-100">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, 
                nihil quis veniam aspernatur amet maxime earum aliquid. Quo, possimus doloribus?</p>

            </div>
              <div className='max-w-7xl w-screen absolute'>
                <img src={ Scraper }alt="Blog-Post" className='w-full h-96 rounded-lg mt-16 blur-sm p-8'/>
              </div>
          </div>

          <div className="mx-auto w-full mt-10 flex flex-col max-w-7xl grid-cols-1
           gap-y-8  pt-10 sm:pt-10 lg:mx-0 lg:max-w-none items-center justify-center">
            {
              blogPosts.map( (post) => (
                <section key={post.id} className="w-full shadow-lg bg-cyan-950 rounded-tr-2xl rounded-bl-2xl group flex max-w-5xl flex-col items-start
                justify-between hover:bg-gray-600 hover:shadow-2xl hover:rounded-tr-2xl hover:rounded-bl-2xl p-8 
                transition ease-in-out duration-500">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-300">{post.date}</time>
                    <Link to={post.category.href} className='relative z-10 rounded-full bg-gray-50 dark:bg-gray-800 px-3 py-1.5 font-medium 
                    text-gray-600 dark:text-cyan-400 hover:bg-gray-950 dark:group-hover:bg-cyan-500 dark:group-hover:text-gray-800'>{post.category.title}</Link>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-gray-950">
                      <Link to={post.href}>
                      <span className='absolute inset-0'/>
                      {post.title}
                      </Link>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400 dark:group-hover:text-gray-100">{post.description}</p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900 dark:text-gray-300 dark:group-hover:text-gray-900">
                        {post.author.name}
                      </p>
                      <div className="text-slate-400 group-hover:text-cyan-100">
                        {post.author.role}
                      </div>
                    </div>
                  </div>
                </section>
              ))
            }
          </div>
        </div>
      </article>
    </React.Fragment>
  )
}

export default Blog
