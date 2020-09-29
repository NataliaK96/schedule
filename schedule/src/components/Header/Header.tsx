import React from 'react';
import 'antd/dist/antd.css';
import { Switch, Image } from 'antd';
import { Role } from '../../redux/types';
import { selectRole } from '../../redux/selectors';
import { changeRole } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import style from './Header.module.scss';
import rsLogo from '../../images/logo-rsschool3.png';

export const Header = () => {
  const checked = useSelector(selectRole) === Role.mentor;
  const dispatch = useDispatch();
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Image src={rsLogo} />
      </div>
      <div className={style.switch}>
        <Switch
          checkedChildren={Role.mentor}
          unCheckedChildren={Role.student}
          checked={checked}
          onChange={() => {
            dispatch(changeRole());
          }}
        />
      </div>
    </header>
  );
};
