import moment from 'moment';
import CurrencyFormat from 'react-currency-format';

import './styles.css';

import CheckoutProduct from '../CheckoutProduct';

function Orders({ order }) {
  return (
    <div className="order">
      <h2>Pedidos</h2>
      <p>
        {moment.unix(order.data.created).format('MMMM do YYYY, h:mma')}
      </p>

      <p className="order__id">
        <small>{order.id}</small>
      </p>
      
      {order.data.basket?.map(item => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}

      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">
            Total dos pedidos: {value}
          </h3>
        )}
        decimalScale={3}
        value={order.data.amount / 100}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'R$ '}
      />
    </div>
  );
}

export default Orders;