import * as Icon from "react-feather";

function Footer() {
  return (
    <footer className="relative bg-gray-200">
      <div className="absolute -top-40 md:-top-32 -z-10  bg-gray-200 left-0 right-0 bottom-0"></div>
      <div className="p-4 md:px-12  flex flex-col md:flex-row md:space-x-5">
        <div className="md:w-1/3 mt-5">
          <h1 className="text-4xl font-bold">SOKO.KE</h1>
          <p className="text-sm text-gray-500">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <div className="flex items-center space-x-2 mt-5">
            <Icon.Facebook size={25} className="bg-white rounded-full p-1 " />
            <Icon.Twitter size={25} className="bg-white rounded-full p-1 " />
            <Icon.Instagram size={25} className="bg-white rounded-full p-1 " />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-5 md:grid-cols-4 md:w-2/3">
          <div>
            <h2 className="text-2xl uppercase">Company</h2>
            <ul className="text-gray-500 flex flex-col space-y-2">
              <li>About Us</li>
              <li>Features</li>
              <li>Careers</li>
              <li>Works</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl uppercase">Help</h2>
            <ul className="text-gray-500 flex flex-col space-y-2">
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl uppercase">FAQ</h2>
            <ul className="text-gray-500 flex flex-col space-y-2">
              <li>Account</li>
              <li>Orders</li>
              <li>Manage Deliveries</li>
              <li>Payment</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl uppercase">Resources</h2>
            <ul className="text-gray-500 flex flex-col space-y-2">
              <li>Free eBook</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>Youtube Playlist</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="border-gray-400/60 w-4/5 mx-auto" />
      <p className="text-gray-500  p-5 bg-gray-200 text-center">
        &copy; {new Date().getFullYear()} SOKO.KE. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
