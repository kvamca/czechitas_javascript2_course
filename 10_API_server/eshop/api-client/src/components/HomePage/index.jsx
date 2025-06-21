export const HomePage = ({products}) => {

  return (
    <div className="home-page">
      <h1>Welcome to the E-Shop</h1>
      <p>Discover our latest products and offers!</p>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button>Detail</button>
          </div>
        ))}
      </div>
    </div>
  );
}