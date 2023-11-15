import React, { useEffect, useRef, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import axios from "axios";
import { parsingRibuan } from "../helpers";
import toast from "react-hot-toast";
import { useReactToPrint } from "react-to-print";

function Transaction() {
    const [menus, setMenus] = useState([]);
    const [cart, setCart] = useState([]);
    const [openModalBayar, setOpenModalBayar] = useState(false);
    const [openSaveBill, setOpenSaveBill] = useState(false);
    const [sumCart, setSumCart] = useState(0);
    const [pay, setPay] = useState(0);
    const [change, setChange] = useState(0);
    const printRef = useRef();

    const printBill = useReactToPrint({
        content: () => printRef.current,
    });

    function handlePay() {
        if (pay < sumCart) {
            toast.error("Uang Pembeli Kurang");
            return;
        }
        setChange(pay - sumCart);
        toast.success("Transaksi Berhasil");
        setTimeout(() => {
            setOpenModalBayar(false);
            clearCart();
        }, 3000);
    }

    function clearCart() {
        setCart([]);
        setSumCart(0);
    }

    function handleAddToCart(menu) {
        const existingItemIndex = cart.findIndex((item) => item.id === menu.id);

        if (existingItemIndex !== -1) {
            setCart((prevCart) => [
                ...prevCart.slice(0, existingItemIndex),
                {
                    ...prevCart[existingItemIndex],
                    qty: prevCart[existingItemIndex].qty + 1,
                },
                ...prevCart.slice(existingItemIndex + 1),
            ]);
        } else {
            setCart((prevCart) => [
                ...prevCart,
                {
                    id: menu.id,
                    name: menu.name,
                    price: menu.price,
                    image: menu.image,
                    qty: 1,
                },
            ]);
        }

        setSumCart((prevSumCart) => prevSumCart + menu.price);
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/menu").then((res) => {
            setMenus(res.data.data);
        });
    }, []);

    return (
        <div className="pt-10 flex px-[10%]">
            <div className="w-full grid grid-cols-3 gap-10">
                {menus
                    ? menus.map((menu, index) => {
                          return (
                              <div
                                  onClick={() => handleAddToCart(menu)}
                                  key={index}
                                  className="flex flex-col gap-3 rounded shadow-lg w-52 h-60 pb-3 hover:scale-105 cursor-pointer"
                              >
                                  <img
                                      src={
                                          "http://localhost:8000/uploaded-images/" +
                                          menu.image
                                      }
                                      alt={menu.name}
                                      className="h-44 object-cover"
                                  />
                                  <div className="text-center font-bold">
                                      {menu.name}
                                  </div>
                                  <div className="text-center text-primary font-bold">
                                      Rp. {parsingRibuan(menu.price)}
                                  </div>
                              </div>
                          );
                      })
                    : "Belum ada Menu"}
            </div>
            <div className="min-w-[350px] bg-white min-h-[500px] max-h-[600px] shadow-lg p-5  flex flex-col items-center">
                <div className="w-full text-center" ref={printRef}>
                    <div className="text-xl font-bold">
                        <span>
                            <i className="icon-user-circle"></i>
                        </span>{" "}
                        Pesanan
                    </div>
                    <div className="overflow-y-scroll my-5 w-full" id="bill">
                        {cart
                            ? cart.map((item, index) => {
                                  return (
                                      <div
                                          key={index}
                                          className="flex justify-between items-center w-full mt-5"
                                      >
                                          <img
                                              src={
                                                  "http://localhost:8000/uploaded-images/" +
                                                  item.image
                                              }
                                              alt={item.name}
                                              className="w-[70px] h-[70px] object-cover"
                                          />
                                          <p className="text-sm font-bold">
                                              {item.name}
                                          </p>
                                          <p className="text-sm font-bold">
                                              X{item.qty}
                                          </p>
                                          <p className="text-sm font-bold text-primary">
                                              Rp. {parsingRibuan(item.price)}
                                          </p>
                                      </div>
                                  );
                              })
                            : "Belum ada Pesanan"}
                    </div>
                </div>
                <div className="mt-auto w-full">
                    <div className="flex flex-col gap-4">
                        <button
                            onClick={clearCart}
                            className="text-red-500 border border-red-500 p-1 text-center font-bold rounded"
                        >
                            Clear Cart
                        </button>
                        <div className="flex justify-between gap-3 w-full items-center">
                            <button
                                onClick={() => setOpenSaveBill(true)}
                                className="bg-green-500 text-white p-1 text-center font-bold rounded w-full"
                            >
                                Save Bill
                            </button>
                            <button
                                onClick={printBill}
                                className="bg-green-500 text-white p-1 text-center font-bold rounded w-full "
                            >
                                Print Bill
                            </button>
                        </div>
                        <button
                            onClick={() => setOpenModalBayar(true)}
                            disabled={sumCart === 0}
                            className="text-white border disabled:bg-opacity-70 bg-primary p-1 text-center font-bold rounded"
                        >
                            Charge{" "}
                            {sumCart ? "Rp. " + parsingRibuan(sumCart) : ""}
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
                    <button
                        onClick={() => setOpenSaveBill(false)}
                        className="rounded bg-primary text-white p-2 px-3"
                    >
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
                contentStyle={{ borderRadius: "10px", minWidth: "800px" }}
            >
                <div className="p-10">
                    <h3 className="font-semibold text-lg">Detail Pesanan</h3>
                    <div className="flex items-center justify-between">
                        <table className="table-auto border w-full mr-5">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="px-4 py-2">#</th>
                                    <th className="px-4 py-2">Nama</th>
                                    <th className="px-4 py-2">Foto</th>
                                    <th className="px-4 py-2">Harga</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart
                                    ? cart.map((item, index) => {
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
                                                          className="w-[50px] h-[50px] object-cover"
                                                      />
                                                  </td>
                                                  <td className="px-4 py-2">
                                                      Rp.{" "}
                                                      {parsingRibuan(
                                                          item.price
                                                      )}
                                                  </td>
                                              </tr>
                                          );
                                      })
                                    : null}
                            </tbody>
                        </table>
                        <div className="flex flex-col border-s px-5 gap-3 text-center   ">
                            Uang Pembeli(Rp)
                            <input
                                onChange={(e) => setPay(e.target.value)}
                                type="number"
                                className="border border-black rounded p-1"
                            />
                            <div className="flex gap-4 w-full">
                                <button
                                    onClick={() => setOpenModalBayar(false)}
                                    className="border border-gray-500 text-ray-500 rounded w-full p-1"
                                >
                                    Close
                                </button>
                                <button
                                    onClick={handlePay}
                                    className="rounded bg-primary text-white font-semibold w-full p-1"
                                >
                                    Pay
                                </button>
                            </div>
                            <span className="text-red-500 text-left font-bold">
                                Kembalian:{" "}
                                {change ? "Rp. " + parsingRibuan(change) : ""}
                            </span>
                        </div>
                    </div>
                </div>
            </Popup>
        </div>
    );
}

export default Transaction;
