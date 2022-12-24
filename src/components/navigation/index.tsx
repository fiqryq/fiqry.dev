import { clsx } from 'clsx';
import ThemeSelector from '@/components/theme-selector';
import Link from 'next/link';

const Navigation: React.FC = () => {
  return (
    <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 border-b-[1px] border-zinc-100 bg-white p-4 dark:border-zinc-700/40 dark:bg-zinc-900 sm:flex-row sm:px-8 lg:px-12">
      <img
        src="https://avatars.githubusercontent.com/u/25787603?v=4"
        alt="avatar"
        className={clsx(
          'h-10 w-10 rounded-full bg-zinc-100 object-cover dark:bg-zinc-800'
        )}
      />
      <div className="flex gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/gear">Gear</Link>
        <ThemeSelector />
      </div>
    </div>
  );
};

export default Navigation;
