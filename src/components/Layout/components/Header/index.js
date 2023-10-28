import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GrNotification } from "react-icons/gr";
import { BsFillChatDotsFill } from "react-icons/bs";
const cx = classNames.bind(styles)
function Header() {
    return (<header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div >
                <img className={cx('logo')} src='https://philong.com.vn/media/banner/logo_philong11.png' alt=''></img>
            </div>
            <div className={cx('input')} >
                <button className={cx('btn-list')} >Tất cả danh mục</button>
                <input className={cx('search')} placeholder='Nhập tên sản phẩm, mã sản phẩm, từ khóa cần tìm kiếm...' spellCheck={false}></input>
            </div>
            <div className={cx('icon')}>
                <button> <AiOutlineUser /></button>
                <button> <AiOutlineShoppingCart /></button>
                <button>  <GrNotification /></button>
                <button>  <BsFillChatDotsFill /></button>
            </div>
            {/* Logo,search,icon */}
        </div>
    </header>);
}

export default Header;