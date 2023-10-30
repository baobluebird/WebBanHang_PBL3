import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import styles from './Menu.module.scss'
const cx = classNames.bind(styles)
function MenuItem({ title, icon }) {
    return (
        <NavLink className={cx('menu-item')} >
            {icon}
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

export default MenuItem