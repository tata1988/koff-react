import s from './CartForm.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { submitCartForm } from '../../store/formCart/formCart.slice.js';
import { withRouter } from '../../helpers/withRouter'

export const CartForm = withRouter(({router}) => {
  console.log('window.location: ', window.location);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const orderStatus = useSelector((state) => state.formCart);

  useEffect(() => {
    if (orderStatus.success) {
      navigate(`/order/${orderStatus.orderId}`);
    }
  }, [orderStatus, navigate]);

  const onSubmit = (data) => {
    dispatch(submitCartForm(data));
  };

  return (
    <form className={s.form} id='orderForm' onSubmit={handleSubmit(onSubmit)}>
      <h3 className={s.subtitle}>Данные для доставки</h3>
      <fieldset className={s.fieldsetInput}>
        <label>
          <input
            className={s.input}
            type='text'
            placeholder='Фамилия Имя Отчество'
            {...register('name', { required: true })}
          />
          {errors.name && <p className={s.error}>Это поле обязательное</p>}
        </label>
        <label>
          <input
            className={s.input}
            type='text'
            placeholder='Телефон'
            {...register('phone', { required: true })}
          />
          {errors.phone && <p className={s.error}>Это поле обязательное</p>}
        </label>
        <label>
          <input
            className={s.input}
            type='email'
            placeholder='E-mail'
            {...register('email', { required: true })}
          />
          {errors.email && <p className={s.error}>Это поле обязательное</p>}
        </label>
        <label>
          <input
            className={s.input}
            type='text'
            placeholder='Адрес доставки'
            {...register('address', { required: true })}
          />
          {errors.address && <p className={s.error}>Это поле обязательное</p>}
        </label>
        <label>
          <textarea
            className={s.textarea}
            placeholder='Комментарий к заказу'
            {...register('comments')}
          ></textarea>
        </label>
      </fieldset>

      <fieldset className={s.fieldsetRadio}>
        <legend className={s.legend}>Доставка</legend>
        <label className={s.radio}>
          <input
            className={s.radioInput}
            type='radio'
            value='delivery'
            {...register('deliveryType', { required: true })}
          />
          Доставка
        </label>
        <label className={s.radio}>
          <input
            className={s.radioInput}
            type='radio'
            value='pickup'
            {...register('deliveryType', { required: true })}
          />
          Самовывоз
        </label>
        {errors.deliveryType && (
          <p className={s.error}>Выберите тип доставки</p>
        )}
      </fieldset>

      <fieldset className={s.fieldsetRadio}>
        <legend className={s.legend}>Оплата</legend>
        <label className={s.radio}>
          <input
            className={s.radioInput}
            type='radio'
            value='card'
            {...register('paymentType', { required: true })}
          />
          Картой при получении
        </label>
        <label className={s.radio}>
          <input
            className={s.radioInput}
            type='radio'
            value='cash'
            {...register('paymentType', { required: true })}
          />
          Наличными при получении
        </label>
        {errors.paymentType && <p className={s.error}>Выберите тип оплаты</p>}
      </fieldset>
    </form>
  );
});
