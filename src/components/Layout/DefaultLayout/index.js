import Header from '../components/Header'
import Sidebar from '../components/Sidebar';
import styles from './DefaultLayout.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('sidebar')}>
                    <Sidebar />

                    <div className={cx('subside')}> <img src='../../../../public/giftbox.png' /> SẮM LAPTOP TỰU TRƯỜNG</div>
                    <div className={cx('subside')}>MÀN HÌNH SAMSUNG GIÁ CHẤT</div>
                    <div className={cx('subside')}> BUILD PC NHẬN PC</div>
                </div>

                <img className={cx('img')} alt='' src='https://philong.com.vn/media/banner/25_Octcf06f39f5b4fe794b4455a1d567b94c3.jpg' />
                <div className={cx('content')}>{children}</div>

            </div>

        </div>
    );
}

export default DefaultLayout;
