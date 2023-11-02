import styles from './Register.module.scss'
import classNames from 'classnames/bind';
import { FaUserAlt } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import Footer from '~/components/Layout/components/Footer';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles)
function handleRegister(event) {
    var password = document.querySelector('.password input').value;
    var confirmPassword = document.querySelector('.confirm-password input').value;
    var message = document.querySelector('.message p')
    if (confirmPassword === '') {

        message.innerHTML = 'Confirm password is required'
    }
    else if (password !== confirmPassword) {
        message.innerHTML = 'Password is not match'
    }
    event.preventDefault();
}
function Register() {
    return (
        <div className={cx('container')}>

            <div className={cx('wrapper')}>
                <div className={cx('form')}>
                    <form action=''>
                        <h1 style={{ textAlign: 'center' }}>Register</h1>
                        <div className={cx('input-box')} style={{ marginTop: '10px' }}>
                            <input type='text' placeholder='Username' required />
                            <FaUserAlt className={cx('icon')} />
                        </div>
                        <div className={cx('input-box', 'password')} style={{ marginTop: '8px' }}>
                            <input type='password' placeholder='Password' required />
                            <FaLock className={cx('icon')} />
                        </div>
                        <div className={cx('input-box', 'confirm-password')} style={{ marginTop: '8px' }}>
                            <input type='password' placeholder='Confirm Password' required />
                            <FaLock className={cx('icon')} />
                        </div>
                        <div className={cx('message')} style={{
                            color: 'red',
                            fontSize: '1.6rem',
                            fontWeight: '600',
                            marginTop: '10px',
                            cursor: 'pointer'
                        }}>
                            <p></p>
                        </div>
                        <div className={cx('remember-forgot')}>
                            <div>     <a href='/'>Forgot password</a></div>
                        </div>
                        <button type='submit' className={cx('btn')} onClick={handleRegister}>Register</button>
                        <div className={cx('register-link')}>
                            <p style={{ marginRight: '5px', cursor: 'pointer' }}>Have an account?
                            </p>
                            <Link to='/login'>   <div><a href='/' style={{ color: 'red', fontWeight: '600' }} >Login</a></div></Link>
                        </div>
                    </form>
                </div>
            </div >
            <Footer></Footer>
        </div >
    )
}

export default Register;