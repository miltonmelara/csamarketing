import React, { createContext, useRef } from 'react';

const SectionContext = createContext();

const SectionProvider = ({ children }) => {
  const formRef = useRef(null);

  return (
    <SectionContext.Provider value={{ formRef }}>
      {children}
    </SectionContext.Provider>
  );
};

export { SectionContext, SectionProvider };
