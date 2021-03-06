import './styles.css';

import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';

import { useStateValue } from '../../hooks/StateProvider';
import { auth } from '../../firebase';

function Header() {
  const [{ basket, user },  dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="header_logo"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link
          to={!user && '/login'}
          style={{
            textDecoration: 'none',
            color: 'inherit'
          }}>

          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Olá {!user ? '' : user.email}
            </span>

            <span className="header__optionLineTwo">
              {user ? 'Desconectar' : 'Faça seu login'}
            </span>
          </div>
        </Link>

        <Link
          to='/orders'
          style={{
            textDecoration: 'none',
            color: 'inherit'
          }}>
          <div className="header__option">
            <span className="header__optionLineOne">Devoluções</span>
            <span className="header__optionLineTwo">e Pedidos</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Seu</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link
          to="/checkout"
          style={{
            textDecoration: 'none'
          }}>
          <div className="header__optionBasket">
            <ShoppingBasketIcon />

            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>        
      </div>
    </div>
  )
}

export default Header;