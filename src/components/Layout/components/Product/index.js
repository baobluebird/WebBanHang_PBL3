import styles from './Product.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles)

function Product({ uptitle, downtitle, oldprice, newprice, src, cpu, ram, disk, operation, screen, vga }) {
    return (
        <div className={cx('Product')}>

            <Link to={`/product?uptitle=${uptitle}&downtitle=${downtitle}&oldprice=${oldprice}&newprice=${newprice}&src=${encodeURIComponent(src)}
            &cpu=${encodeURIComponent(cpu)}&ram=${encodeURIComponent(ram)}&disk=${encodeURIComponent(disk)}&operation=${encodeURIComponent(operation)}&screen=${encodeURIComponent(screen)}&vga=${encodeURIComponent(vga)}
            `}>
                <div className={cx('item')}>

                    <img style={{ width: '100%', margin: 'auto', height: '200px', objectFit: 'contain' }} src={src} alt="" />


                    <div className={cx('content')}>
                        <div className={cx('uptitle')}>{uptitle}</div>
                        <div className={cx('downtitle')}>{downtitle}</div>
                        <div className={cx('oldprice')}>{oldprice}</div>
                        <div className={cx('newprice')}>{newprice}</div>
                    </div>

                </div>
            </Link>
        </div>
    );
}

export default Product;