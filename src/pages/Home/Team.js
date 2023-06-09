import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/doctor2.png";
import img2 from "../../assets/images/doctor3.png";
import img3 from "../../assets/images/doctor4.png";
import img4 from "../../assets/images/doctor5.png";

const Team = () => {
  return (
    <div>
      <section class="bg-white dark:bg-transparent">
        <div class="container px-6 py-10 mx-auto">
          <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-gray-900">
            Meet With <span class="text-blue-500">Exepertise Team</span>
          </h1>

          <p class="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-900"></p>

          <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
            <div
              class="px-12 py-8 transition-colors duration-300 
            transform border cursor-pointer rounded-xl hover:border-transparent group
             hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent"
            >
              <div class="flex flex-col sm:-mx-4 sm:flex-row">
                <img
                  class="flex-shrink-0 object-cover w-48 h-48 rounded-lg sm:mx-4 ring-4 ring-gray-300"
                  src={img1}
                  alt=""
                />

                <div class="mt-4 sm:mx-4 sm:mt-0">
                  <h1 class="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-gray-900 group-hover:text-white">
                    FOUNDER / CHIEF SURGEON
                  </h1>

                  <p class="mt-2 text-gray-500 capitalize dark:text-gray-900 group-hover:text-gray-300">
                    Chase Franklin
                  </p>
                  <p class="mt-4 text-gray-500 capitalize dark:text-gray-900 group-hover:text-gray-300">
                    Podcasting operational change management inside of workflows
                    to establish a framework.
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center 
                justify-center mt-4 h-12 px-8 font-medium tracking-wide
                 text-white transition duration-200 rounded-full shadow-md
                  bg-gradient-to-r from-[#38A1BB] from-14.72% via-[#38A1BB] via-77.9% to-[#604DBC] to-84.87% ...
                  hover:bg-white-100 focus:shadow-outline focus:outline-none"
                    aria-label="Sign up"
                    title="Sign up"
                  >
                    FIND OUT MORE
                  </Link>
                </div>
              </div>
            </div>
            <div
              class="px-12 py-8 transition-colors duration-300 
            transform border cursor-pointer rounded-xl hover:border-transparent group
             hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent"
            >
              <div class="flex flex-col sm:-mx-4 sm:flex-row">
                <img
                  class="flex-shrink-0 object-cover w-48 h-48 rounded-lg sm:mx-4 ring-4 ring-gray-300"
                  src={img2}
                  alt=""
                />

                <div class="mt-4 sm:mx-4 sm:mt-0">
                  <h1 class="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-gray-900 group-hover:text-white">
                    ASSISTANT SURGEON
                  </h1>

                  <p class="mt-2 text-gray-500 capitalize dark:text-gray-900 group-hover:text-gray-300">
                    Anna Wilson
                  </p>
                  <p class="mt-4 text-gray-500 capitalize dark:text-gray-900 group-hover:text-gray-300">
                    Quickly disseminate superior deliverables whereas
                    web-enabled applications. Quickly drive clicks-and-mortar
                    catalysts.
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center 
                justify-center mt-4 h-12 px-8 font-medium tracking-wide
                 text-white transition duration-200 rounded-full shadow-md
                  bg-gradient-to-r from-[#38A1BB] from-14.72% via-[#38A1BB] via-77.9% to-[#604DBC] to-84.87% ...
                  hover:bg-white-100 focus:shadow-outline focus:outline-none"
                    aria-label="Sign up"
                    title="Sign up"
                  >
                    FIND OUT MORE
                  </Link>
                </div>
              </div>
            </div>
            <div
              class="px-12 py-8 transition-colors duration-300 
            transform border cursor-pointer rounded-xl hover:border-transparent group
             hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent"
            >
              <div class="flex flex-col sm:-mx-4 sm:flex-row">
                <img
                  class="flex-shrink-0 object-cover w-48 h-48 rounded-lg sm:mx-4 ring-4 ring-gray-300"
                  src={img3}
                  alt=""
                />

                <div class="mt-4 sm:mx-4 sm:mt-0">
                  <h1 class="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-gray-900 group-hover:text-white">
                    LEAD NURSE
                  </h1>

                  <p class="mt-2 text-gray-500 capitalize dark:text-gray-900 group-hover:text-gray-300">
                    Peggie Cannon
                  </p>
                  <p class="mt-4 text-gray-500 capitalize dark:text-gray-900 group-hover:text-gray-300">
                    Seamlessly visualize quality intellectual capital without
                    superior collaboration and installed base portals.
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center 
                justify-center mt-4 h-12 px-8 font-medium tracking-wide
                 text-white transition duration-200 rounded-full shadow-md
                  bg-gradient-to-r from-[#38A1BB] from-14.72% via-[#38A1BB] via-77.9% to-[#604DBC] to-84.87% ...
                  hover:bg-white-100 focus:shadow-outline focus:outline-none"
                    aria-label="Sign up"
                    title="Sign up"
                  >
                    FIND OUT MORE
                  </Link>
                </div>
              </div>
            </div>
            <div
              class="px-12 py-8 transition-colors duration-300 
            transform border cursor-pointer rounded-xl hover:border-transparent group
             hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent"
            >
              <div class="flex flex-col sm:-mx-4 sm:flex-row">
                <img
                  class="flex-shrink-0 object-cover w-48 h-48 rounded-lg sm:mx-4 ring-4 ring-gray-300"
                  src={img4}
                  alt=""
                />

                <div class="mt-4 sm:mx-4 sm:mt-0">
                  <h1 class="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-gray-900 group-hover:text-white">
                    NURSE
                  </h1>

                  <p class="mt-2 text-gray-500 capitalize dark:text-gray-900 group-hover:text-gray-300">
                    Hubert Jackson
                  </p>
                  <p class="mt-4 text-gray-500 capitalize dark:text-gray-900 group-hover:text-gray-300">
                    Energistically scale future-proof core competencies
                    vis-a-vis impactful experiences with optimal networks.
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center 
                justify-center mt-4 h-12 px-8 font-medium tracking-wide
                 text-white transition duration-200 rounded-full shadow-md
                  bg-gradient-to-r from-[#38A1BB] from-14.72% via-[#38A1BB] via-77.9% to-[#604DBC] to-84.87% ...
                  hover:bg-white-100 focus:shadow-outline focus:outline-none"
                    aria-label="Sign up"
                    title="Sign up"
                  >
                    FIND OUT MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
