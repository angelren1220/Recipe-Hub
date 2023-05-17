import "../styles/nav.scss";
import { Link } from 'react-router-dom'

const Navigation = function() {
  return (
    <nav className="nav">

      <h1 className="logo"><a href="/">Sous</a></h1>

      <div className="sideview">
        <h2><Link to ={'/login'}>Login</Link></h2>
        <h2><Link to ={'/'}>My Recipes</Link></h2>
        <h2><Link to ={'/explore'}>Explore</Link></h2>
        <h2><Link to ={'/search'}>Search</Link></h2>
        <h2><Link to ={'/grocerylists'}>Grocery Lists</Link></h2>
        <h2><Link to ={'/profile'}>Profile</Link></h2>
        <h2><Link to ={'/inbox'}>Inbox</Link></h2>
      </div>

    </nav>
  );
};

export default Navigation;