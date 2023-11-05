import styles from './Cart.module.scss'
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { AiOutlineTag } from 'react-icons/ai';
import Footer from '~/components/Layout/components/Footer';
const cx = classNames.bind(styles)
function Cart() {
    const [count, setCount] = useState(0)
    const [carts, setCarts] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const totalSum = carts.reduce((total, item) => {
            return total + item.newprice * count
        }, 0)
        setTotal(totalSum)
    }, [carts])
    function handlePlush() {

        setCount(prev => prev + 1)

    }
    function handleMinus(id) {

        fetch(`http://localhost:3000/carts/${id}?count=${count}`, {
            _method: 'PATCH',
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            },
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': ''
            },
            data: JSON.stringify(),
            credentials: 'include'
        })
            .then(res => res.json())
            .then(res => {
                return res
            })
            .catch(err => console.error(err))
    }
    useEffect(() => {
        if (count < 0) {
            setCount(0)
        }
    }, [count])
    useEffect(() => {
        fetch('http://localhost:3000/carts')
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [])

    return (
        <div>
            <div className={cx('container')}>
                <div className={cx('wrapper')}>
                    <div className={cx('product')}>
                        <div className={cx('product-header')}>

                            <h1>Giỏ hàng</h1>
                            <div className={cx('delete-all')}>Xóa tất cả</div>

                        </div>
                        <div style={{ padding: '16px' }}>
                            <div className={cx('lable')}>
                                <p style={{ fontWeight: '700' }}>
                                    CÔNG TY CỔ PHẦN THƯƠNG MẠI DỊCH VỤ PHI LONG
                                </p>
                                <div style={{ width: '78.63px', textAlign: 'center' }}>Đơn giá</div>
                                <div style={{ width: '78.24px', textAlign: 'center' }}>Số lượng</div>
                                <p>Thành tiền</p>

                            </div>

                            {carts.map((item, index) => {
                                return (
                                    <div className={cx('item-wrapper')} key={index}>
                                        <div className={cx('info')}>

                                            <div className={cx('item-name')}>
                                                <div style={{ border: '1px solid #f0f0f0', width: '80px', height: '80px' }}>
                                                    <img src={item.src} alt=''>

                                                    </img>
                                                </div>
                                                <div className={cx('name')}>
                                                    <p> {item.title}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className={cx('new-price')}>
                                                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.newprice)}

                                                </div>
                                                <div className={cx('old-price')}>
                                                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.oldprice)}
                                                </div>
                                            </div>

                                            <div className={cx('quantity')}>

                                                <div className={cx('minus')} onClick={() => handleMinus(item.id)}>
                                                    <button>-</button>
                                                </div>

                                                <input style={{ textAlign: 'center' }} value={item.count} onChange={(e) => { setCount(e.target.value) }} className={cx('number')} />


                                                <div className={cx('plus')} onClick={handlePlush}>
                                                    <button>+</button>
                                                </div>
                                            </div>

                                            <div className={cx('total')}>
                                                {console.log(item.newprice * count)}


                                            </div>



                                        </div>

                                    </div>
                                )
                            })}

                        </div>
                    </div>
                    <div style={{ marginLeft: ' 16px', marginTop: '64px', flex: '2' }}>
                        <div className={cx('pay')}>
                            <div className={cx('promotion')}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <p>Khuyến mãi</p>
                                    <div className={cx('select-promotion')} >
                                        <AiOutlineTag /> Chọn hoặc nhập mã khuyến mãi
                                    </div>
                                </div>
                                <p style={{ fontSize: '1.5rem', color: '#82869e' }}>Đơn hàng chưa đủ điều kiện áp dụng khuyến mãi. Vui lòng mua thêm để áp dụng</p>
                            </div>

                        </div>
                        <div className={cx('confirm-pay')}>
                            <div style={{ fontWeight: '700' }}>Thanh toán</div>
                            <div className={cx('pay-end')}><p>Tổng tạm tính</p><p></p></div>
                            <div className={cx('pay-end')}><p>Tổng tiền</p> </div>
                            <div className={cx('pay-end')}>(Đã bao gồm VAT)</div>
                            <button className={cx('btn-ctn')}>TIẾP TỤC</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Cart