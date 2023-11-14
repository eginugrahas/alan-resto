import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

function AddFood() {
    const [file, setFile] = useState(null);
    const fileTypes = ["JPG", "PNG", "GIF"];
    const handleChange = (file) => {
        setFile(file);
        console.log(file);
    };
    return (
        <div className="pt-10 px-[10%]">
            <div className="bg-white shadow-lg p-5">
                <div className="text-lg text-primary font-semibold mb-5">
                    Tambahkan Menu
                </div>
                <div className="flex flex-col gap-5">
                    <div className="">
                        <label htmlFor="name">Nama Menu</label>
                        <input
                            type="text"
                            name="name"
                            className="w-full border rounded p-2"
                        />
                    </div>
                    <div className="">
                        <label htmlFor="img">Gambar Menu</label>
                        <FileUploader
                            handleChange={handleChange}
                            name="file"
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
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-end mt-5">
                    <button className="bg-green-500 text-white font-semibold p-2 px-6 rounded">
                        Simpan
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddFood;
