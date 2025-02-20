import { ModeToggle } from '../mode-toggle';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-6 md:px-12 py-4 shadow-md dark:bg-gray-800 bg-gray-100">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-white">Taskly</h1>
        <ul className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-300">
          <li><a href="#features" className="hover:text-blue-600 dark:hover:text-blue-400">Features</a></li>
          <li><a href="#pricing" className="hover:text-blue-600 dark:hover:text-blue-400">Pricing</a></li>
          <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a></li>
        </ul>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">Sign Up</button>
          <ModeToggle />
        </div>
      </nav>
    );
};

export default Navbar;