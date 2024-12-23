'use client';

import React, { useState } from 'react';

const AddProduct = () => {
    const [showTable, setShowTable] = useState(false);

    // Funkce pro přepínání viditelnosti tabulky
    const toggleTableVisibility = () => {
        setShowTable(!showTable);
    };

    // Funkce pro odeslání formuláře
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Zde můžeš provést odeslání formuláře nebo jakýkoliv jiný proces
        console.log("Form submitted");
    };

    return (
        <div className="productTable">
            {/* Tlačítko pro zobrazení formuláře */}
            {!showTable && (
                <button
                    onClick={toggleTableVisibility}
                    className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                >
                    Napsat blog
                </button>
            )}

            {/* Tabulka s formulářem */}
            {showTable && (
                <form onSubmit={handleSubmit} method="POST" action="https://www.formbackend.com/f/664decaabbf1c319">
                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-300 mt-4">
                            <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 px-4 py-2">ID</th>
                                <th className="border border-gray-300 px-4 py-2">Title</th>
                                <th className="border border-gray-300 px-8 py-2">CreateAt</th>
                                <th className="border border-gray-300 px-8 py-2">Content</th>
                                <th className="border border-gray-300 px-8 py-2">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">
                                    <input
                                        type="text"
                                        name="kod"
                                        className="w-full px-2 py-1 border border-gray-300"
                                    />
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <input
                                        type="text"
                                        name="nazev"
                                        className="w-full px-2 py-1 border border-gray-300"
                                    />
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <input
                                        type="number"
                                        name="cena"
                                        className="w-full px-2 py-1 border border-gray-300"
                                    />
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                        <textarea
                                            name="popis"
                                            className="w-full px-2 py-1 border border-gray-300"
                                        />
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <button
                                        type="button"
                                        onClick={toggleTableVisibility}
                                        className="px-4 py-2 bg-red-500 text-white rounded"
                                    >
                                        Zavřít
                                    </button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Tlačítko pro odeslání formuláře */}
                    <div className="mt-4">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-green-500 text-white rounded"
                        >
                            Uložit produkt
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default AddProduct;
