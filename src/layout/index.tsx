import Header from '@/components/Header';
import { ConfigProvider } from 'antd-mobile';
import zhCN from 'antd-mobile/es/locales/zh-CN';

const Layout = (props: any) => {
  const { children } = props;
  return (
    <>
      <Header />
      <ConfigProvider locale={zhCN}>{children}</ConfigProvider>
    </>
  );
};

export default Layout;
