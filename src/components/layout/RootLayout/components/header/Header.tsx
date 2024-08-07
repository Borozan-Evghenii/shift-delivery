import { Link } from '@tanstack/react-router';

import Logo from '@/assets/images/Logo.png';
import { IconExit, IconHistory, IconUser } from '@/components/icons/svg';
import { Button } from '@/components/ui';
import { ROUTE } from '@/utils/constants';

export const Header = () => (
  <header className='border-border-light w-full border-b-2 bg-primary py-6'>
    <div className='container flex items-center justify-between'>
      <div className='flex items-center gap-8'>
        <Link to='/'>
          <img alt='shift' src={Logo} />
        </Link>
        <nav>
          <ul className='flex items-center gap-8'>
            <li>
              <Button
                asChild
                className='font-mediu flex gap-2 p-1 text-base no-underline'
                colour='secondary'
                variant='link'
              >
                <Link
                  activeProps={{ className: 'text-primary' }}
                  className='flex gap-2'
                  to={ROUTE.PROFILE}
                >
                  <IconUser />
                  <span>Profile</span>
                </Link>
              </Button>
            </li>

            <li>
              <Button
                asChild
                className='font-mediu flex gap-2 p-1 text-base no-underline'
                colour='secondary'
                variant='link'
              >
                <Link
                  activeProps={{ className: 'text-primary' }}
                  className='flex gap-2'
                  to={ROUTE.HISTORY}
                >
                  <IconHistory />
                  <span>History</span>
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>

      <Button
        asChild
        className='font-mediu flex gap-2 p-1 text-base no-underline'
        colour='secondary'
        variant='link'
      >
        <Link activeProps={{ className: 'text-primary' }} className='flex gap-2' to={ROUTE.INDEX}>
          <IconExit />
          <span>Exit</span>
        </Link>
      </Button>
    </div>
  </header>
);
