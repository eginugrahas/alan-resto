import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function Transaction() {
    const [openModalBayar, setOpenModalBayar] = useState(false);
    const [openSaveBill, setOpenSaveBill] = useState(false);

    function printBill() {
        window.print();
    }

    return (
        <div className="pt-10 flex px-[10%]">
            <div className="w-full grid grid-cols-3 gap-10">
                <div className="flex flex-col gap-3 rounded shadow-lg w-52 h-60 pb-3 hover:scale-105 cursor-pointer">
                    <div className="border border-black w-52 h-44">img</div>
                    <div className="text-center font-bold">Sate Ayam</div>
                    <div className="text-center text-primary font-bold">
                        Rp. 20.000
                    </div>
                </div>
            </div>
            <div className="min-w-[350px] bg-white min-h-[500px] max-h-[600px] shadow-lg p-5  flex flex-col items-center">
                <div className="text-xl font-bold">
                    <span>
                        <i className="icon-user-circle"></i>
                    </span>{" "}
                    Pesanan
                </div>
                <div className="overflow-y-scroll my-5 w-full">
                    <div className="flex justify-between items-center w-full mt-5">
                        <div className="border border-black w-20 h-16">img</div>
                        <p className="text-sm font-bold">Sate Ayam</p>
                        <p className="text-sm font-bold">X1</p>
                        <p className="text-sm font-bold text-primary">
                            Rp. 20.000
                        </p>
                    </div>
                    <div className="flex justify-between items-center w-full mt-5">
                        <div className="border border-black w-20 h-16">img</div>
                        <p className="text-sm font-bold">Sate Ayam</p>
                        <p className="text-sm font-bold">X1</p>
                        <p className="text-sm font-bold text-primary">
                            Rp. 20.000
                        </p>
                    </div>
                    <div className="flex justify-between items-center w-full mt-5">
                        <div className="border border-black w-20 h-16">img</div>
                        <p className="text-sm font-bold">Sate Ayam</p>
                        <p className="text-sm font-bold">X1</p>
                        <p className="text-sm font-bold text-primary">
                            Rp. 20.000
                        </p>
                    </div>
                    <div className="flex justify-between items-center w-full mt-5">
                        <div className="border border-black w-20 h-16">img</div>
                        <p className="text-sm font-bold">Sate Ayam</p>
                        <p className="text-sm font-bold">X1</p>
                        <p className="text-sm font-bold text-primary">
                            Rp. 20.000
                        </p>
                    </div>
                    <div className="flex justify-between items-center w-full mt-5">
                        <div className="border border-black w-20 h-16">img</div>
                        <p className="text-sm font-bold">Sate Ayam</p>
                        <p className="text-sm font-bold">X1</p>
                        <p className="text-sm font-bold text-primary">
                            Rp. 20.000
                        </p>
                    </div>
                </div>
                <div className="mt-auto w-full">
                    <div className="flex flex-col gap-4">
                        <button className="text-red-500 border border-red-500 p-1 text-center font-bold rounded">
                            Clear Cart
                        </button>
                        <div className="flex justify-between gap-3 w-full items-center">
                            <button
                                onClick={() => setOpenSaveBill(true)}
                                className="bg-green-500 text-white p-1 text-center font-bold rounded w-full"
                            >
                                Save Bill
                            </button>
                            <button onClick={printBill} className="bg-green-500 text-white p-1 text-center font-bold rounded w-full ">
                                Print Bill
                            </button>
                        </div>
                        <button
                            onClick={() => setOpenModalBayar(true)}
                            className="text-white border bg-primary p-1 text-center font-bold rounded"
                        >
                            Charge Rp. 20.000
                        </button>
                    </div>
                </div>
            </div>
            <Popup
                open={openSaveBill}
                closeOnDocumentClick
                repositionOnResize
                onOpen={() =>
                    setTimeout(() => {
                        setOpenSaveBill(false);
                    }, 2500)
                }
                modal
                contentStyle={{ width: "30%", borderRadius: "7px" }}
            >
                <div className="flex flex-col items-center gap-5">
                    <div className="text-green-500 text-xl">Saved!</div>
                    <div className="text-lg">Bill berhasil disimpan</div>
                    <button onClick={()=>setOpenSaveBill(false)} className="rounded bg-primary text-white p-2 px-3">
                        Tutup
                    </button>
                </div>
            </Popup>
            <Popup
                open={openModalBayar}
                onClose={() => setOpenModalBayar(false)}
                modal
                closeOnDocumentClick
                repositionOnResize
                contentStyle={{ borderRadius: "10px" }}
            >
                <div className="p-10">
                    <h3 className="font-semibold text-lg">Detail Pesanan</h3>
                    <div className="flex items-center justify-between">
                        <table className="table-auto border w-full mx-5">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="px-4 py-2">#</th>
                                    <th className="px-4 py-2">Nama</th>
                                    <th className="px-4 py-2">Foto</th>
                                    <th className="px-4 py-2">Harga</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-center">
                                    <td className="px-4 py-2">1</td>
                                    <td className="px-4 py-2">Sate Ayam</td>
                                    <td className="px-4 py-2">img</td>
                                    <td className="px-4 py-2">Rp. 20.000</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="flex flex-col border-s px-5 gap-3 text-center   ">
                            Uang Pembeli(Rp)
                            <input
                                type="text"
                                className="border border-black rounded p-1"
                            />
                            <div className="flex gap-4 w-full">
                                <button
                                    onClick={() => setOpenModalBayar(false)}
                                    className="border border-gray-500 text-ray-500 rounded w-full p-1"
                                >
                                    Close
                                </button>
                                <button className="rounded bg-primary text-white font-semibold w-full p-1">
                                    Pay
                                </button>
                            </div>
                            <span className="text-red-500 text-left font-bold">
                                Kembalian:
                            </span>
                        </div>
                    </div>
                </div>
            </Popup>
        </div>
    );
}

export default Transaction;
