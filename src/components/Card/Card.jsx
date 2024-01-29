import { Container } from '../../views/Container/Container';
import s from './Card.module.scss';
import { useParams } from 'react-router-dom';
import { Slider } from '../Slider/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProduct } from '../../store/product/product.slice';
import {FavoriteButton} from '../FavoriteButton/FavoriteButton';


export const Card = () => {

    const { productId } = useParams();
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector(state => state.product);

    useEffect(() => {
        dispatch(fetchProduct(productId));
    }, [dispatch, productId]);


    if (loading) return <div>Загрузка...</div>
    if (error) return <div>Ошибка: {error}</div>
    if (!data) return <div>Продукт не найден, попробуйте позже!</div>
 
    return (
        <section className={s.card}>
            <Container className={s.container}>
                <h2 className={s.title}>{data?.name}</h2>
                <Slider data={data}/>
                <div className={s.info}>
                    <p className={s.price}>{data?.price.toLocaleString()}&nbsp;₽</p>
                    <p className={s.article}>арт.{data?.article}</p>
                    <h3 className={s.characteristicsTitle}>Общие характеристики</h3>
                    <table className={s.table}>
                        <tbody>
                            {data?.characteristics.map((item, i) => (
                                <tr className={s.row} key={i}>
                                    <td className={s.field}>{item[0]}</td>
                                    <td className={s.field}>{item[0]}</td>
                                    <td className={s.value}>{item[1]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className={s.btns}>
                        <button className={s.btn}>В корзину</button>
                        <FavoriteButton className={s.like} id={data.id}/>
                    </div>
                </div>
            </Container>
        </section>
    )
}