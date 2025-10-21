/* eslint-disable @typescript-eslint/no-explicit-any */
interface Column {
  key: string;
  label: string;
}

export const DataTable = ({
  columns,
  data,
}: {
  columns: Column[];
  data: any[];
}) => {
  return (
    <div className="overflow-x-auto border border-border rounded-lg bg-card">
      <table className="min-w-full text-sm">
        <thead className="bg-muted/30">
          <tr>
            {columns.map((col) => (
              <th key={col.key} className="px-4 py-2 text-left font-semibold">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              className="border-t border-border hover:bg-muted/10 transition"
            >
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-2">
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
