import React from "react";
import TodoPage from "../pages/TodoPage";
import AuthPage from "../pages/AuthPage";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./header";
import {useSelector} from "react-redux";

function App() {
  const user = useSelector((state) => state.user.user);

  return (
    <>
      <Header />
      <Routes>
        {user ? (
          <Route path={`/*`} element={<TodoPage />} />
        ) : (
          <>
            <Route path={"/"} element={<AuthPage />} />
            <Route path={"*"} element={<Navigate to={"/"} replace />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
