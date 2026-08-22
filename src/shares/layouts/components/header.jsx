import { Bell, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-16 border-b border-slate-200 bg-white">
      <div className="flex h-full items-center justify-end px-5">
        <div className="flex items-center gap-4">
          <div className="group flex h-10 w-74 overflow-hidden rounded-full border transition hover:border-gray-400 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="w-64 px-3 outline-none transition group-hover:bg-gray-50"
            />

            <button
              type="button"
              className="flex w-10 items-center justify-center border-l transition group-hover:bg-gray-50"
            >
              <Search size={18} />
            </button>
          </div>
          <button className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-slate-100">
            <Bell className="h-5 w-5 text-slate-500" />
          </button>

          <div className="h-8 w-px bg-slate-200" />

          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-semibold text-slate-700">John Doe</p>

              <p className="text-xs text-slate-400">Intern</p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
              JD
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
