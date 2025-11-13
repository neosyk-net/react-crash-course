import { Link } from 'react-router-dom';


function Nav() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/users/jeffhardy">Jeff Hardy</Link>
            <Link to="/users/reymysterio">Rey Mysterio</Link>
            <Link to="/users/sykoanalyst">Sykoanalyst</Link>
        </nav>
    )
}

export default Nav;
      