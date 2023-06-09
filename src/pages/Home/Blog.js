import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <section class="bg-white dark:bg-transparent">
        <div class="container px-6 py-10 mx-auto">
          <div class="text-center">
            <h1 class="text-2xl font-bold text-gray-800 capitalize lg:text-3xl dark:text-gray-900">
              Medicare updates
            </h1>

            <p class="max-w-lg mx-auto mt-4 text-gray-500">
              Read our latest news from the company or general medical news.
              Feel free to ask questions in comments for any news you find
              interesting.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
            <div>
              <img
                class="relative z-10 object-cover w-full rounded-md h-96"
                src="https://images.unsplash.com/photo-1644018335954-ab54c83e007f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                <Link
                  to="#"
                  class="font-semibold text-gray-800 hover:underline dark:text-gray-900 md:text-xl"
                >
                  All the features you want to know
                </Link>

                <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  veritatis sint autem nesciunt, laudantium quia tempore delect
                </p>

                <p class="mt-3 text-sm text-blue-500">21 October 2019</p>
              </div>
            </div>

            <div>
              <img
                class="relative z-10 object-cover w-full rounded-md h-96"
                src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                <Link
                  to="#"
                  class="font-semibold text-gray-800 hover:underline dark:text-gray-900 md:text-xl"
                >
                  How to use sticky note for problem solving
                </Link>

                <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  veritatis sint autem nesciunt, laudantium quia tempore delect
                </p>

                <p class="mt-3 text-sm text-blue-500">20 October 2019</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
