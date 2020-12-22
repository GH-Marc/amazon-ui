import './styles.css';

import CurrencyFormat from 'react-currency-format';

function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Total (0 items):
              <strong> 0</strong>
            </p>

            <small className="subtotal__gift">
              <input type="checkbox" /> Esse pedido
              contém um presente
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Subtotal;