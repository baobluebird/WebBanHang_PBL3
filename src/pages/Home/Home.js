import classNames from "classnames/bind";
import styles from './Home.module.scss'
import Product from "~/components/Layout/components/Product";
const cx = classNames.bind(styles)
function Home() {
    return (

        <div className={cx('wrapper')}>
            <div className={cx('titleProduct')}>SẢN PHẨM KHUYẾN MÃI HOT NHẤT</div>
            <div className={cx('container')}>
                <Product uptitle="Laptop ACER Aspire 5 A514-56P-35X7" downtitle=" (Intel Core i5-12450, RAM 8GB, SSD 512GB, VGA Intel UHD, Màn Hình 15.6 inch FHD, Windows 11, Màu Đen, Chính Hãng)" oldprice="16.990.000đ" newprice="13.9990.000" src='https://philong.com.vn/media/product/250-31398-laptop_acer_gaming_aspire.png' />
                <Product uptitle="Laptop Gaming Acer Nitro 16  " downtitle="(AMD Ryzen 7-7840HS, Ram 16GB, SSD 512GB, đồ họa RTX 4060 8GB, màn hình 16 inch WQXGA, Win 11 bản quyền, màu đen)" oldprice="29.990.000đ" newprice="26.990.000đ" src='https://lh3.googleusercontent.com/YSGzzyiivz6GBZi825qGOEyePXHoz4hDb_Vj3PnVe9qiSGxQZViXQPSiFs8JkL5VKogBs0z9bX-49tgqR1Tj2jaSZOpxEL8=w500-rw' />
                <Product uptitle="Laptop MSI Stealth 16 Studio A13VG" downtitle="(i9-13900H/RAM 32GB/2TB SSD/ Windows 11)" oldprice="80.9900.000đ" newprice="73.990.000đ" src='https://lh3.googleusercontent.com/YdZGSWwL2qP3Ifs6KUzLbRB06mqS9BjQh7Qq9shBAqteR_2-N59fYnfiLQQjdW0tiyc1W_lzp-fXGrbeehcbUiXyuJ3pyAie=w500-rw' />
                <Product uptitle="MacBook Air 15 M2" downtitle="8C CPU 10C GPU 16GB 256GB SSD (Midnight)" oldprice="39.990.000đ" newprice="36.990.000đ" src='https://lh3.googleusercontent.com/A6kELJhIqUv4NKv5krIIzT6rO1K_UnAWbJlpp3PpOSQ83XTNNSPCibEjRrrZ6I4acOxtCjzzDUNxKVHPveZEelu1EuWlImkD=w500-rw' />
                <Product uptitle="Laptop ASUS TUF Gaming F15" downtitle="FX506HF-HN014W (i5-11400H/RAM 8GB/512GB SSD/ Windows 11)" oldprice="19.990.000đ" newprice="17.590.000đ" src="https://lh3.googleusercontent.com/7SVP5jnc8jIucbASgCTPdjaFEU2bF-QHeePjBvhit0R1vJLKsL3vImB1-Umr4uaSXcZOLG-msCNhOuOUqU6AJDCtwcmvvgKReQ=w500-rw" />

            </div>
        </div>
    );
}

export default Home;