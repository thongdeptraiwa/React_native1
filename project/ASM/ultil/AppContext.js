import React, {createContext, useState} from 'react';

export const AppContext = createContext();

export const AppContextProvider = props => {

  const {children} = props;
  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  
  return (
    <AppContext.Provider value={{Email : Email, setEmail: setEmail, Name: Name, setName: setName}}>
        {children}
    </AppContext.Provider>
  );
};
