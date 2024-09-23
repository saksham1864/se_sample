import Image from "next/image";
export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#161C28] text-white">
      <div className="flex flex-col  lg:flex-row   lg:w-full max-w-6xl lg:space-x-12 p-6">
        {/* Left Section - Testimonial */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold mb-4">
            People are Saying About DoWhith
          </h2>
          <p className="mb-8">
            Everything you need to accept payments and grow your money or manage
            anywhere on the planet.
          </p>
          <Image
            src="/2d.svg"
            alt="Profile 1"
            width={50}
            height={50}
            className=" my-8 "
          />
          <div className="text-lg italic mb-4">
            <p>
              &quot;I am very helped by this E-wallet application, my days are very
              easy to use this application, and it&aposs very helpful in my life. I
              can even pay in a short time 😁.&quot;
            </p>
            <span className="block mt-4">— Aria Zinnario</span>
          </div>
          {/* Profile images */}
          <div className="flex space-x-3 mt-8">
            <Image
              src="/profile_1.svg"
              alt="Profile 1"
              width={50}
              height={50}
              className=" "
            />
            <Image
              src="/profile_2.svg"
              alt="Profile 1"
              width={50}
              height={50}
              className=" "
            />
            <Image
              src="/profile_3.svg"
              alt="Profile 1"
              width={50}
              height={50}
              className=" "
            />
            <Image
              src="/profile_4.svg"
              alt="Profile 1"
              width={50}
              height={50}
              className=" "
            />
            <Image
              src="/play.svg"
              alt="Profile 1"
              width={50}
              height={50}
              className=""
            />
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="lg:w-1/2 bg-[#222938] p-8 rounded-xl">
          <div className="flex justify-center">
            <Image
              src="/getting_started.svg"
              alt="Profile 1"
              width={60}
              height={60}
              // className=" lg:ml-52 md:ml-96 ml-56"
            />
          </div>
          <h3 className="text-2xl font-bold mb-4 mt-4 text-center">
            Get Started
          </h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-xl bg-white text-black border border-gray-600"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm">
                Message
              </label>
              <textarea
                id="message"
                placeholder="What are you saying?"
                className="w-full p-3  bg-white text-black rounded-xl"
              ></textarea>
            </div>
            <button className="w-full py-3 bg-[#54BD95] text-white rounded-lg hover:bg-green-500">
              Request Demo
            </button>
          </form>
          <p className="text-end mt-4">
            <a href="#" className="text-sm text-white">
              Or Start Free Trial
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
