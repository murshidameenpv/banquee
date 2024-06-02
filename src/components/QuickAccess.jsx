const QuickAccess = () => {
  return (
    <div className="ml-16 flex items-center">
      <div className="w-1/2">
        <a className="text-xl text-primary mx-6 font-sans font-bold">
          Banquee.
        </a>
      </div>
      <div className="w-full grid grid-cols-4 gap-x-2 gap-y-1 text-xs mt-8">
        <div className="font-semibold">About</div>
        <div className="font-semibold">Blog</div>
        <div className="font-semibold">WebFlow</div>
        <div className="font-semibold">Social Media</div>

        <a href="#" className="text-gray-600 hover:text-gray-900">
          Features
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Products
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Styleguid
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Twitter
        </a>

        <a href="#" className="text-gray-600 hover:text-gray-900">
          Pricing
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Technology
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Licidensing
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Facebook
        </a>

        <a href="#" className="text-gray-600 hover:text-gray-900">
          Support
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Crypto
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Changelog
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Instagram
        </a>
      </div>
    </div>
  );
};

export default QuickAccess;
