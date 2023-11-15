import React from "react";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import { parsingRibuan } from "../helpers";

function ModalCharge(openModalBayar, setOpenModalBayar, cart) {
    return (
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
                                {cart ? cart.map((item, index) => {
                                    return(
                                        <tr key={index}>
                                            <td className="px-4 py-2 text-center">{index++ + 1}</td>
                                            <td className="px-4 py-2">{item.name}</td>
                                            <td className="px-4 py-2" align="center">
                                                <img
                                                    src={
                                                        "http://localhost:8000/uploaded-images/" +
                                                        item.image
                                                    }
                                                    alt={item.name}
                                                    className="w-[50px] h-[50px] object-cover"
                                                />
                                            </td>
                                            <td className="px-4 py-2">Rp. {parsingRibuan(item.price)}</td>
                                        </tr>
                                    )
                                }): null}
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
    );
}

export default ModalCharge;
