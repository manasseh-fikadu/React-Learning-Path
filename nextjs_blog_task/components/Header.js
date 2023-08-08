import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-500 p-4">
      <nav className="max-w-4xl mx-auto">
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <a className="text-white">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/new">
              <a className="text-white">Create New Blog</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
