import Sidebar from "./components/sidebar.jsx";
import Header from "./components/header.jsx";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100">
      <Sidebar />
      <div className="ml-64 min-h-screen">
        <Header />
        <main className="p-5">{children}</main>
      </div>
    </div>
  );
}
