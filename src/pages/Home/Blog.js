import React from "react";
import { Link } from "react-router-dom";
import blog1 from "../../assets/images/blog1.png";
import blog2 from "../../assets/images/blog2.png";
import blog3 from "../../assets/images/blog3.png";

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
                src={blog1}
                alt=""
              />

              <div class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                <Link
                  to="/"
                  class="font-semibold text-gray-800 hover:underline dark:text-gray-100 md:text-xl"
                >
                  Examination for kids
                </Link>

                <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  Interactively procrastinate high-payoff content without
                  backward-compatible data. Quickly cultivate optimal processes
                  and tactical architectures.
                </p>

                <p class="mt-3 text-sm text-blue-500">21 October 2022</p>
              </div>
            </div>

            <div>
              <img
                class="relative z-10 object-cover w-full rounded-md h-96"
                src={blog2}
                alt=""
              />

              <div class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                <Link
                  to="#"
                  class="font-semibold text-gray-800 hover:underline dark:text-gray-100 md:text-xl"
                >
                  Special offers for clients
                </Link>

                <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  Globally incubate standards compliant channels before scalable
                  benefits. Quickly disseminate superior deliverables whereas
                  web-enabled applications.
                </p>

                <p class="mt-3 text-sm text-blue-500">20 October 2021</p>
              </div>
            </div>
            <div>
              <img
                class="relative z-10 object-cover w-full rounded-md h-96"
                src={blog3}
                alt=""
              />

              <div class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                <Link
                  to="#"
                  class="font-semibold text-gray-800 hover:underline dark:text-gray-100 md:text-xl"
                >
                  New services available
                </Link>

                <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  Credibly reintermediate backend ideas for cross-platform
                  models. Continually reintermediate integrated processes
                  through technically sound intellectual capital.
                </p>

                <p class="mt-3 text-sm text-blue-500">24 May 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
