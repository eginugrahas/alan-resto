import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function AddFood() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);
    const fileTypes = ["JPG", "PNG", "GIF"];


    const handleChange = (file) => {
        setFile(file);
        console.log(file);
    };

    async function storeMenu(e) {
        e.preventDefault();
        const formData = new FormData();

        formData.append("name", name);
        formData.append("price", price);
        formData.append("image", file);

        // for (var key of formData.entries()) {
        //     console.log(key[0] + ', ' + key[1]);
        // }

        axios.post("http://localhost:8000/api/add-menu", formData).then((res) => {
            // console.log(res);
        }).then(() => {
           toast.success("Menu berhasil ditambahkan");
           setTimeout(() => {
            navigate("/food");
           }, 2000);
        });
    }
    return (
        <div className="pt-10 px-[10%]">
            <div className="bg-white shadow-lg p-5">
                <div className="text-lg text-primary font-semibold mb-5">
                    Tambahkan Menu
                </div>
                <div className="flex flex-col gap-5">
                    <form onSubmit={storeMenu}>
                        <div className="">
                            <label htmlFor="name">Nama Menu</label>
                            <input
                                type="text"
                                name="name"
                                className="w-full border rounded p-2"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="">
                            <label htmlFor="img">Gambar Menu</label>
                            <FileUploader
                                handleChange={handleChange}
                                name="img"
                                types={fileTypes}
                            >
                                <div
                                    className={`w-full ${
                                        file ? "bg-white" : "bg-gray-100"
                                    } border rounded p-2 min-h-[200px] flex items-center justify-center`}
                                >
                                    {file ? (
                                        <div className="flex gap-5 ">
                                            <span className="font-semibold">
                                                {file.name}
                                            </span>
                                            <span
                                                onClick={() => setFile(null)}
                                                className="text-red-500 cursor-pointer"
                                            >
                                                X
                                            </span>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col items-center">
                                            <i className="icon-cloud-upload text-5xl text-gray-400"></i>
                                            <span className="text-gray-400">
                                                drag and drop file here or click
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </FileUploader>
                        </div>
                        <div className="">
                            <label htmlFor="price">Harga Menu</label>
                            <div className="flex">
                                <span className="rounded-l p-2 px-3 text-white font-semibold bg-primary">
                                    Rp.
                                </span>
                                <input
                                    type="number"
                                    name="price"
                                    className="w-full border rounded-r p-2"
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex justify-end mt-5">
                            <button type="submit" className="bg-green-500 text-white font-semibold p-2 px-6 rounded">
                                Simpan
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddFood;
