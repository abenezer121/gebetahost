import React, { createContext, useState } from "react";
export const UserContext = createContext();


// This context provider is passed to any component requiring the context
export const UserProvider = ({ children }) => {
  const [name, setName] = useState(null);
  const [id, setLocation] = useState(null);
  const [amount , setAmount] = useState(0)

  return (
    <UserContext.Provider
      value={{
        name,
        id,
        amount ,
        setAmount,
        setName,
        setLocation
      }}
    >
      {children}
    </UserContext.Provider>
  );
};