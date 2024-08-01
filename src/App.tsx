import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'

import CoffeeCoup from './assets/coffee-coup.png'
import Placeholder from './assets/placeholder.jpg'
import { Header } from './components/header'

export function App() {
  return (
    <div className="wrapper">
      <Header />

      <section>
        <div>
          <h1>
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
          </h2>

          <div>
            <div>
              <span>
                <ShoppingCart />
              </span>

              <p>Compra simples e segura</p>
            </div>

            <div>
              <span>
                <Package weight="fill" />
              </span>

              <p>Embalagem mantém o café intacto</p>
            </div>

            <div>
              <span>
                <Timer weight="fill" />
              </span>

              <p>Entrega rápida e rastreada</p>
            </div>

            <div>
              <span>
                <Coffee weight="fill" />
              </span>

              <p>O café chega fresquinho até você</p>
            </div>
          </div>
        </div>
        <figure>
          <img src={CoffeeCoup} alt="Imagem de um copo de café que está em volta das sementes e ramos de café" />
        </figure>
      </section>

      <main>
        <h2>Nossos cafés</h2>

        <section>
          <article>
            <figure>
              <img src={Placeholder} alt="" />
            </figure>

            <span>
              tradicional
            </span>

            <p>Expresso Tradicional</p>

            <p>O tradicional café feito com água quente e grãos moídos</p>

            <div>
              <div>
                <p>R$</p>
                <p>9,90</p>
              </div>

              <div>
                <input type="number" name="" id="" />
                <button>
                  <ShoppingCart weight="fill" />
                </button>
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
  )
}
