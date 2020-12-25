import { useState, useEffect } from 'react';

import './styles.css';

import Order from '../../components/Order';

import { useStateValue } from '../../hooks/StateProvider';
import { db } from '../../firebase';

function Orders() {
  const [{ user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection('users')
      .doc(user?.uid).collection('orders')
      .orderBy('created', 'desc').onSnapshot(snapshot => (
        setOrders(snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data(),
        })))
      ));
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Seus pedidos</h1>

      <div className="orders__order">
        {orders?.map(order => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;