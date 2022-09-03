import { Menu, Layout, Space, Form } from 'antd';
import clsx from 'clsx';
import { Button } from 'components/Button';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from './Desktop.module.less';
import { navigationRoutes } from './routes';
import { LoginModal } from 'components/Modal';
import { routesEnum } from 'pages/Routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Input } from 'components/Input';
import Bell from 'assets/images/bell.png';
import User from 'assets/images/user.png';

const NavbarDesktop = () => {
  const history = useHistory();
  const [isLogin, setIsLogin] = useState(-1);

  return (
    <Layout.Header className={styles.root}>
      <div className={clsx('container-fluid', styles.content)}>
        <Link className={clsx(styles.logo, 'fs-2 fw-bolder me-3 lh-1 text-white')} to={routesEnum.home}>
          Verdant
        </Link>
        <Menu mode="horizontal" className={clsx(styles.menu)}>
          {navigationRoutes.map((route) => (
            <Menu.Item key={route.path} onClick={() => history.push(route.path)}>
              <strong>{route.title}</strong>
            </Menu.Item>
          ))}
        </Menu>
        <div className={styles.rightMenu}>
          <Space align="center" className={styles.buttons}>
            <Form.Item>
              <Input
                // value={search}
                className={styles.searchInput}
                // onChange={(e) => setSearch(e.target.value.replace(/[^a-zA-Z0-9_]/g, ''))}
                placeholder={'SEARCH'}
                suffix={<FontAwesomeIcon color="#788686" icon={faSearch} className={styles.searchIcon} />}
              />
            </Form.Item>
            {isLogin >= 0 ? (
              <>
                <Button
                  type="link"
                  onClick={() => {
                    setIsLogin(4);
                  }}
                >
                  Connect Wallet
                </Button>
                <Button
                  type="link"
                  onClick={() => {
                    setIsLogin(1);
                  }}
                >
                  Login
                </Button>
                <Button
                  type="primary"
                  onClick={() => {
                    setIsLogin(2);
                  }}
                >
                  Register
                </Button>
              </>
            ) : (
              <>
                <Button className="mx-3" type="link">
                  MY COLLECTION
                </Button>
                <Link to={'/'}>
                  <img src={Bell} alt="Bell" />
                </Link>
                <Link className="mx-3" to={'/profile'}>
                  <img src={User} alt="User" />
                </Link>
              </>
            )}
          </Space>
        </div>
      </div>
      <LoginModal
        visible={isLogin > 0}
        handleCancel={() => setIsLogin(0)}
        isLogin={isLogin}
        parentCallback={(lg) => setIsLogin(lg)}
      />
    </Layout.Header>
  );
};

export default NavbarDesktop;
