import { FC, useEffect } from 'react';
import styles from './LoginModal.module.css';
import { ModalCommon } from './ModalCommon';
import { Input, Form, Checkbox } from 'antd';
import clsx from 'clsx';
import { Button } from 'components/Button';
import GoogleImg from 'assets/images/GoogleImg.png';
import { Link } from 'react-router-dom';
import MetaMask_Fox from 'assets/images/MetaMask_Fox.png';
import WalletConnect from 'assets/images/WalletConnect.png';
import CoinbaseWallet from 'assets/images/CoinbaseWallet.png';
import TrustWallet from 'assets/images/TrustWallet.png';

interface Props {
  visible: boolean;
  handleCancel: () => void;
  isLogin: Number;
  parentCallback: (lg: number) => void;
}

const rules = [{ required: true, message: 'Please input this field!' }];

const Content: FC<{ isLogin: Number; form: any; parentCallback: (lg: number) => void }> = ({
  isLogin,
  form,
  parentCallback,
}) => {
  return (
    <div className={clsx(styles.root)}>
      <h5 className="mb-4 mt-3 text-left d-inline-block">
        {isLogin === 1
          ? 'LOG IN'
          : isLogin === 2
          ? 'REGISTER'
          : isLogin === 3
          ? 'Forgot Password'
          : isLogin === 4
          ? 'CONNECT A WALLET'
          : 'Resend email active'}
      </h5>
      {isLogin === 1 ? (
        <p className={`d-inline-block float-end`}>
          Not a member yet? <Link to={'/'}>Register now</Link>
        </p>
      ) : isLogin === 2 ? (
        <p className={`d-inline-block float-end`}>
          Are you a member? <Link to={'/'}>Login now</Link>
        </p>
      ) : (
        ''
      )}
      {isLogin === 5 && (
        <p className={`${styles.resendEmail} m-0`}>
          Enter your username or email address and we will send you a link to active email.
        </p>
      )}
      {isLogin !== 4 && (
        <>
          <Form layout="vertical" onFinish={(e) => console.log(e)} form={form}>
            <Form.Item className={clsx(styles.formItem, 'mb-3')} label="Enter your email" name="email" rules={rules}>
              <Input className={clsx(styles.customInput, 'py-2')} />
            </Form.Item>
            {isLogin !== 3 && isLogin !== 5 && (
              <Form.Item className={clsx(styles.formItem, 'mb-3')} label="Password" name="password" rules={rules}>
                <Input.Password className={clsx(styles.customInput, 'pt-2')} />
              </Form.Item>
            )}
            {isLogin === 2 && (
              <>
                <Form.Item
                  label="Confirm Password"
                  className={clsx(styles.formItem, 'mb-3')}
                  name="confirmPassword"
                  rules={rules}
                >
                  <Input.Password className={clsx(styles.customInput, 'py-2')} />
                </Form.Item>
                <Form.Item name="checkBox">
                  <Checkbox className={clsx(styles.checkBoxTerm, 'align-items-center')}>
                    <p className={clsx(styles.texTerm, 'mb-3')}>
                      By creating an account you agree to the Terms of Service and Privacy Policy
                    </p>
                  </Checkbox>
                </Form.Item>
              </>
            )}
            <Form.Item className={isLogin === 2 ? '' : 'my-5'}>
              <Button className={clsx(styles.customBtnCommon, 'w-100')} htmlType={'submit'}>
                {isLogin === 1
                  ? 'LOG IN'
                  : isLogin === 2
                  ? 'SIGN UP'
                  : isLogin === 5
                  ? 'Resend Active Email'
                  : 'SUBMIT'}
              </Button>
            </Form.Item>
          </Form>
          <div className={`${styles.loginSocial} text-center mt-4`}>
            {isLogin === 1 ? (
              <Link to={'/'} onClick={() => parentCallback(3)}>
                Forgot your password
              </Link>
            ) : isLogin === 2 ? (
              <Link to={'/'} onClick={() => parentCallback(5)}>
                Resend active email
              </Link>
            ) : isLogin === 5 ? (
              <Link to={'/'} onClick={() => parentCallback(-1)}>
                Back
              </Link>
            ) : (
              ''
            )}
          </div>
        </>
      )}
      {isLogin === 4 && (
        <div className={`${styles.walletList} d-flex flex-column`}>
          <Link to={'/'} className={`d-flex justify-content-between align-items-center px-3 py-2`}>
            <div>MetaMask</div>
            <div>
              <img src={MetaMask_Fox} alt="" />
            </div>
          </Link>
          <Link to={'/'} className={`d-flex justify-content-between align-items-center px-3 py-2`}>
            <div>Wallet Connect</div>
            <div>
              <img src={WalletConnect} alt="" />
            </div>
          </Link>
          <Link to={'/'} className={`d-flex justify-content-between align-items-center px-3 py-2`}>
            <div>Coinbase Wallet</div>
            <div>
              <img src={CoinbaseWallet} alt="" />
            </div>
          </Link>
          <Link to={'/'} className={`d-flex justify-content-between align-items-center px-3 py-2`}>
            <div>Trust Wallet</div>
            <div>
              <img src={TrustWallet} alt="" />
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export const LoginModal: FC<Props> = ({ visible, handleCancel, isLogin, parentCallback }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.resetFields();
  }, [visible, isLogin]);

  return (
    <ModalCommon
      visible={visible}
      handleCancel={handleCancel}
      content={<Content isLogin={isLogin} form={form} parentCallback={parentCallback} />}
    />
  );
};
