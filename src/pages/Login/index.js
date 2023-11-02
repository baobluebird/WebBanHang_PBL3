import styles from './Login.module.scss'
import classNames from 'classnames/bind';
import { FaUserAlt } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import Footer from '~/components/Layout/components/Footer';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles)
function Login() {
    return (
        <div className={cx('container')}>

            <div className={cx('wrapper')}>
                <div className={cx('form')}>
                    <form action=''>
                        <h1 style={{ textAlign: 'center' }}>Login</h1>
                        <div className={cx('input-box')} style={{ marginTop: '10px' }}>
                            <input type='text' placeholder='Username' required />
                            <FaUserAlt className={cx('icon')} />
                        </div>
                        <div className={cx('input-box')} style={{ marginTop: '8px' }}>
                            <input type='password' placeholder='Password' required />
                            <FaLock className={cx('icon')} />
                        </div>
                        <div className={cx('remember-forgot')}>
                            <label><input type='checkbox' />Remember me</label>
                            <div>     <a href='/'>Forgot password</a></div>
                        </div>
                        <button style={{ marginTop: '20px' }} type='submit' className={cx('btn')}>Login</button>
                        <div className={cx('register-link')}>
                            <p style={{ marginRight: '5px', cursor: 'pointer' }}>Don't have an account?
                            </p>
                            <Link to='/register'>   <div><a href='/' style={{ color: 'red', fontWeight: '600' }} >Register</a></div></Link>
                        </div>
                    </form>
                </div>
            </div >
            <Footer></Footer>
        </div>
    )
}

export default Login;