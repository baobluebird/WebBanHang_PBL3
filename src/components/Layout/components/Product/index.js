import styles from './Product.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

function Product({ uptitle, downtitle, oldprice, newprice, src }) {
    return (
        <div className={cx('Product')}>

            <div className={cx('item')}>
                <img style={{ width: '250px', height: '250px', margin: 'auto' }} src={src} alt="" />
                <div className={cx('content')}>
                    <div className={cx('uptitle')}>{uptitle}</div>
                    <div className={cx('downtitle')}>{downtitle}</div>
                    <div className={cx('oldprice')}>{oldprice}</div>
                    <div className={cx('newprice')}>{newprice}</div>
                </div>
            </div>
        </div>
    );
}

export default Product;