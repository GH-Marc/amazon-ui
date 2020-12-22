import './styles.css';

function Products({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>R$</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
          {Array(rating).fill().map((item, index) => (
            <p>⭐️</p>
          ))}
        </div>
      </div>

      <img
        src={image}
        alt="product_image"
      />

      <button>Adicionar ao carrinho</button>
    </div>
  )
}

export default Products;