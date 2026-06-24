export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between">
        <h1 className="text-2xl font-bold">
          Rezaer Rabby
        </h1>

        <nav className="space-x-6">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}