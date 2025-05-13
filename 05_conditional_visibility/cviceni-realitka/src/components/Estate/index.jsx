
export const Estate = (props, sold, contract) => {


// let soldClass = "sold";
// if (sold) {
//   soldClass = "sold_yes";
// }

const soldClass = sold ? "sold_yes" : "sold_no";

const {title, text, price} = props.Property;
const changedPrice = price < 15000000 ? price : "moc drahe";

    return (
      <>
      <h1>{title}</h1>
      <p>{text}</p>
      <p className={soldClass}>Cena: {changedPrice}</p>
      </>
  
    );
  }