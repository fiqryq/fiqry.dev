import Image from 'next/image';
import Link from 'next/link';

import ThemeSelector from '@/components/theme-selector';

const Navigation: React.FC = () => {
  return (
    <nav className="border-b border-zinc-100 dark:border-zinc-700/40">
      <div className="relative z-50 mx-auto flex max-w-7xl flex-row items-center justify-between gap-6  bg-white p-4 text-zinc-800  dark:bg-zinc-900 sm:flex-row sm:px-8 lg:px-12">
        <Link href="/">
          <Image
            className="h-10 w-10 rounded-full bg-zinc-100 object-cover dark:bg-zinc-800"
            src="https://avatars.githubusercontent.com/u/25787603?v=4"
            width="100"
            height="100"
            alt="Icon"
          />
        </Link>
        {/* Desktop nav */}
        <div className="dark:text-zinc-20 flex gap-5 text-sm font-medium text-zinc-800">
          <Link href="/">Home</Link>
          <Link href="/writing">Writing</Link>
          <ThemeSelector />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
