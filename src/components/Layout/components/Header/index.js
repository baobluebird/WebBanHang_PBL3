import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import { Link } from 'react-router-dom';
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GrNotification } from "react-icons/gr";
import { BsChatDots } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai"
const cx = classNames.bind(styles)
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div >
                    <Link to="/">          <img className={cx('logo')} src='https://philong.com.vn/media/banner/logo_philong11.png' alt=''></img></Link>
                </div>
                <div className={cx('input')} >

                    <div className={cx('btn-list')} ><span>Tất cả danh mục  </span>  <div style={{ marginTop: '5px' }}><AiOutlineDown /></div></div>


                    <div className={cx('search')}> <input style={{ height: '100%', width: '100%' }} placeholder='Nhập tên sản phẩm, mã sản phẩm, từ khóa cần tìm kiếm...' spellCheck={false}></input></div>
                </div>
                <div className={cx('list-item')} >
                    <div className={cx('item')} >
                        <button className={cx('icon')}>  <GrNotification style={{ width: '2rem', height: '2rem' }} /></button>
                        <span className={cx('subtiltle')}>Thông báo</span>
                    </div >

                    <Link to="/cart">
                        <div className={cx('item')} >
                            <button className={cx('icon')}> <AiOutlineShoppingCart style={{ width: '2rem', height: '2rem' }} /></button>
                            <span className={cx('subtiltle')}>Giỏ hàng</span>
                        </div>
                    </Link>

                    <div className={cx('item')}>
                        <button className={cx('icon')}>  <BsChatDots style={{ width: '2rem', height: '2rem' }} /></button>
                        <span className={cx('subtiltle')}>Liên hệ</span>
                    </div>
                    <div className={cx('item')} >
                        <Link to='/login'>   <button className={cx('icon')}> <AiOutlineUser style={{ width: '2rem', height: '2rem' }} /></button></Link>
                        <span className={cx('subtiltle')}>Đăng nhập</span>
                    </div>
                </div>
                {/* Logo,search,icon */}
            </div>
        </header>
    );
}

export default Header;