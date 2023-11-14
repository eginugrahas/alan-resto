import React from "react";
import { NavLink } from "react-router-dom";

function Food() {
    return (
        <div className="pt-10 px-[10%]">
            <div className="text-lg mb-5">
                Tambahkan menu makanan yang ada di resto
            </div>
            <div className="bg-white shadow-lg p-5">
                <div className="mb-5">
                    <NavLink to={"/food/add"}>
                        <button className="bg-primary hover:bg-opacity-95 text-center py-2 px-4 rounded text-white font-semibold">
                            + Tambah Menu
                        </button>
                    </NavLink>
                </div>
                <table className="table-auto w-full">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2 w-[10%]">#</th>
                            <th className="px-4 py-2 text-left">Nama</th>
                            <th className="px-4 py-2 w-[50%]">Foto</th>
                            <th className="px-4 py-2 text-left">Harga</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2 text-center">1</td>
                            <td className="px-4 py-2">Sate Ayam</td>
                            <td className="px-4 py-2 text-center">img</td>
                            <td className="px-4 py-2">Rp. 20.000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Food;
