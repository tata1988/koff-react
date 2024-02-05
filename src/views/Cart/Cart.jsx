import { useContext } from 'react';
import { CartForm } from '../../components/CartForm/CartForm.jsx';
import { CartPlace } from '../../components/CartPlace/CartPlace.jsx';
import { CartProducts } from '../../components/CartProducts/CartProducts.jsx';
import { Container } from '../Container/Container.jsx';
import s from './Cart.module.scss';
import { useSelector } from 'react-redux';

export const Cart = () => {
  const { products, totalPrice, totalCount } = useSelector(
    (state) => state.cart,
  );

  if (!totalCount) {
    return (
      <section className={s.cart}>
        <Container className={s.container}>
          <h2 className={s.title}>Корзина пуста</h2>
        </Container>
      </section>
    );
  }

  return (
    <section className={s.cart}>
      <Container className={s.container}>
        <h2 className={s.title}>Корзина</h2>
        <CartProducts products={products} />
        <CartPlace totalPrice={totalPrice} totalCount={totalCount} />
        <CartForm />
      </Container>
    </section>
  );
};
