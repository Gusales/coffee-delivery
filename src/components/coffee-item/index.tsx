import { ShoppingCart } from '@phosphor-icons/react'

import './style.scss'
import { InputPrice } from '../input-price'
import { FormEvent } from 'react'

export function CoffeeItem(){
  async function handleAddItemToCart(event: FormEvent<HTMLFormElement>){
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const itemQuantity = form.get('item_quantity') ?? 0

    console.log(`Adicionado café 0 ao carrinho com ${itemQuantity} unidades`)
  }

  return(
    <li className="coffee_item_catalog">
      <figure className="coffee_item_image">
        <img src="/images/coffees/latte.png" alt="" />
      </figure>

      <article className="coffee_item_content">
        <ul className="coffee_item_tag_list">
          <li className="coffee_item_tag">
            tradicional
          </li>
          <li className="coffee_item_tag">
            tradicional
          </li>
        </ul>

        <div className="coffee_item_texts">
          <h4 className="coffee_item_name">Expresso Tradicional</h4>
          <p className="coffee_item_description">O tradicional café feito com água quente e grãos moídos</p>
        </div>

        <div className="coffee_item_buy">
          <div className="coffee_item_price">
            <p>R$</p>
            <p>9,90</p>
          </div>

          <form className="coffee_item_actions" onSubmit={handleAddItemToCart}>
            <InputPrice name="item_quantity" />
            <button type="submit" className="coffee_item_actions_button">
              <ShoppingCart weight="fill" />
            </button>
          </form>
        </div>
      </article>
    </li>
  )
}