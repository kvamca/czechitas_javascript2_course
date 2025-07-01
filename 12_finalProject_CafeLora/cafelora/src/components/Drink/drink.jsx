import "./drink.css"
import { Layer } from "../Layer/layer.jsx"

export const Drink = ({id, name, ordered, image, layers}) => {
  const color = layers[0].color;
  const label = layers[0].label;
    return (
            <div className="drink">
              <div className="drink__product">
                <div className="drink__cup">
                  <img src={`http://localhost:4000${image}`} />
                </div>
                <div className="drink__info">
                  <h3>{name}</h3>
                  <Layer color={color} label={label} />
                </div>
              </div>
              <form className="drink__controls" data-id={id} data-ordered={ordered}>
                <input type="hidden" className="order-id" value={id} />
                <button className={"order-btn" + (ordered ? " order-btn--ordered" : "")}>
                  {ordered ? "Zrušit" : "Objednat"}
                </button>
              </form>
            </div>

    )
}