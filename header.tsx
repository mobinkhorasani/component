export function Header() {
  return (
    <header className="bg-gray-100 py-4">
      <div className="container pl-20 pr-56 flex items-center justify-between">

        <div className="text-lg font-bold text-gray-500">LOGO</div>

       
        <nav>
          <ul className="flex space-x-8 text-gray-600">
            <li className="hover:text-gray-900">
              <a href="#company">Company</a>
            </li>
            <li className="hover:text-gray-900">
              <a href="#services">Services</a>
            </li>
            <li className="hover:text-gray-900">
              <a href="#fintech">FinTech Solutions</a>
            </li>
            <li className="hover:text-gray-900">
              <a href="#products">Products</a>
            </li>
            <li className="hover:text-gray-900">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="hover:text-gray-900 border-b-2 border-green-500">
              <a href="#contact">Contact us</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
