import s from './Cart.module.scss';
import { Container } from '../../views/Container/Container';
import { CartProducts } from '../../components/CartProducts/CartProducts';
import { CartPlace } from '../../components/CartPlace/CartPlace';
import { CartForm } from '../../components/CartForm/CartForm';

export const Cart = () => {

    return (
        <section className={s.cart}>
           <Container className={s.container}>
                <h2 className={s.title}>Корзина</h2>
                <CartProducts/>
                <CartPlace/>
                <CartForm/>
           </Container>
        </section>
    )
}           