import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Food from "./pages/Food";
import Transaction from "./pages/Transaction";
import AddFood from "./pages/AddFood";
import "./App.css";
import { Toaster } from 'react-hot-toast';

function App() {
    return (
        <>
            <main className="bg-slate-100 min-h-screen">
                <Header />
                <Routes>
                    <Route path="/" element={<Transaction />} />
                    <Route path="/food" element={<Food />} />
                    <Route path="/food/add" element={<AddFood />} />
                </Routes>
                <Toaster />
            </main>
        </>
    );
}

export default App;
