import s from './CartProducts.module.scss';

export const CartProducts = () => (
    <ul className={s.products}>
       <li className={s.product} key={1}>
        <img className={s.img} src="https://koff-api.vercel.app/img//1hb4405mef8h0jrm.jpg" alt="ggg" />
        <h3 className={s.titleProduct}></h3>
        <p className={s.price}>{'4500'.toLocaleString()}&nbsp;₽</p>
        <p className={s.article}>арт. 546454575674</p>
        <div className={s.productControl}>
            <button className={s.productBtn}>-</button>
            <p className={s.productCount}>4</p>
            <button className={s.productBtn}>+</button>
        </div>
       </li>
    </ul>
)
