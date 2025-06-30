import "./menu.css"
import { Drink } from "../Drink/drink.jsx"

export const Menu = () => {
    return (
     <section className="menu" id="menu">
        <div className="container">
          <h2>Naše nabídka</h2>
          <p className="menu-intro">
            Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
          </p>
          <div className="drinks-list">
          <Drink
            id={0}
            name="Doppio"
            ordered={false}
            image= "/cups/doppio.png"
            layers={[
              {
                color: '#fbdf5b',
                label: 'citrón',
              }
            ]}
          />
            
          </div>

          <div className="order-detail">
            <a href="/order.html">Detail objednávky</a>
          </div>
        </div>
      </section>

    )
}