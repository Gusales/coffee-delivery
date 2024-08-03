import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import Logo from '../../assets/logo.svg'

import './style.scss'

export function Header(){
  return(
    <div className="container header__container">
      <header>
        <figure className="header__figure">
          <img 
            src={Logo} 
            alt="Logotipo da Coffee Delivery" 
            className="header__logo"
          />
        </figure>

        <div className="header__actions">
          <div className="header__location">
            <MapPin weight="fill" className="header__location__icon" size={22} />
            <p className="header__location__text">Carapicuíba, SP</p>
          </div>

          <button className="header__cart" name="Acessar o seu carrinho">
            <ShoppingCart weight="fill" className="header__cart__icon" size={22} />
          </button>
        </div>
      </header>
    </div>
  )
}