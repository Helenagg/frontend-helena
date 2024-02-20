import React from 'react';

interface UserContextType {
    userName: string;
    setUserName: (name: string) => void;
}

const UserContext = () => {
  return (
    <div>UserContext</div>
  )
}

export default UserContext