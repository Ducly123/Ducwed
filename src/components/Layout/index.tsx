import { FC } from 'react';
import styles from './Layout.module.css';
import { Layout as AntdLayout } from 'antd';
import { Footer } from './Footer';
import { ConfigProvider as AntdConfigProvider } from 'antd';
import clsx from 'clsx';
import Navbar from './Navbar';

export const Layout: FC = ({ children }) => {
  return (
    <AntdConfigProvider>
      <AntdLayout className={clsx(styles.root)}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </AntdLayout>
    </AntdConfigProvider>
  );
};
