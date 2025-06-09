import './navbar.css';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className='nav'>
      <h1>Logo Library</h1>
      <ul>
      <Link to="/" className="text">Home</Link> 
      <Link to="/Brouse" className="text">Brouse Books</Link> 
      <Link to="/add" className="text">add Book</Link> 

      
      </ul>
    </div>
  );
}

export default Navbar;
