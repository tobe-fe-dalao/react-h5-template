import Header from '@/components/Navbar';
import { ConfigProvider } from 'antd-mobile';
import zhCN from 'antd-mobile/es/locales/zh-CN';
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { KeepAlive } from 'react-activation';
import type { IRoute } from 'umi';
import { history } from 'umi';

interface ILayoutProps {
  route: IRoute;
}
const Layout: FC<ILayoutProps> = (props) => {
  const [title, setTitle] = useState('');
  const {
    location: { pathname, search },
  } = history;
  const { children, route } = props;
  const isKeepAlive = route?.routes?.find((item) => item?.path === pathname)?.keepAlive || false;

  useEffect(() => {
    if (children) {
      setTimeout(() => {
        setTitle(document.title);
      }, 100);
    }
  }, [children]);
  return (
    <>
      <Header title={title} />

      <ConfigProvider locale={zhCN}>
        <KeepAlive
          name={pathname}
          id={`${pathname}${search}`}
          when={isKeepAlive}
          saveScrollPosition="screen"
        >
          {children}
        </KeepAlive>
      </ConfigProvider>
    </>
  );
};

export default Layout;
