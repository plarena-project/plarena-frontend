// app/admin/dataAdmin/page.tsx
'use client';

import { useState } from 'react';

export default function DataAdminPage() {
  const [dataAdmin, setDataAdmin] = useState([
    {
      id: 1,
      username: 'admin1',
      namaLengkap: 'Ahmad Ramadhan',
      email: 'admin1@example.com',
      noHp: '081234567890',
    },
    {
      id: 2,
      username: 'admin2',
      namaLengkap: 'Siti Aminah',
      email: 'admin2@example.com',
      noHp: '081298765432',
    },
    {
      id: 3,
      username: 'admin3',
      namaLengkap: 'Budi Santoso',
      email: 'admin3@example.com',
      noHp: '082112345678',
    },
  ]);

  const [selectedAdmin, setSelectedAdmin] = useState<any | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  // State untuk form tambah admin
  const [formData, setFormData] = useState({
    username: '',
    namaLengkap: '',
    email: '',
    noHp: '',
  });

  const handleDelete = () => {
    if (selectedAdmin) {
      setDataAdmin(dataAdmin.filter((admin) => admin.id !== selectedAdmin.id));
      setShowDeleteModal(false);
      setSelectedAdmin(null);
    }
  };

  const handleDetailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedAdmin) {
      const { name, value } = e.target;
      setSelectedAdmin({ ...selectedAdmin, [name]: value });
    }
  };

  const handleSaveDetail = () => {
    setDataAdmin(
      dataAdmin.map((admin) =>
        admin.id === selectedAdmin.id ? selectedAdmin : admin
      )
    );
    setSelectedAdmin(null);
  };

  const handleAddAdmin = () => {
    if (!formData.username || !formData.namaLengkap || !formData.email || !formData.noHp) {
      alert("Semua field harus diisi!");
      return;
    }

    const newId = Math.max(...dataAdmin.map(item => item.id)) + 1;
    const newAdmin = {
      id: newId,
      username: formData.username,
      namaLengkap: formData.namaLengkap,
      email: formData.email,
      noHp: formData.noHp,
    };

    setDataAdmin([...dataAdmin, newAdmin]);
    setFormData({ username: '', namaLengkap: '', email: '', noHp: '' });
    setShowAddModal(false);
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
    setFormData({ username: '', namaLengkap: '', email: '', noHp: '' });
  };

  return (
    <div className="min-h-screen bg-white px-8 py-12">
      <h1 className="text-center text-3xl font-bold italic mb-10">
        <span style={{ color: '#407225' }}>Data</span>{' '}
        <span className="text-black">Admin</span>
      </h1>

      <div className="mb-6">
        <button 
          onClick={() => setShowAddModal(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded"
        >
          Tambah Admin
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr className="text-left text-sm font-semibold text-gray-700">
              <th className="py-3 px-4">No</th>
              <th className="py-3 px-4">Username</th>
              <th className="py-3 px-4">Nama Lengkap</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">No HP</th>
              <th className="py-3 px-4">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dataAdmin.map((admin, index) => (
              <tr key={admin.id} className="border-b">
                <td className="py-4 px-4">{index + 1}</td>
                <td className="py-4 px-4">{admin.username}</td>
                <td className="py-4 px-4">{admin.namaLengkap}</td>
                <td className="py-4 px-4">{admin.email}</td>
                <td className="py-4 px-4">{admin.noHp}</td>
                <td className="py-4 px-4 space-x-2">
                  <button
                    onClick={() => setSelectedAdmin(admin)}
                    className="bg-green-500 hover:bg-green-600 text-white text-sm px-3 py-1 rounded"
                  >
                    Detail
                  </button>
                  <button
                    onClick={() => {
                      setSelectedAdmin(admin);
                      setShowDeleteModal(true);
                    }}
                    className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Detail */}
      {selectedAdmin && !showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-lg font-bold mb-4">Detail Admin</h2>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium">Username</label>
                <input
                  type="text"
                  name="username"
                  value={selectedAdmin.username}
                  onChange={handleDetailChange}
                  className="w-full border px-2 py-1 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Nama Lengkap</label>
                <input
                  type="text"
                  name="namaLengkap"
                  value={selectedAdmin.namaLengkap}
                  onChange={handleDetailChange}
                  className="w-full border px-2 py-1 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={selectedAdmin.email}
                  onChange={handleDetailChange}
                  className="w-full border px-2 py-1 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">No HP</label>
                <input
                  type="text"
                  name="noHp"
                  value={selectedAdmin.noHp}
                  onChange={handleDetailChange}
                  className="w-full border px-2 py-1 rounded"
                />
              </div>
            </div>
            <div className="flex justify-end mt-4 space-x-2">
              <button
                onClick={() => setSelectedAdmin(null)}
                className="border px-4 py-2 rounded hover:bg-gray-100"
              >
                Tutup
              </button>
              <button
                onClick={handleSaveDetail}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Hapus */}
      {showDeleteModal && selectedAdmin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
            <h2 className="text-lg font-bold mb-4">Konfirmasi Hapus</h2>
            <p>Apakah kamu yakin ingin menghapus admin <strong>{selectedAdmin.namaLengkap}</strong>?</p>
            <div className="flex justify-end mt-6 space-x-2">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="border px-4 py-2 rounded hover:bg-gray-100"
              >
                Batal
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Tambah Admin */}
      {showAddModal && (
        <div className="fixed inset-0 bg-gray-500/50 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md shadow-md w-96">
            <h2 className="text-lg font-semibold text-center mb-4" style={{ color: "#407225" }}>
              Tambah Admin Baru
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Username
                </label>
                <input
                  type="text"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Masukkan username"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  value={formData.namaLengkap}
                  onChange={(e) => setFormData({ ...formData, namaLengkap: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Masukkan nama lengkap"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Masukkan email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  No HP
                </label>
                <input
                  type="text"
                  value={formData.noHp}
                  onChange={(e) => setFormData({ ...formData, noHp: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Masukkan nomor HP"
                />
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={handleCloseAddModal}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              >
                Batal
              </button>
              <button
                onClick={handleAddAdmin}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Tambah
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}