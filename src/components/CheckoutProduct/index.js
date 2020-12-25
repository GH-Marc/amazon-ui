import './styles.css';

import { useStateValue } from '../../hooks/StateProvider';

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  }

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="product_image"/>

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>R$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
          .fill().map((item, index) => (
            <p>⭐️</p>
          ))}
        </div>

        {!hideButton && (
          <button onClick={removeFromBasket}>
            Remover do carrinho
          </button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;