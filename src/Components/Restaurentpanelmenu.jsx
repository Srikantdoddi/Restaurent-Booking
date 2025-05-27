import React, { useState } from "react";

const initialItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    category: "Pizza",
    price: "299",
    description: "Classic cheese pizza with tomato sauce.",
    imageUrl:
      "https://www.vegrecipesofindia.com/wp-content/uploads/2020/12/margherita-pizza-4.jpg",
  },
  {
    id: 2,
    name: "Paneer Tikka",
    category: "Vegstarter",
    price: "249",
    description: "Grilled paneer cubes with Indian spices.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj_w-NpRCnX_t4ro-6LXLqPPAQA9F_VQljbQ&s",
  },
];

const categories = [
  "Vegstarter",
  "Non-vegStarter",
  "Veg Biryani",
  "Non-veg Biryani",
  "Pizza",
  "Burger",
  "Other",
];

const Restaurentpanelmenu = () => {
  const [menuItems, setMenuItems] = useState(initialItems);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
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
    if (!formData.name || !formData.category || !formData.price) return;

    if (editingId !== null) {
      setMenuItems((prev) =>
        prev.map((item) =>
          item.id === editingId ? { ...formData, id: editingId } : item
        )
      );
      setEditingId(null);
    } else {
      setMenuItems([...menuItems, { ...formData, id: Date.now() }]);
    }

    setFormData({
      name: "",
      category: "",
      price: "",
      description: "",
      imageUrl: "",
    });
  };

  const handleEdit = (item) => {
    setFormData({ ...item });
    setEditingId(item.id);
  };

  const handleDelete = (id) => {
    setMenuItems((prev) => prev.filter((item) => item.id !== id));
    if (editingId === id) {
      setFormData({
        name: "",
        category: "",
        price: "",
        description: "",
        imageUrl: "",
      });
      setEditingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="px-4 sm:px-10 md:px-16 lg:px-20 py-10 sm:py-14 lg:py-20 space-y-10 flex flex-col lg:flex-row gap-10">
        {/* Menu Items Section */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Current Menu</h3>
          {menuItems.length === 0 ? (
            <p className="text-center text-gray-500">No items added yet.</p>
          ) : (
            <div className="grid sm:grid-cols-2 gap-6">
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white shadow-md rounded-xl p-4 flex gap-4 hover:shadow-lg transition"
                >
                  <img
                    src={item.imageUrl || "https://via.placeholder.com/100"}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded border"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg text-gray-800">{item.name}</h4>
                    <p className="text-sm text-gray-500">
                      {item.category} • ₹{item.price}
                    </p>
                    <p className="text-xs text-gray-400">{item.description}</p>
                    <div className="flex gap-3 mt-2">
                      <button
                        onClick={() => handleEdit(item)}
                        className="text-blue-600 text-sm hover:underline"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
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

        {/* Form Section */}
        <div className="w-full lg:w-80">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {editingId ? "Edit Dish" : "Add New Dish"}
            </h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
              {["name", "price", "imageUrl", "description"].map((field) => (
                <div key={field} className="flex flex-col gap-2">
                  <label className="text-gray-500 text-sm">
                    {field === "imageUrl"
                      ? "Image URL"
                      : field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type={field === "price" ? "number" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              ))}

              <div className="flex flex-col gap-2">
                <label className="text-gray-500 text-sm">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                >
                  <option value="">Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition w-full"
              >
                {editingId ? "Update Dish" : "Add Dish"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurentpanelmenu;
