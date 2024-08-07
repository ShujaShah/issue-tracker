'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SiHelpscout } from 'react-icons/si';
import classnames from 'classnames';

const Navbar = () => {
  const currentPath = usePathname();
  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Issues', href: '/issues' },
  ];
  return (
    <nav className="xlex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <SiHelpscout />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${
              link.href === currentPath ? 'text-zinc-900' : 'text-zinc-500'
            } hover:text-zinc-800 transition-colors`}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
