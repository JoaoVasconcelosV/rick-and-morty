import { createContext, useState, useCallback } from 'react';

const UserContext = createContext({
  user: null,
  setVisualizedCharacters: () => {}
});

const defaultUser = {
  name: "You",
  visualizedCharacters: {}
};

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(defaultUser);

  const setVisualizedCharacters = useCallback((character) => {
    setUser((currentUser) => ({
      ...currentUser,
      visualizedCharacters: {
        ...currentUser.visualizedCharacters,
        [character.name]: character
      }
    }));
  }, []);

  return (
    <UserContext.Provider value={{ user, setVisualizedCharacters }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserContextProvider };