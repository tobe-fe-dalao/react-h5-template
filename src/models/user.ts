import { useState } from 'react';

interface userInfo {
  name: string;
  age: number;
}

const useUser = () => {
  const [user, setUser] = useState<userInfo>({ name: '', age: 0 });

  return {
    user,
    setUser,
  };
};

export default useUser;
