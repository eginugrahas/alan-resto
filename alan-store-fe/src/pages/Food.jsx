import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { parsingRibuan } from "../helpers";

function Food() {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/menu").then((res) => {
            // console.log(res);
            setMenu(res.data.data);
            // console.log(menu);
        });
    }, []);

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
                        {menu
                            ? menu.map((item, index) => {
                                  return (
                                      <tr key={index}>
                                          <td className="px-4 py-2 text-center">
                                              {index++ + 1}
                                          </td>
                                          <td className="px-4 py-2">
                                              {item.name}
                                          </td>
                                          <td
                                              className="px-4 py-2"
                                              align="center"
                                          >
                                              <img
                                                  src={
                                                      "http://localhost:8000/uploaded-images/" +
                                                      item.image
                                                  }
                                                  alt={item.name}
                                                  className="w-[100px] h-[100px] object-cover"
                                              />
                                          </td>
                                          <td className="px-4 py-2">
                                              Rp. {parsingRibuan(item.price)}
                                          </td>
                                      </tr>
                                  );
                              })
                            : null}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Food;
