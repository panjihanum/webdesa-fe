import { DataTable } from "@/components/admin/DataTable";
import { newsData } from "@/data/news";

export default function BeritaAdminPage() {
  const columns = [
    { key: "id", label: "ID" },
    { key: "title", label: "Judul" },
    { key: "date", label: "Tanggal" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Daftar Berita</h2>
      <DataTable columns={columns} data={newsData} />
    </div>
  );
}
