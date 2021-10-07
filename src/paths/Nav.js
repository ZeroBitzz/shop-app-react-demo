//style imports
import '../App.css';

//mui imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

//react imports
import { Link } from 'react-router-dom';

//redux imports
import {useSelector} from 'react-redux';

const Nav = () => {
    const totalItems = useSelector(state => state.itemCounter.portalGunCount) + useSelector(state => state.itemCounter.swordCount)

    return (
        <AppBar position="static">
            <Toolbar >
            <Link to='/' className='Nav' >Home</Link>
            <Link to='./about' className='Nav' >About</Link>
            <Link to='./shop' className='Nav' >Shop</Link>
            <Link to='./cart' className='Nav' >Cart ({totalItems})</Link>
            </Toolbar>
        </AppBar>
        
    )
}

export default Nav;