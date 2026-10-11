const navigation = [
  { label: "Dashboard", icon: "▦" },
  { label: "Inventory", icon: "📦" },
  { label: "Receive Stock", icon: "＋" },
  { label: "Record Sale", icon: "🛒" },
  { label: "Stock History", icon: "↔" },
  { label: "Reports", icon: "▤" },
];

function Sidebar() {
  return (
    <aside className="flex min-h-screen w-64 flex-col bg-slate-950 p-5 text-white">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-blue-200">J&K ColdStore</h1>
        <p className="mt-1 text-sm text-slate-400">Ghana.</p>
      </div>
      <nav className="space-y-2">
        {navigation.map((item, index) => (
          <button
            key={item.label}
            href="#"
            className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left transition-colors ${index === 0 ? "bg-blue-700" : "text-slate-300 hover:bg-slate-600"}`}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
