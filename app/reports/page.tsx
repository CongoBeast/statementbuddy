import { FaEye, FaTrash } from 'react-icons/fa';

export default function Reports() {
  // Dummy data for reports
  const reports = [
    {
      id: 1,
      company: 'Tech Innovations Inc.',
      dateGenerated: '2024-11-15',
      dateRange: '2019-2023',
    },
    {
      id: 2,
      company: 'Green Energy Solutions',
      dateGenerated: '2024-10-20',
      dateRange: '2020-2023',
    },
    {
      id: 3,
      company: 'HealthTech Labs',
      dateGenerated: '2024-09-12',
      dateRange: '2018-2023',
    },
    {
      id: 4,
      company: 'FinTech Pioneers',
      dateGenerated: '2024-08-05',
      dateRange: '2021-2023',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-[#1A237E] mb-6">Reports</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {reports.map((report) => (
          <div
            key={report.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <h2 className="text-xl font-semibold text-[#1A237E] mb-2">
              {report.company}
            </h2>
            <p className="text-gray-600">
              <strong>Date Generated:</strong> {report.dateGenerated}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Date Range:</strong> {report.dateRange}
            </p>
            <div className="flex justify-between items-center">
              <button
                className="flex items-center text-[#3949AB] hover:text-[#1A237E] transition-colors"
                title="View Report"
              >
                <FaEye className="mr-2" /> View
              </button>
              <button
                className="flex items-center text-red-500 hover:text-red-700 transition-colors"
                title="Delete Report"
              >
                <FaTrash className="mr-2" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
