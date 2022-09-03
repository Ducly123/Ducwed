import { FC } from 'react';
import styles from './Footer.module.css';
import clsx from 'clsx';
import { Layout as AntdLayout, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import Twitter from 'assets/images/Twitter.png';
import Instagram from 'assets/images/Instagram.png';
import Discord from 'assets/images/Discord.png';
import RHTImg from 'assets/images/RHT-DigiCapital1.png';

export const Footer: FC = () => {
  return (
    <AntdLayout.Footer className={clsx(styles.root, '')}>
      <div className={clsx(styles.content, 'container text-center')}>
        <Row className="">
          <Col span={24}>
            <h2 className={clsx(styles.menu, styles.menuLeft, 'mb-0 text-center')}>
              <Link to={'/'}>VERDANT</Link>
            </h2>
            <div className={`${styles.logoWrapper} d-flex align-items-center justify-content-center mt-2`}>
              <p className={`${styles.logoP} mb-0 text-center`}>Powered by</p>
              <img className={`${styles.logo} ml-2`} src={RHTImg} alt="img" />
            </div>
          </Col>
          <Col span={24} className={`mt-5 mb-2`}>
            <Row className={clsx(styles.border, 'w-100 d-flex justify-content-between align-items-center mb-2')}>
              <Link to={'/'}>NEWSLETTER</Link>
              <span></span>
              <Link to={'/'}>ABOUT</Link>
              <span></span>
              <Link to={'/'}>PRIVACY POLICY</Link>
              <span></span>
              <Link to={'/'}>TERMS OF SERVICE</Link>
              <span></span>
              <Link to={'/'}>SUPPORT</Link>
              <span></span>
              <Link to={'/'}>WEBSITE TERMS AND CONDITIONS</Link>
            </Row>
          </Col>
          <Col span={24} className={`d-flex justify-content-center mb-2`}>
            <div className={`${styles.contact} d-flex justify-content-between`}>
              <p className="text-decoration-underline">digicap@gmail.com</p>
              <p>/</p>
              <p>+ 82 12345678</p>
            </div>
          </Col>
          <Col span={24}>
            <p>
              <img className="pe-3" alt="twitter" src={Twitter} />
              <img className="pe-3" alt="instagram" src={Instagram} />
              <img className="pe-3" alt="discord" src={Discord} />
            </p>
          </Col>
        </Row>
      </div>
    </AntdLayout.Footer>
  );
};
