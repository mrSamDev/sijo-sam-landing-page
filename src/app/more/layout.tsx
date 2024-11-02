export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Header />
      {children}
    </div>
  );
}

const Header = () => {
  return (
    <header className="py-6 bg-white/5 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-white">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">Sijo Sam</h1>
          <div className="w-0.5 h-6 bg-white/20"></div>
          <p className="text-sm tracking-wider uppercase">SOFTWARE ENGINEER</p>
        </div>
        <nav className="hidden md:flex space-x-6 text-sm">
          <a href="#" className="hover:text-white/70 transition-colors">
            BLOG
          </a>
          <a href="#" className="hover:text-white/70 transition-colors">
            PROJECTS
          </a>
          <a href="#" className="hover:text-white/70 transition-colors">
            ABOUT
          </a>
        </nav>
      </div>
    </header>
  );
};
