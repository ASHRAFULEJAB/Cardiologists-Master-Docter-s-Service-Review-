import React from 'react'
import { Link } from 'react-router-dom'
import useTitle from '../../hooks/useTitle'

const Blog = () => {
  useTitle('Blog')
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full'>
        <div className='flex'>
          <div className='pt-1 mr-6 text-center'>
            <div className='px-2 pb-1 mb-1 border-b border-gray-400'>
              <p className='text-sm text-blue-gray-700'>Oct</p>
            </div>
            <div className='px-2'>
              <p className='text-lg font-bold'>18</p>
            </div>
          </div>
          <div>
            <div className='mb-2'>
              <Link
                to='/blog'
                className='text-xs font-semibold tracking-wide uppercase transition-colors duration-200 text-purple-400 hover:text-purple-800'
                aria-label='Category'
                title='Delevopment'
              >
                Delevopment
              </Link>
            </div>
            <div className='mb-2'>
              <Link
                to='/blog'
                aria-label='Article'
                className='inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-purple-400'
              >
                Difference between SQL and NoSQL
              </Link>
            </div>
            <p className='mb-5 text-gray-700'>
              SQL is the programming language used to interface with relational
              databases. (Relational databases model data as records in rows and
              tables with logical links between them). NoSQL is a class of DBMs
              that are non-relational and generally do not use SQLSQL pronounced
              as “S-Q-L” or as “See-Quel” is primarily called RDBMS or
              Relational Databases, whereas NoSQL is a Non-relational or
              Distributed Database. Comparing SQL vs NoSQL databases, SQL
              databases are table-based databases.
            </p>
            <div className='flex items-center'>
              <Link
                to='/blog'
                aria-label='Author'
                title='Author'
                className='mr-3'
              >
                <img
                  src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
                  alt='avatar'
                  className='object-cover w-10 h-10 rounded-full shadow-sm'
                />
              </Link>
              <div>
                <Link
                  to='/blog'
                  aria-label='Author'
                  title='Author'
                  className='font-semibold text-gray-800 transition-colors duration-200 hover:text-purple-400'
                >
                  Ashraful
                </Link>
                <p className='text-sm font-medium leading-4 text-gray-600'>
                  Author
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex'>
          <div className='pt-1 mr-6 text-center'>
            <div className='px-2 pb-1 mb-1 border-b border-gray-400'>
              <p className='text-sm text-blue-gray-700'>Oct</p>
            </div>
            <div className='px-2'>
              <p className='text-lg font-bold'>26</p>
            </div>
          </div>
          <div>
            <div className='mb-2'>
              <Link
                to='/blog'
                className='text-xs font-semibold tracking-wide uppercase transition-colors duration-200 text-purple-400 hover:text-purple-800'
                aria-label='Category'
                title='Food &amp; Snacks'
              >
                Backend &amp; Server
              </Link>
            </div>
            <div className='mb-2'>
              <Link
                to='/blog'
                aria-label='Article'
                className='inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-purple-400'
              >
                What is JWT, and how does it work?
              </Link>
            </div>
            <p className='mb-5 text-gray-700'>
              What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open
              standard (RFC 7519) for securely transmitting information between
              parties as JSON object. It is compact, readable and digitally
              signed using a private key/ or a public key pair by the Identity
              Provider(IdP).It from other web tokens in that they contain a set
              of claims. Claims are used to transmit information between two
              parties. separated by dots (.), and serialized using base64. In ,
              the JWT looks something like this: xxxxx.yyyyy.zzzzz.
            </p>
            <div className='flex items-center'>
              <Link
                to='/blog'
                aria-label='Author'
                title='Author'
                className='mr-3'
              >
                <img
                  src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
                  alt='avatar'
                  className='object-cover w-10 h-10 rounded-full shadow-sm'
                />
              </Link>
              <div>
                <Link
                  to='/blog'
                  aria-label='Author'
                  title='Author'
                  className='font-semibold text-gray-800 transition-colors duration-200 hover:text-purple-400'
                >
                  Ejab
                </Link>
                <p className='text-sm font-medium leading-4 text-gray-600'>
                  Author
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex'>
          <div className='pt-1 mr-6 text-center'>
            <div className='px-2 pb-1 mb-1 border-b border-gray-400'>
              <p className='text-sm text-blue-gray-700'>Oct</p>
            </div>
            <div className='px-2'>
              <p className='text-lg font-bold'>31</p>
            </div>
          </div>
          <div>
            <div className='mb-2'>
              <Link
                to='/blog'
                className='text-xs font-semibold tracking-wide uppercase transition-colors duration-200 text-purple-400 hover:text-purple-800'
                aria-label='Category'
                title='Out of this world'
              >
                Technology
              </Link>
            </div>
            <div className='mb-2'>
              <Link
                to='/blog'
                aria-label='Article'
                className='inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-purple-400'
              >
                What is the difference between javascript and NodeJS?
              </Link>
            </div>
            <p className='mb-5 text-gray-700'>
              JavaScript is a simple programming language that can be used with
              any browser that has the JavaScript Engine installed. Node. js, on
              the other hand, is an interpreter or execution environment for the
              JavaScript programming language.JavaScript is a proper high-level
              programming language used to create web scripts whereas Node.js is
              a run time environment built on google’s v8 engine. JavaScript is
              executed in the browser whereas using Node.js gives us the ability
              to execute JavaScript outside the browser.
            </p>
            <div className='flex items-center'>
              <Link
                to='/blog'
                aria-label='Author'
                title='Author'
                className='mr-3'
              >
                <img
                  src='https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260'
                  alt='avatar'
                  className='object-cover w-10 h-10 rounded-full shadow-sm'
                />
              </Link>
              <div>
                <Link
                  to='/blog'
                  aria-label='Author'
                  title='Author'
                  className='font-semibold text-gray-800 transition-colors duration-200 hover:text-purple-400'
                >
                  Kit Korner
                </Link>
                <p className='text-sm font-medium leading-4 text-gray-600'>
                  Author
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex'>
          <div className='pt-1 mr-6 text-center'>
            <div className='px-2 pb-1 mb-1 border-b border-gray-400'>
              <p className='text-sm text-blue-gray-700'>Nov</p>
            </div>
            <div className='px-2'>
              <p className='text-lg font-bold'>08</p>
            </div>
          </div>
          <div>
            <div className='mb-2'>
              <Link
                to='/blog'
                className='text-xs font-semibold tracking-wide uppercase transition-colors duration-200 text-purple-400 hover:text-purple-800'
                aria-label='Category'
                title='Out of this world'
              >
                Technology
              </Link>
            </div>
            <div className='mb-2'>
              <Link
                to='/blog'
                aria-label='Article'
                className='inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-purple-400'
              >
                How does NodeJS handle multiple requests at the same time?
              </Link>
            </div>
            <p className='mb-5 text-gray-700'>
              NodeJS receives multiple client requests and places them into
              EventQueue. NodeJS is built with the concept of event-driven
              architecture. NodeJS has its own EventLoop which is an infinite
              loop that receives requests and processes them.EventLoop is the
              listener for the EventQueue. If NodeJS can process the request
              without I/O blocking then the event loop would itself process the
              request and sends the response back to the client by itself. But,
              it is possible to process multiple requests parallelly using the
              NodeJS cluster module or worker_threads module.
            </p>
            <div className='flex items-center'>
              <Link
                to='/blog'
                aria-label='Author'
                title='Author'
                className='mr-3'
              >
                <img
                  src='https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260'
                  alt='avatar'
                  className='object-cover w-10 h-10 rounded-full shadow-sm'
                />
              </Link>
              <div>
                <Link
                  to='/blog'
                  aria-label='Author'
                  title='Author'
                  className='font-semibold text-gray-800 transition-colors duration-200 hover:text-purple-400'
                >
                  Ashik
                </Link>
                <p className='text-sm font-medium leading-4 text-gray-600'>
                  Author
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
