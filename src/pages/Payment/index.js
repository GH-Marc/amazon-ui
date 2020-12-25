import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import CurrencyFormat from 'react-currency-format';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import './styles.css';

import CheckoutProduct from '../../components/CheckoutProduct';
import { useStateValue } from '../../hooks/StateProvider';
import { getBasketTotal } from '../../hooks/reducer';

import axios from '../../axios';
import { db } from '../../firebase';

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [success, setSuccess] = useState(false);
  const [processing, setProcessing] = useState('');
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setProcessing(true);

    const payment = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) => {
      db.collection('users')
      .doc(user?.uid).collection('orders')
      .doc(paymentIntent.id).set({
        basket: basket,
        amount: paymentIntent.amount,
        created: paymentIntent.created,
      });

      setSuccess(true);
      setError(null);
      setProcessing(false);

      dispatch({
        type: 'EMPTY_BASKET'
      });

      history.replace('/orders');
    })
  }

  const handleChange = event => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  }

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`
      });

      setClientSecret(response.data.clientSecret);
    }
    getClientSecret();
  }, [basket]);

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Check-in (
            <Link
              to='/checkout'
              style={{
                textDecoration: 'none',
                color: '#f0c14b'
              }}>
              {basket?.length} itens
            </Link>)
        </h1>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Endereço de entrega</h3>
          </div>

          <div className="payment__address">
            <p>{user?.email}</p>
            <p>34 Rua Flinston</p>
            <p>Paragominas, PA</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Revisão dos produtos</h3>
          </div>

          <div className="payment__items">
            {basket.map(item => (
              <CheckoutProduct 
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Método de pagamento</h3>
          </div>

          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange}/>

              <div className="payment__priceContent">
                <CurrencyFormat
                  renderText={(value) => (
                    <h3>Total dos pedidos: {value}</h3>
                  )}
                  decimalScale={3}
                  value={getBasketTotal(basket)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'R$ '}
                />

                <button
                  disabled={processing || disabled || success}>
                    <span>
                      {processing ? <p>Processando</p> : 'Comprar agora'}
                    </span>
                </button>
              </div>

              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;