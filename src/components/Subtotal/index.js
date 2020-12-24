import './styles.css';

import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../hooks/StateProvider';
import { getBasketTotal } from '../../hooks/reducer';

function Subtotal() {
  const [{basket}] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Total {basket?.length}: <strong>{`${value}`}</strong>
            </p>

            <small className="subtotal__gift">
              <input type="checkbox" /> Esse pedido
              contém um presente
            </small>
          </>
        )}
        decimalScale={3}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"R$"}
      />

      <button>Fazer o check-in</button>
    </div>
  );
}

export default Subtotal;