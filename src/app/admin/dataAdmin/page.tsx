// app/admin/dataAdmin/page.tsx
'use client';

export default function DataAdminPage() {
  const dataAdmin = [
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
  ];

  return (
    <div className="min-h-screen bg-white px-8 py-12">
      <h1 className="text-center text-3xl font-bold italic mb-10">
        <span style={{ color: '#407225' }}>Data</span>{' '}
        <span className="text-black">Admin</span>
      </h1>

      <div className="mb-6">
        <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded">
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
                  <button className="bg-green-500 hover:bg-green-600 text-white text-sm px-3 py-1 rounded">
                    Detail
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded">
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
