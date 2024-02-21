import React, { createContext, useState, ReactNode, useEffect } from 'react';

interface UserContextType {
  userName: string;
  setUserName: (name: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userName, setUserName] = useState(() => {
    const savedUserName = localStorage.getItem('userName');
    return savedUserName || '';
  });
  
  useEffect(() => {
    localStorage.setItem('userName', userName);
  }, [userName]);

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
