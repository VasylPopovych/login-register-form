import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../..";
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";
import { observer } from "mobx-react-lite";


const AuthPage: React.FC = () => {
  const { store } = useContext(Context);
  const [isNeedRegister, setIsNeedRegister] = useState(store.isNeedRegister);
  useEffect(() => {
    setIsNeedRegister(store.isNeedRegister);
  }, [store.isNeedRegister]);


  if (isNeedRegister || sessionStorage.isNeedRegister) {
    return (
      <SignUpPage />
    );
  }

  return (
    <SignInPage />
  );

};

export default observer(AuthPage);