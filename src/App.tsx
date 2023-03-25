import React from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import MainPage from "./pages/MainPage";
import BookPage from "./pages/BookPage";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import { useAppDispatch } from "./app/hooks";
import { dataActions } from "./features/data-action";
import { ErrorPage } from "./pages/ErrorPage";

function App() {
  const status = useSelector((state: RootState) => state.fetchData.status);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  if (status === "error") {
    dispatch(dataActions.pendingRequest("idle"));
    navigate("/error");
  }

  return (
    <>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/book/:id" element={<BookPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
