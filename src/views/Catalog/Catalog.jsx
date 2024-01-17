import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../../views/Container/Container';
import s from './Catalog.module.scss';
import { fetchCategories } from '../../store/categories/categories.slice';
import { useEffect } from 'react';

export const Catalog = () => {

    const dispatch = useDispatch();
    const {data, loading, error} = useSelector(state => state.categories);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    if (loading) return <div>Загрузка...</div>
    if (error) return <div>Ошибка: {error}</div>

    return (
    <nav className={s.catalog}>
        <Container className={s.container}>
            <ul className={s.list}>
                {data.map((item, i) => (
                    <li key={i}>
                        <a href={`/category?slug${item}`} className={s.link}>{item}</a>
                    </li>
                ))}
            </ul>
        </Container>
    </nav>
)}