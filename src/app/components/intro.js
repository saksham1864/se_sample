import Image from "next/image";

export default function IntroComponent() {
  return (
    <div>
      <section className="flex flex-col md:flex-row items-center  justify-between mt-8 p-4 bg-white">
        {/* Left Side - Text */}
        <div className="absolute w-[600px] h-[500px] bg-[#52BDAA] opacity-30 rounded-full blur-[100px] left-[-200px] top-[-100px]"></div>
        <div className="md:w-1/2   p-4 text-left">
          <h1 className="text-7xl md:ml-24 font-bold  text-gray-900">
            We're here to Increase your Productivity
          </h1>
          <div className="md:flex text-start hidden md:ml-24 mt-16 ">
            <div>
              {" "}
              <svg
                width="487"
                height="34"
                viewBox="0 0 487 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 30C73.6307 10.3798 266.914 -17.0885 483 30"
                  stroke="#54BD95"
                  stroke-width="8"
                  stroke-linecap="round"
                />
              </svg>
              {/* <div className="absolute  w-[600px] h-[500px] bg-[#52BDAA] opacity-30 rounded-full blur-[100px] right-[-200px] bottom-[-100px]"></div> */}
            </div>
          </div>

          <p className="mt-9 text-2xl p-4 md:ml-20 text-left justify-between  text-black">
            Let&aposs make your work more organize and easily using the Taskio
            Dashboard with many of the latest featuresin managing work every
            day.
          </p>

          <div className="mt-6 flex p-4 md:ml-20   md:flex-row items-left r gap-4">
            <button className="px-6 py-3 bg-[#54BD95] text-white rounded-full">
              Try Free Trial
            </button>
            <button className="flex items-center gap-2 px-6 py-3  text-gray-700 rounded-lg">
              <span>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 4.16663C28.7432 4.16663 35.8333 11.2552 35.8333 20C35.8333 28.7447 28.7432 35.8333 20 35.8333C11.2552 35.8333 4.16666 28.7447 4.16666 20C4.16666 11.2552 11.2552 4.16663 20 4.16663Z"
                    stroke="#191A15"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M25 19.9919C25 18.64 18.0709 14.3152 17.2848 15.0928C16.4988 15.8705 16.4232 24.0401 17.2848 24.891C18.1464 25.7449 25 21.3438 25 19.9919Z"
                    stroke="#191A15"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>{" "}
              View Demo
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <Image
            src="/image.png"
            width={600}
            alt="nothing"
            height={600}
            className="rounded-lg"
          />
        </div>
      </section>
      <div className="flex  justify-center text-3xl">
        <b>More than 25,000 teams use Collabs</b>
      </div>
      <div className="flex space-x-8 items-center text-2xl justify-center p-8 text-gray-400">
        <div className="flex items-center  space-x-2">
          <Image
            src="/unsplash-logo.svg"
            alt="Unsplash Logo"
            width={24}
            height={24}
          />
          <span className="">Unsplash</span>
        </div>

        <div className="flex items-center space-x-2">
          <Image
            src="/notion-logo.svg"
            alt="Notion Logo"
            width={24}
            height={24}
          />
          <span className="">Notion</span>
        </div>

        <div className="flex items-center space-x-2">
          <Image
            src="/intercom-logo.svg"
            alt="INTERCOM Logo"
            width={24}
            height={24}
          />
          <span className="">INTERCOM</span>
        </div>

        <div className="flex items-center space-x-2">
          <Image
            src="/descript-logo.svg"
            alt="Descript Logo"
            width={24}
            height={24}
          />
          <span className="">descript</span>
        </div>

        <div className="flex items-center space-x-2">
          <Image
            src="/grammarly-logo.svg"
            alt="Grammarly Logo"
            width={24}
            height={24}
          />
          <span className="">grammarly</span>
        </div>
      </div>

      <section className="flex flex-col p-16 md:flex-row items-center  justify-between mt-16  bg-[#F9F8FE]">
        {/* Left Side - Text */}
        <div className="md:w-1/2    text-left">
          <h1 className="text-5xl md:ml-24 font-bold  text-gray-900">
            How we support our pratner all over the world
          </h1>

          <p className="mt-9 text-lg p-4 md:ml-20 text-left justify-between  text-[#A6A6A6]">
            SaaS become a common delivery model for many business application,
            including office software, messaging software, payroll processing
            software, DBMS software, management software
          </p>

          {/* <div className="mt-6 flex p-4 md:ml-20   md:flex-row items-left r gap-4"></div> */}
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 md:ml-20 text-left">
          <div className=" flex flex-row items-center space-x-2">
            <Image
              src="/publishing.svg"
              alt="Grammarly Logo"
              width={94}
              height={94}
            />
            <span className="text-5xl">Publishing</span>
          </div>
          <div className="flex flex-row items-center space-x-2  md:mx-24 ">
            <p className="text-[#A6A6A6]">
              Plan, collaborate, and publishing your contetn that drivees
              meaningful engagement and growth for your barnd
            </p>
          </div>

          <div className=" flex flex-row items-center space-x-2">
            <Image
              src="/publishing.svg"
              alt="Grammarly Logo"
              width={94}
              height={94}
            />
            <span className="text-5xl">Analytics</span>
          </div>
          <div className="flex flex-row items-center space-x-2  md:mx-24 ">
            <p className="text-[#A6A6A6]">
              Analyze your performance and create goegeous report
            </p>
          </div>

          <div className=" flex flex-row items-center space-x-2">
            <Image
              src="/publishing.svg"
              alt="Grammarly Logo"
              width={94}
              height={94}
            />
            <span className="text-5xl">Engagement</span>
          </div>
          <div className="flex flex-row items-center space-x-2  md:mx-24 ">
            <p className="text-[#A6A6A6]">
              Quiuckly navigate you anda engage with your adience
            </p>
          </div>
        </div>
      </section>
      <section class="bg-white  ">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16  lg:px-6">
          {/* <div className="absolute w-[600px] h-[500px] bg-[#52BDAA] opacity-30 rounded-full blur-[100px] right-[-350px] bottom-[-1100px]"></div> */}
          <div class="mx-auto max-w-screen-md text-center  lg:mb-12">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold ">
              Choose Plan That’s Right For You
            </h2>
            <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Choose plan that works best for you, feel free to contact us
            </p>
          </div>
          <div className="flex text-center justify-center">
            <div className="bg-white p-2 w-60 rounded-lg shadow-2xl container text-white">
              <button className="bg-white p-4 text-black ">Bill Monthly</button>
              <button className="bg-[#54BD95] p-4 rounded-md ">
                Bil yearly
              </button>
            </div>
          </div>
          <div class="space-y-8 mt-20 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 rounded-lg border border-gray-100 shadow  xl:p-8 bg-white ">
              <h3 class="mb-4 text-2xl font-semibold">Free</h3>
              <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Best option for personal use & for your next project.
              </p>
              <div class="flex justify-center items-baseline my-8">
                <span class="mr-2 text-5xl font-extrabold">
                  <sup className="text-[#A6A6A6]">$</sup>0
                </span>
              </div>
              <div className="bg-[#F9FAFB]  text-black rounded-xl flex flex-col">
                <ul role="list" class="mb-8 space-y-4 text-left">
                  <li class="flex items-center space-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 bg-[#54BD95] rounded-full text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Individual configuration</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 bg-[#54BD95] rounded-full text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>No setup, or hidden fees</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 bg-[#54BD95] rounded-full text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Team size: <span class="font-semibold">1 developer</span>
                    </span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 bg-[#54BD95] rounded-full text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Premium support:{" "}
                      <span class="font-semibold">6 months</span>
                    </span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 bg-[#54BD95] rounded-full text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Free updates: <span class="font-semibold">6 months</span>
                    </span>
                  </li>
                </ul>
                <a
                  href="#"
                  class="bg-white text-[#54BD95]   shadow-xl  focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-xl px-5 py-2.5 text-center   "
                >
                  Signup for Free
                </a>
              </div>
            </div>

            <div class="flex flex-col p-6 mx-auto max-w-lg text-center   rounded-lg border border-gray-100 shadow  xl:p-8 bg-[#54BD95] text-white">
              <h3 class="mb-4 text-2xl font-semibold">Pro</h3>
              <p class="font-light  sm:text-lg ">
                Relevant for multiple users, extended & premium support.
              </p>
              <div class="flex justify-center items-baseline my-8">
                <span class="mr-2 text-5xl font-extrabold">
                  <sup className="">$</sup>8
                </span>
              </div>
              <div className="bg-white text-black rounded-xl flex flex-col">
                <ul role="list" class="mb-8 space-y-4  text-left">
                  <li class="flex items-center space-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 bg-[#54BD95] rounded-full text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Individual configuration</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 bg-[#54BD95] rounded-full text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>No setup, or hidden fees</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 bg-[#54BD95] rounded-full text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Team size:{" "}
                      <span class="font-semibold">10 developers</span>
                    </span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 bg-[#54BD95] rounded-full text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Premium support:{" "}
                      <span class="font-semibold">24 months</span>
                    </span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 bg-[#54BD95] rounded-full text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Free updates: <span class="font-semibold">24 months</span>
                    </span>
                  </li>
                </ul>
                <a
                  href="#"
                  class="bg-[#54BD95] mx-4 my-4 text-center justify-center text-white shadow-2xl focus:ring-4 focus:ring-primary-200 font-medium rounded-xl text-xl px-5 py-2.5   "
                >
                  Go to pro
                </a>
              </div>
            </div>

            <div class="flex flex-col p-6 mx-auto max-w-lg text-center  bg-white rounded-lg border border-gray-100 shadow  xl:p-8 text-black">
              <h3 class="mb-4 text-2xl font-semibold">Business</h3>
              <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Best for large scale uses and extended redistribution rights.
              </p>
              <div class="flex justify-center items-baseline my-8">
                <span class="mr-2 text-5xl font-extrabold">
                  <sup className="text-[#A6A6A6]">$</sup>16
                </span>
              </div>
              <div className="bg-[#F9FAFB]  text-black rounded-xl flex flex-col">
                <ul role="list" class="mb-8 space-y-4 text-left">
                  <li class="flex items-center space-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 bg-[#54BD95] rounded-full text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Individual configuration</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 bg-[#54BD95] rounded-full text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>No setup, or hidden fees</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 bg-[#54BD95] rounded-full text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Team size:{" "}
                      <span class="font-semibold">100+ developers</span>
                    </span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 bg-[#54BD95] rounded-full text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Premium support:{" "}
                      <span class="font-semibold">36 months</span>
                    </span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <svg
                      class="flex-shrink-0 w-5 h-5 bg-[#54BD95] rounded-full text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Free updates: <span class="font-semibold">36 months</span>
                    </span>
                  </li>
                </ul>
                <a
                  href="#"
                  class="text-[#54BD95] mx-4 my-4 text-center justify-center bg-white shadow-xl focus:ring-4 focus:ring-primary-200 font-medium rounded-xl text-xl px-5 py-2.5   "
                >
                  Go to pro
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
