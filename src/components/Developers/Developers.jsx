import s from './Developers.module.scss';

export const Developers = () => (
  <ul className={s.developers}>
    <li className={s.item}>
      Designer:&nbsp;
      <a
        className={s.link}
        href='https://t.me/Mrshmallowww'
        target='_blank'
        rel='noreferrer'
      >
        Anastasia Ilina
      </a>
    </li>
    <li className={s.item}>
      Developer:&nbsp;
      <a
        className={s.link}
        href='https://t.me/Quper24'
        target='_blank'
        rel='noreferrer'
      >
        Maksim Leskin
      </a>
    </li>
  </ul>
);
