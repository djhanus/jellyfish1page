export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-purple-700">[Company Logo]</div>
        <nav className="space-x-6 text-sm font-medium text-gray-600">
          <a href="#features" className="hover:text-black">Features</a>
          <a href="#demo" className="hover:text-black">Request Demo</a>
        </nav>
      </div>
    </header>
  );
}
