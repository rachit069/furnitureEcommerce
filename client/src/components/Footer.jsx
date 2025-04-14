const Footer = () => {
    return (
      <footer className="bg-[#2F5D62] text-white py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Furni. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4 text-sm">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Contact Us</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  