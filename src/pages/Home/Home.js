import classNames from "classnames/bind";
import styles from './Home.module.scss'
import Product from "~/components/Layout/components/Product";
import 'swiper/css';
import 'swiper/css/bundle';
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cx = classNames.bind(styles)

function Home() {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 1

    // };
    const dataProduct = [
        {
            id: 1,
            uptitle: 'Laptop ACER Aspire 5 A514',
            downtitle: ' (Intel Core i5-12450, RAM 8GB, SSD 512GB, VGA Intel UHD, Màn Hình 15.6 inch FHD, Windows 11, Màu Đen, Chính Hãng)',
            oldprice: '16.990.000đ',
            newprice: '13.9990.000',
            src: 'https://philong.com.vn/media/product/250-31398-laptop_acer_gaming_aspire.png',
            cpu: 'Intel Core i5-124550 (upto 5.0GHz, 12MB)',
            ram: '8GB',
            disk: ' 512GB PCIe NVMe SSD (nâng cấp tối đa 1 TB PCIe Gen4, 16 Gb/s, NVMe)',
            operation: 'Windows 11 Home SL 64-bit',
            screen: '15.6" FHD (1920 x 1080) IPS, 60Hz, 45% NTSC, 250 nits, Narrow Border',
            vga: 'Intel UHD Graphics',

        },
        {
            id: 2,
            uptitle: 'Laptop Gaming Acer Nitro 16  ',
            downtitle: '(AMD Ryzen 7-7840HS, Ram 16GB, SSD 512GB, đồ họa RTX 4060 8GB, màn hình 16 inch WQXGA, Win 11 bản quyền, màu đen)',
            oldprice: '29.990.000đ',
            newprice: '26.990.000đ',
            src: 'https://lh3.googleusercontent.com/YSGzzyiivz6GBZi825qGOEyePXHoz4hDb_Vj3PnVe9qiSGxQZViXQPSiFs8JkL5VKogBs0z9bX-49tgqR1Tj2jaSZOpxEL8=w500-rw',
            cpu: 'AMD Ryzen 5-7535HS (3.30GHz up to 4.55GHz, 16MB Cache)',
            ram: '16GB DDR5 4800Mhz khe rời (2 khe, tối đa 32GB)',
            disk: '  512GB PCIe NVMe SED SSD cắm sẵn',
            operation: 'Windows 11 Home SL 64-bit',
            screen: '16 inch WUXGA (1920 x 1200) IPS 165Hz SlimBezel, sRGB 100%, 400 nits',
            vga: 'NVIDIA GeForce RTX 4050 6GB GDDR6'
        },
        {
            id: 3,
            uptitle: 'Laptop MSI Stealth 16 Studio ',
            downtitle: '(i9-13900H/RAM 32GB/2TB SSD/ Windows 11)',
            oldprice: '80.9900.000đ',
            newprice: '73.990.000đ',
            src: 'https://lh3.googleusercontent.com/YdZGSWwL2qP3Ifs6KUzLbRB06mqS9BjQh7Qq9shBAqteR_2-N59fYnfiLQQjdW0tiyc1W_lzp-fXGrbeehcbUiXyuJ3pyAie=w500-rw',
            cpu: 'Intel Core i9-13900H 2.2GHz up to 5.4GHz 36MB',
            disk: '2TB SSD PCIE G4X4 (2 slots M.2 NVMe PCIe Gen4)',
            screen: ' 16inch UHD+(3840x2160), 16:10, 120Hz, 100% DCI-P3, IPS-level Panel',
            ram: '(16x2) DDR5 5200MHz (2x SO-DIMM socket, up to 64GB SDRAM)',
            vga: ' NVIDIA GeForce RTX 4070 8GB GDDR6',
            operation: 'Windows 11 Home SL 64-bit',
        },
        {
            id: 4,
            uptitle: 'MacBook Air 15 M2',
            downtitle: '8C CPU 10C GPU 16GB 256GB SSD (Midnight)',
            oldprice: '39.990.000đ',
            newprice: '36.990.000đ',
            src: 'https://lh3.googleusercontent.com/A6kELJhIqUv4NKv5krIIzT6rO1K_UnAWbJlpp3PpOSQ83XTNNSPCibEjRrrZ6I4acOxtCjzzDUNxKVHPveZEelu1EuWlImkD=w500-rw',
            cpu: 'Apple M2 (8 nhân CPU, tốc độ 100GB/s memory bandwidth)',
            screen: '15.3inch Liquid Retina (2880x1864), IPS, 500nits',
            ram: '8GB (hãng không công bố bus Ram, không nâng cấp)',
            vga: 'Card đồ họa tích hợp 10 nhân GPU',
            operation: 'Mac OS'

        },
        {
            id: 5,
            uptitle: 'Laptop ASUS TUF Gaming F15',
            downtitle: 'FX506HF-HN014W (i5-11400H/RAM 8GB/512GB SSD/ Windows 11)',
            oldprice: '19.990.000đ',
            newprice: '17.590.000đ',
            src: 'https://lh3.googleusercontent.com/7SVP5jnc8jIucbASgCTPdjaFEU2bF-QHeePjBvhit0R1vJLKsL3vImB1-Umr4uaSXcZOLG-msCNhOuOUqU6AJDCtwcmvvgKReQ=w500-rw',
            cpu: 'Intel Core i5-11400H Processor 2.7 GHz (12M Cache, up to 4.5 GHz, 6 Cores)',
            ram: '8GB DDR4 3200MHz (2x SO-DIMM socket, up to 32GB SDRAM)',
            disk: '512GB SSD M.2 PCIE G3X2, 1x slot M.2',
            screen: '15.6inch FHD (1920 x 1080) IPS, 144Hz, Wide View, 250nits, Narrow Bezel',
            vga: 'NVIDIA GeForce RTX 2050 Laptop GPU',
            operation: 'Windows 11 Home SL 64-bit'
        }
    ]
    return (

        <div className={cx('wrapper')}>
            <div className={cx('titleProduct')}>SẢN PHẨM KHUYẾN MÃI HOT NHẤT</div>


            {/* <Slider {...settings}> */}
            <div className={cx('container')}>
                {dataProduct.map((item, index) => {
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
                })}
            </div>
            {/* 
                </Slider> */}


        </div>
    );
}

export default Home;