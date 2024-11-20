import { FaHome, FaInfoCircle, FaCog, FaFileAlt, FaChartLine } from 'react-icons/fa';

export default function Sidebar() {
  const activePage = '/'; // Example of active page, dynamically set based on routing.

  const links = [
    { href: '/', label: 'Home', icon: <FaHome /> },
    { href: '/about', label: 'About', icon: <FaInfoCircle /> },
    { href: '/reports', label: 'Reports', icon: <FaFileAlt /> },
    { href: '/analytics', label: 'Analytics', icon: <FaChartLine /> },
    { href: '/settings', label: 'Settings', icon: <FaCog /> },
  ];

  return (
    <div className="hidden lg:flex flex-col bg-[#1A237E] text-light w-60 h-full p-5 shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center text-white">RAG LLM</h1>
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-200 ${
                activePage === link.href
                  ? 'bg-[#3949AB] text-white'
                  : 'bg-[#5C6BC0] text-white hover:bg-[#3949AB]'
              }`}
            >
              <span className="mr-3 text-lg">{link.icon}</span>
              <span>{link.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
