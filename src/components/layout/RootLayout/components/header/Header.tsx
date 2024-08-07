import { Link } from '@tanstack/react-router';

import Logo from '@/assets/images/Logo.png';
import { IconExit, IconHistory, IconUser } from '@/components/icons/svg';
import { Button } from '@/components/ui';

export const Header = () => (
  <header className='border-border-light w-full border-b-2 bg-primary py-6'>
    <div className='container flex items-center justify-between'>
      <div className='flex items-center gap-8'>
        <Link to='/'>
          <img alt='shift' src={Logo} />
        </Link>
        <nav>
          <ul className='flex items-center gap-4'>
            <Button asChild className='flex gap-2' colour='tertiary' variant='text'>
              <IconUser />
              <Link to='/profile'>History</Link>
            </Button>
            <Button asChild className='flex gap-2' colour='tertiary' variant='text'>
              <IconHistory />
              <Link to='/history'>History</Link>
            </Button>
          </ul>
        </nav>
      </div>

      <Button asChild className='flex gap-2' colour='tertiary' variant='text'>
        <IconExit />
        <Link to='/'>Exit</Link>
      </Button>
    </div>
  </header>
);
