import s from './CartForm.module.scss';

export const CartForm = () => {
    return (
        <form className={s.form}>
           <h3 className={s.subtitle}>Данные для доставки</h3>
           <fieldset className={s.fieldsetInput} >
                <input className={s.input} name='name' type="text" placeholder='Фамилия Имя Отчество'/>
                <input className={s.input} name='phone' type="text" placeholder='Телефон'/>
                <input className={s.input} name='email' type="email" placeholder='E-mail'/>
                <input className={s.input} name='address' type="text" placeholder='Адрес доставки'/>
                <textarea className={s.textarea} name="comments" placeholder='Комментарий к заказу'></textarea>
           </fieldset>

           <fieldset className={s.fieldsetRadio}>
                <legend className={s.legend}>Доставка</legend>
                <label className={s.radio}>
                    <input 
                        className={s.radioInput} 
                        type="radio" 
                        name="deliveryType" 
                        value='delivery'
                        required
                    />
                    Доставка
                </label>
                <label className={s.radio} >
                    <input required className={s.radioInput} type="radio" name="deliveryType" value='pickup' />
                    Самовывоз
                </label>
           </fieldset>

           <fieldset className={s.fieldsetRadio}>
            <legend className={s.legend}>Оплата</legend>
            <label className={s.radio}>
                <input required className={s.radioInput} type="radio" name="paymentType" value='card' />
                Картой при получении
            </label>
            <label className={s.radio} >
                <input required className={s.radioInput} type="radio" name="paymentType" value='cash' />
                Наличными при получении
            </label>
           </fieldset>
        </form>
    )
}