
import { useDispatch, useSelector } from 'react-redux';
import { CardItem } from '../../components/CardItem/CardItem'
import { Container } from '../Container/Container'
import s from './Goods.module.scss'
import { fetchGoods } from '../../store/goods/goods.slice';
import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Pagination } from '../../components/Pagination/Pagination';

export const Goods = () => {

    const dispatch = useDispatch();
    const [searchParam] = useSearchParams();
    const {data, loading, error, pagination} = useSelector(state => state.goods);
    const {favoriteList} = useSelector(state => state.favorite);
    const {pathname} = useLocation();

    const category = searchParam.get('category');
    const q = searchParam.get('q');
    const page = searchParam.get('page');
    

    useEffect(() => {
        if (pathname === '/favorite') {
            dispatch(fetchGoods({list: favoriteList.join(','), page}));
        }
        
    }, [dispatch, favoriteList, pathname]);

    useEffect(() => {
        if (pathname !== '/favorite') {
            dispatch(fetchGoods({category, q, page}));
        }
        
    }, [dispatch, category, q, pathname]);


    if (loading) return <div>Загрузка...</div>
    if (error) return <div>Ошибка: {error}</div>

    return (
        <section className={s.goods}> 
            <Container>
                    <h2 className={`${s.title} visually-hidden`}>Список товаров</h2>
                    {data.length ? (
                    <>
                        <ul className={s.list}>
                            {data.map((item) => (
                                    <li key={item.id}>
                                        <CardItem {...item}/>
                                    </li>
                                ))}
                        </ul>
                        {pagination ? <Pagination pagination={pagination}/> : ''}
                    </>
                    
                    ) : (<div>По вашему запросу ничего не найдено</div>)}
                
            </Container>
        </section>
    ) 
}