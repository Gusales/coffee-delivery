import { CoffeeItem } from "../coffee-item";

import './style.scss'

export function CoffeeList(){
  return(
    <div className="coffee_list_container">
      <main>
        <h2 className="coffee_list_title">Nossos cafés</h2>

        <ul className="coffee_list">
          <CoffeeItem />
          <CoffeeItem />
          <CoffeeItem />
          <CoffeeItem />
          <CoffeeItem />
        </ul>
      </main>
    </div>
  )
}