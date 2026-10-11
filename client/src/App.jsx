import Sidebar from "../components/Sidebar";
function App() {
  return (
    <div className="min-h-screen bg-slate-50 md:flex">
      <Sidebar />
      <main className="min--w-0 flex-1 p-6 md:p-10">
        <header className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900"> Dashboard</h2>
          <p className="mt-2 text-sm text-slate-500">
            Monitor your inventory levels and sales performance.
          </p>
        </header>
        <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-800">
            Welcome to ShopFlow
          </h3>
          <p className="text-slate-600">
            Get insights into your business performance.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
