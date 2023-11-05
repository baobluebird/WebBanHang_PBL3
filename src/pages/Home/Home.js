import classNames from "classnames/bind";
import styles from './Home.module.scss'
import Product from "~/components/Layout/components/Product";
import 'swiper/css';
import 'swiper/css/bundle';
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";

const cx = classNames.bind(styles)

function Home() {

    const productApi = 'http://localhost:3000/product'

    const [products, setProducts] = useState([])


    useEffect(() => {
        fetch(productApi)
            .then(response => response.json())
            .then((data) => {
                setProducts(data)
            })
    }, [])

    return (

        <div className={cx('wrapper')}>
            <div id="sp" className={cx('titleProduct')}>SẢN PHẨM KHUYẾN MÃI HOT NHẤT</div>


            {/* <Slider {...settings}> */}
            <div className={cx('container')}>
                {


                    products.map((item, index) => {
                        return (


                            <Product
                                key={index}
                                uptitle={item.uptitle}
                                downtitle={item.downtitle}
                                oldprice={item.oldprice}
                                newprice={item.newprice}
                                src={item.src}
                                cpu={item.cpu}
                                ram={item.ram}
                                disk={item.disk}
                                operation={item.operation}
                                screen={item.screen}
                                vga={item.vga}

                            />





                        )
                    })

                }
            </div>
            {/* 
                </Slider> */}


        </div>
    );
}

export default Home;