import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

import CoffeeCoup from './assets/coffee-coup.png'

import './style.scss'

export function Hero(){
  return(
    <div className="hero_container">
      <section>
        <div className="hero_content">
          <h1>
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
          </p>

          <div className="hero_items">
            <article>
              <span data-color="yellow-dark">
                <ShoppingCart weight="fill" />
              </span>

              <p>Compra simples e segura</p>
            </article>

            <article>
              <span data-color="yellow">
                <Package weight="fill" />
              </span>

              <p>Embalagem mantém o café intacto</p>
            </article>

            <article>
              <span data-color="base-text">
                <Timer weight="fill" />
              </span>

              <p>Entrega rápida e rastreada</p>
            </article>

            <article>
              <span data-color="purple">
                <Coffee weight="fill" />
              </span>

              <p>O café chega fresquinho até você</p>
            </article>
          </div>
        </div>
        <figure>
          <img src={CoffeeCoup} alt="Imagem de um copo de café que está em volta das sementes e ramos de café" />
        </figure>
      </section>
    </div>
  )
}