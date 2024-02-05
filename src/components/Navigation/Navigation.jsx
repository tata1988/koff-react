import { Link } from 'react-router-dom';
import s from './Navigation.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCart } from '../../store/cart/cart.slice.js';


export const Navigation = () => {
  const dispatch = useDispatch()
  const product = useSelector(state => state.cart.products);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch])

  return (
    <nav className={s.navigation}>
      <Link className={s.link} to='/favorite'>
        <span className={s.text}>Избранное</span>
        <svg
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M8.41334 13.8733C8.18668 13.9533 7.81334 13.9533 7.58668 13.8733C5.65334 13.2133 1.33334 10.46 1.33334 5.79332C1.33334 3.73332 2.99334 2.06665 5.04001 2.06665C6.25334 2.06665 7.32668 2.65332 8.00001 3.55998C8.67334 2.65332 9.75334 2.06665 10.96 2.06665C13.0067 2.06665 14.6667 3.73332 14.6667 5.79332C14.6667 10.46 10.3467 13.2133 8.41334 13.8733Z'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </Link>
      <Link className={s.link} to='/cart'>
        <span className={s.text}>Корзина</span>
        <span>({product.length})</span>
        <svg
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M5.87336 1.33325L3.46002 3.75325'
            stroke='currentColor'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M10.1266 1.33325L12.54 3.75325'
            stroke='currentColor'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M1.33331 5.23324C1.33331 3.9999 1.99331 3.8999 2.81331 3.8999H13.1866C14.0066 3.8999 14.6666 3.9999 14.6666 5.23324C14.6666 6.66657 14.0066 6.56657 13.1866 6.56657H2.81331C1.99331 6.56657 1.33331 6.66657 1.33331 5.23324Z'
            stroke='currentColor'
          />
          <path
            d='M6.50665 9.33325V11.6999'
            stroke='currentColor'
            strokeLinecap='round'
          />
          <path
            d='M9.5733 9.33325V11.6999'
            stroke='currentColor'
            strokeLinecap='round'
          />
          <path
            d='M2.33331 6.66675L3.27331 12.4267C3.48665 13.7201 3.99998 14.6667 5.90665 14.6667H9.92665C12 14.6667 12.3066 13.7601 12.5466 12.5067L13.6666 6.66675'
            stroke='currentColor'
            strokeLinecap='round'
          />
        </svg>
      </Link>
    </nav>
  );
}
