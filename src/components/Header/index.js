import React from 'react';

import './styles.css';

import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';

function Header() {
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
        <div className="header__option">
          <span className="header__optionLineOne">Olá, Marc </span>
          <span className="header__optionLineTwo">Faça seu login</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Devoluções</span>
          <span className="header__optionLineTwo">e Pedidos</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Seu</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />

            <span className="header__optionLineTwo header__basketCount">0</span>
          </div>
        </Link>        
      </div>
    </div>
  )
}

export default Header;