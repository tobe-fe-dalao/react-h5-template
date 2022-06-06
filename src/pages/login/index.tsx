import { login } from '@/services/user';
import { Button, Form, Input } from 'antd-mobile';
import { history, useModel, useRequest } from 'umi';
import styles from './index.less';

const Index = () => {
  const { run } = useRequest(login, { manual: true });
  const { setUser } = useModel('user');
  const onFinish = (values: any) => {
    run(values).then((res) => {
      history.push('/');
      setUser(res);
    });
  };

  return (
    <div className={styles.login}>
      <section className={styles.title}>登录</section>
      <Form
        className={styles.form}
        layout="horizontal"
        footer={
          <Button block type="submit" color="primary" size="large">
            提交
          </Button>
        }
        onFinish={onFinish}
      >
        <Form.Item name="username" rules={[{ required: true, message: '用户名不能为空' }]}>
          <Input autoComplete="off" placeholder="请输入用户名" />
        </Form.Item>
        <Form.Item name="pwd" rules={[{ required: true, message: '密码不能为空' }]}>
          <Input autoComplete="new-password" type="password" placeholder="密码" />
        </Form.Item>
      </Form>
    </div>
  );
};

export default Index;
