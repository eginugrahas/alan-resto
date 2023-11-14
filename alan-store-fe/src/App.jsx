import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Food from "./pages/Food";
import Transaction from "./pages/Transaction";
import "./App.css";
import Modal from "./components/Modal";

function App() {
    return (
        <>
            <main className="bg-slate-100 min-h-screen">
                <Header />
                <Routes>
                    <Route path="/" element={<Transaction />} />
                    <Route path="/food" element={<Food />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
