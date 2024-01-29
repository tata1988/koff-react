import { useDispatch, useSelector } from "react-redux";
import { Goods } from "../../components/Goods/Goods";
import { fetchCategories } from "../../store/categories/categories.slice";
import { Catalog } from "../../components/Catalog/Catalog";
import { useEffect } from "react";
import { fetchGoods } from "../../store/goods/goods.slice";

export const Main = () => {

	const dispatch = useDispatch();
	const {data: dataCategories, 
				loading: loadingCategories, 
				error: errorCategories} = useSelector(state => state.categories);
const {data: dataGoods, 
					loading: loadingGoods, 
					error: errorGoods} = useSelector(state => state.goods);

	useEffect(() => {
			dispatch(fetchCategories());
			dispatch(fetchGoods())
	}, [dispatch]);

	if (loadingCategories) return <div>Загрузка...</div>
	if (errorCategories) return <div>Ошибка: {errorCategories}</div>
	if (loadingGoods) return <div>Загрузка...</div>
	if (errorGoods) return <div>Ошибка: {errorCategories}</div>

	return (
			<main>
				<Catalog data={dataCategories}/>
				<Goods data={dataGoods}/>
			</main>
		)
}
