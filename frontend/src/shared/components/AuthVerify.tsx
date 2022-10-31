import React, { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import decodeJwt from 'jwt-decode';

// const decodeJwt = (token: string) => {
//   return JSON.parse(atob(token.split('.')[1]));
// }

const AuthVerify: FC<{ signOut: () => void }> = ({ signOut }) => {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem('user') as string);
  useEffect(() => {
    const decodedToken: any = decodeJwt(user?.token);
    if(decodedToken?.exp * 1000 < Date.now()) {
      localStorage.clear();
      signOut();
    }
  },[location, signOut]);

  return <></>
}

export default AuthVerify;