import React, { useState } from "react";

const initialTables = [
  {
    id: 1,
    tableName: "Table 1",
    seaters: "4",
    location: "Indoor",
    description: "Cozy corner with dim lighting.",
    imageUrl:
      "https://th.bing.com/th/id/OIP.SSHRIIme-gKH3_VDHG7B_AHaE8?rs=1&pid=ImgDetMain",
  },
  {
    id: 2,
    tableName: "Table 2",
    seaters: "2",
    location: "Outdoor",
    description: "Ideal for romantic dinners.",
    imageUrl:
      "https://th.bing.com/th/id/OIP.cNCNv9E0d8iQfHxfQXNuCwHaE8?rs=1&pid=ImgDetMain",
  },
];

const Restaurentdinein = () => {
  const [tables, setTables] = useState(initialTables);
  const [formData, setFormData] = useState({
    tableName: "",
    seaters: "",
    location: "",
    description: "",
    imageUrl: "",
  });
  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.tableName || !formData.seaters || !formData.location) return;

    if (editingId !== null) {
      setTables((prev) =>
        prev.map((table) =>
          table.id === editingId ? { ...formData, id: editingId } : table
        )
      );
      setEditingId(null);
    } else {
      setTables([...tables, { ...formData, id: Date.now() }]);
    }

    setFormData({
      tableName: "",
      seaters: "",
      location: "",
      description: "",
      imageUrl: "",
    });
  };

  const handleEdit = (table) => {
    setFormData({ ...table });
    setEditingId(table.id);
  };

  const handleDelete = (id) => {
    setTables((prev) => prev.filter((table) => table.id !== id));
    if (editingId === id) {
      setFormData({
        tableName: "",
        seaters: "",
        location: "",
        description: "",
        imageUrl: "",
      });
      setEditingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-20">
      <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10">
        {/* Table List */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Table Setup</h3>
          {tables.length === 0 ? (
            <p className="text-center text-gray-500">No tables added yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tables.map((table) => (
                <div
                  key={table.id}
                  className="bg-white shadow-md rounded-xl p-4 flex gap-4 hover:shadow-lg transition"
                >
                  <img
                    src={table.imageUrl || "https://via.placeholder.com/100"}
                    alt={table.tableName}
                    className="w-20 h-20 object-cover rounded border flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg text-gray-800">{table.tableName}</h4>
                    <p className="text-sm text-gray-500">
                      🪑 {table.seaters} Seaters • 📍 {table.location}
                    </p>
                    <p className="text-xs text-gray-400">{table.description}</p>
                    <div className="flex gap-3 mt-2">
                      <button
                        onClick={() => handleEdit(table)}
                        className="text-blue-600 text-sm hover:underline"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(table.id)}
                        className="text-red-600 text-sm hover:underline"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Table Form */}
        <div className="w-full max-w-md">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {editingId ? "Edit Table" : "Add New Table"}
            </h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
              {[
                { name: "tableName", label: "Table Name", type: "text" },
                { name: "seaters", label: "No. of Seaters", type: "number" },
                { name: "location", label: "Location", type: "text" },
                { name: "imageUrl", label: "Image URL", type: "text" },
                { name: "description", label: "Description", type: "text" },
              ].map(({ name, label, type }) => (
                <div key={name} className="flex flex-col gap-2">
                  <label className="text-gray-500 text-sm">{label}</label>
                  <input
                    type={type}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              ))}

              <button
                type="submit"
                className="bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition w-full"
              >
                {editingId ? "Update Table" : "Add Table"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurentdinein;
