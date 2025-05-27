import React, { useState } from 'react';

const User = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', active: true, role: 'Customer' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', active: true, role: 'Customer' },
  ]);

  const [staff, setStaff] = useState([
    { id: 1, name: 'Chef Michael', role: 'Chef', email: 'michael@restaurant.com' },
    { id: 2, name: 'Anna Manager', role: 'Manager', email: 'anna@restaurant.com' },
  ]);

  const [roles] = useState(['Admin', 'Manager', 'Staff']);

  const handleToggleUser = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  const handleRoleChange = (userId, newRole) => {
    setUsers((prev) =>
      prev.map((user) => (user.id === userId ? { ...user, role: newRole } : user))
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen px-4 sm:px-8 md:px-20 py-10 space-y-10">
      {/* Manage Users */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-lg sm:text-xl font-semibold text-red-700 mb-4">Manage Users</h2>
        <div className="space-y-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border rounded-md gap-4"
            >
              <div>
                <p className="font-medium">{user.name}</p>
                <p className="text-sm text-gray-600 break-words">{user.email}</p>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
                <select
                  value={user.role}
                  onChange={(e) => handleRoleChange(user.id, e.target.value)}
                  className="border px-3 py-2 rounded w-full sm:w-auto"
                >
                  {roles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => handleToggleUser(user.id)}
                  className={`w-full sm:w-auto px-4 py-2 rounded-md text-white ${
                    user.active ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
                  } transition-all`}
                >
                  {user.active ? 'Deactivate' : 'Activate'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Manage Staff / Restaurant Profiles */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-lg sm:text-xl font-semibold text-red-700 mb-4">Restaurant Staff Profiles</h2>
        <div className="space-y-4">
          {staff.map((member) => (
            <div
              key={member.id}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border rounded-md gap-4"
            >
              <div>
                <p className="font-medium">{member.name}</p>
                <p className="text-sm text-gray-600">Role: {member.role}</p>
                <p className="text-sm text-gray-600 break-words">Email: {member.email}</p>
              </div>
              <button className="w-full sm:w-auto px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition-all">
                Edit Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default User;
