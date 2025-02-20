import { Link } from 'react-router';
import { ModeToggle } from '../mode-toggle';
import { Button } from '../ui/button';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-6 md:px-12 py-4 shadow-md dark:bg-gray-800 bg-gray-100">
        <Link to="/"><h1 className="text-2xl font-bold text-blue-600 dark:text-white">Taskly</h1></Link>
        <ul className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-300">
          <li><a href="#features" className="hover:text-blue-600 dark:hover:text-blue-400">Features</a></li>
          <li><a href="#pricing" className="hover:text-blue-600 dark:hover:text-blue-400">Pricing</a></li>
          <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a></li>
        </ul>
        <div className="flex items-center space-x-4">
          <Link to="register"><Button>Sign Up</Button></Link>
          <Link to="login"><Button variant="outline">Login</Button></Link>
          <ModeToggle />
        </div>
      </nav>
    );
};

export default Navbar;