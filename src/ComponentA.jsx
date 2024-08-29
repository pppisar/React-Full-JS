import React, { createContext, useContext, useState } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();

// Provider component
function ComponentA() {
  const [user, setUser] = useState("pppisar");

  return (
    <div className="box">
      <h1>ComponentA</h1>
      <h2>{`Hello ${user}`}</h2>
      <UserContext.Provider value={user}>
        <ComponentB user={user} />
      </UserContext.Provider>
    </div>
  );
}

export default ComponentA;
