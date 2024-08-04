import { ShoppingCart } from '@phosphor-icons/react'

import Placeholder from './assets/placeholder.jpg'
import { Header } from './components/header'
import { Hero } from './components/hero'

export function App() {
  return (
    <>
      <Header />

      <Hero />

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
    </>
  )
}
