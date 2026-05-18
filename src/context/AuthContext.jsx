import {
  createContext,
  useContext,
  useState,
} from "react";

const AuthContext =
  createContext();

function AuthProvider({
  children,
}) {

  const [user, setUser] =
    useState(() => {

      const savedUser =
        localStorage.getItem(
          "currentUser"
        );

      return savedUser
        ? JSON.parse(savedUser)
        : null;
    });

  // Signup
  const signup = (
    name,
    email,
    password
  ) => {

    const users =
      JSON.parse(
        localStorage.getItem(
          "users"
        )
      ) || [];

    // Check duplicate email
    const existingUser =
      users.find(
        (u) =>
          u.email === email
      );

    if (existingUser) {
      return {
        success: false,
        message:
          "Email already exists",
      };
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
    };

    users.push(newUser);

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    return {
      success: true,
      message:
        "Signup successful",
    };
  };

  // Login
  const login = (
    email,
    password
  ) => {

    const users =
      JSON.parse(
        localStorage.getItem(
          "users"
        )
      ) || [];

    const foundUser =
      users.find(
        (u) =>
          u.email === email &&
          u.password ===
            password
      );

    if (!foundUser) {
      return {
        success: false,
        message:
          "Invalid credentials",
      };
    }

    setUser(foundUser);

    localStorage.setItem(
      "currentUser",
      JSON.stringify(
        foundUser
      )
    );

    return {
      success: true,
      message:
        "Login successful",
    };
  };

  // Logout
  const logout = () => {

    setUser(null);

    localStorage.removeItem(
      "currentUser"
    );
     window.location.href =
    "/";
  };

  const isAuthenticated =
    !!user;

  return (
    <AuthContext.Provider
      value={{
        user,
        signup,
        login,
        logout,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export const useAuth =
  () =>
    useContext(
      AuthContext
    );