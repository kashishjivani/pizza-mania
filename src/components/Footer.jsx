import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <div className="max-w-4xl mx-auto">
        <p className="font-bold">© 2023 Pizza Mania</p>
        <p>Contact Us: <a href="mailto:support@pizzastore.com" className="hover:text-yellow-400">support@pizzamania.com</a></p>
      </div>
    </footer>
  );
}

export default Footer;
