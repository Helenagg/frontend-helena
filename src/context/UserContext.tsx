import React, { createContext, useState, ReactNode } from 'react';

interface UserContextType { 
  userName: string;  
  setUserName: (name: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{children: ReactNode}> = ({ children }) => {  
  const [userName, setUserName] = useState('');

  return (    
    <UserContext.Provider value={{ userName, setUserName }}>      
      {children}    
    </UserContext.Provider>  
  );
};

export default UserContext;