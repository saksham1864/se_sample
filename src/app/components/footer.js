export default function Footer() {
  return (
    <footer className="bg-[#161C28] text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex justify-between flex-wrap">
          {/* Left Side - Brand and Newsletter */}
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="text-2xl font-bold text-green-500">Biccas</h3>
            <p className="mt-2 mb-6">Get started now, try our product.</p>
            <form className="flex items-center">
              <div class="relative flex h-10 w-full min-w-[200px] max-w-[20rem]">
                <button
                  class="!absolute right-1 top-1 z-10 select-none rounded-full bg-[#54BD95] py-2 px-4 text-center align-middle text-xl"
                  type="button"
                  data-ripple-light="true"
                >
                  →
                </button>
                <input
                  type="email"
                  class="peer h-full w-full rounded-3xl border border-blue-gray-200 bg-transparent px-3 py-6 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                  required
                />
                <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0  flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Email Address
                </label>
              </div>
            </form>
          </div>

          {/* Middle - Links */}
          <div className="w-full md:w-3/4 flex justify-between">
            <div className="w-1/4">
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Help Centre
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Account Information
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-1/4">
              <h4 className="text-lg font-semibold mb-4">Help and Solution</h4>
              <ul>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Talk to Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Support Docs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    System Status
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Covid Response
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-1/4">
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Update
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Beta Test
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Pricing Product
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex justify-between mt-8  pt-6">
          <p className="text-sm text-white">
            © 2022 Biccas Inc. Copyright and rights reserved
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-white ">
              Terms and Conditions
            </a>
            <a href="#" className="text-sm text-white ">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
