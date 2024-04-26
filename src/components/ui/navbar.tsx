import Image from "next/image";

export default function Navbar() {
  return (
    <header>
      <nav>
        <ul className="flex items-center justify-between p-3 px-10 bg-rose-950">
          <li>
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="/"
              rel="noopener noreferrer"
            >
              <Image
                src="/talent-innovations-logo.png"
                alt="Talent Innovations Logo"
                className="w-80 h-auto"
                width={100}
                height={0}
                priority
              />
            </a>
          </li>
          <li>
            <div className="flex gap-3">
              <span
                aria-label="Home"
                className="transition-all duration-300 ease-in animate-fade-up text-zinc-200"
              >
                Home
              </span>
              <span
                aria-label="Dashboard"
                className="transition-all duration-300 ease-in animate-fade-up text-zinc-200"
              >
                Dashboard
              </span>
              <span
                aria-label="Admin"
                className="transition-all duration-300 ease-in animate-fade-up text-zinc-200"
              >
                Admin
              </span>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
