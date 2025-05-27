import React, { useState } from "react";

const initialEvents = [
  {
    id: 1,
    name: "Live Music Night",
    date: "2025-05-10",
    location: "Main Hall",
    description: "Enjoy an evening of live acoustic performances.",
    imageUrl:
      "https://th.bing.com/th/id/OIP.SSHRIIme-gKH3_VDHG7B_AHaE8?rs=1&pid=ImgDetMain",
  },
  {
    id: 2,
    name: "Wine Tasting Event",
    date: "2025-05-15",
    location: "Lounge Area",
    description: "Taste a selection of premium wines.",
    imageUrl:
      "https://th.bing.com/th/id/OIP.cNCNv9E0d8iQfHxfQXNuCwHaE8?rs=1&pid=ImgDetMain",
  },
];

const Restaurantevent = () => {
  const [events, setEvents] = useState(initialEvents);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
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
    if (!formData.name || !formData.date || !formData.location) return;

    if (editingId !== null) {
      setEvents((prev) =>
        prev.map((event) =>
          event.id === editingId ? { ...formData, id: editingId } : event
        )
      );
      setEditingId(null);
    } else {
      setEvents([...events, { ...formData, id: Date.now() }]);
    }

    setFormData({
      name: "",
      date: "",
      location: "",
      description: "",
      imageUrl: "",
    });
  };

  const handleEdit = (event) => {
    setFormData({ ...event });
    setEditingId(event.id);
  };

  const handleDelete = (id) => {
    setEvents((prev) => prev.filter((event) => event.id !== id));
    if (editingId === id) {
      setFormData({
        name: "",
        date: "",
        location: "",
        description: "",
        imageUrl: "",
      });
      setEditingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="px-20 py-20 space-y-10 flex">
        {/* Events List */}
        <div className="flex-1 pr-10">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Upcoming Events
          </h3>
          {events.length === 0 ? (
            <p className="text-center text-gray-500">No events added yet.</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="bg-white shadow-md rounded-xl p-4 flex gap-4 hover:shadow-lg transition"
                >
                  <img
                    src={event.imageUrl || "https://via.placeholder.com/100"}
                    alt={event.name}
                    className="w-20 h-20 object-cover rounded border"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg text-gray-800">
                      {event.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      📍 {event.location} • 📅 {event.date}
                    </p>
                    <p className="text-xs text-gray-400">{event.description}</p>
                    <div className="flex gap-3 mt-2">
                      <button
                        onClick={() => handleEdit(event)}
                        className="text-blue-600 text-sm hover:underline"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(event.id)}
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

        {/* Event Form */}
        <div className="w-80">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {editingId ? "Edit Event" : "Add New Event"}
            </h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
              {["name", "date", "location", "imageUrl", "description"].map(
                (field) => (
                  <div key={field} className="flex flex-col gap-2">
                    <label className="text-gray-500 text-sm capitalize">
                      {field === "imageUrl" ? "Image URL" : field}
                    </label>
                    <input
                      type={field === "date" ? "date" : "text"}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                )
              )}

              <button
                type="submit"
                className="bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition w-full"
              >
                {editingId ? "Update Event" : "Add Event"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurantevent;
