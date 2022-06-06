import { useModel } from 'umi';
import styles from './index.less';

const Index = () => {
  const { user } = useModel('user');
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>欢迎你{user.name}</h1>
    </div>
  );
};

export default Index;
