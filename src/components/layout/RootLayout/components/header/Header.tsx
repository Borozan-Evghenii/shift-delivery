import { Link, useLocation } from '@tanstack/react-router';

import Logo from '@/assets/images/Logo.png';
import { IconExit, IconHistory, IconUser } from '@/components/icons/svg';
import { Button } from '@/components/ui';
import { ROUTE } from '@/utils/constants';
import { useAuthContext } from '@/utils/contexts/session';

export const Header = () => {
  const { isAuth } = useAuthContext();
  const location = useLocation();

  return (
    <header className='border-border-light fixed left-0 right-0 w-full border-b-2 bg-primary py-6'>
      <div className='container flex items-center justify-between'>
        <div className='flex items-center gap-8'>
          <Link to='/'>
            <img alt='shift' src={Logo} />
          </Link>
          {!(location.pathname === ROUTE.AUTH) && (
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
                      activeProps={{ className: 'text-brand' }}
                      className='flex gap-2'
                      to={ROUTE.PROFILE}
                    >
                      <IconUser />
                      <span>Профиль</span>
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
                      activeProps={{ className: 'text-brand' }}
                      className='flex gap-2'
                      to={ROUTE.HISTORY}
                    >
                      <IconHistory />
                      <span>История</span>
                    </Link>
                  </Button>
                </li>
              </ul>
            </nav>
          )}
        </div>
        {!isAuth && (
          <Button
            asChild
            className='font-mediu flex gap-2 p-1 text-base no-underline'
            colour='secondary'
            variant='link'
          >
            <Link activeProps={{ className: 'text-brand' }} className='flex gap-2' to={ROUTE.AUTH}>
              <IconExit />
              <span>Войти</span>
            </Link>
          </Button>
        )}
        {isAuth && (
          <Button
            asChild
            className='font-mediu flex gap-2 p-1 text-base no-underline'
            colour='secondary'
            variant='link'
          >
            <Link activeProps={{ className: 'text-brand' }} className='flex gap-2' to={ROUTE.INDEX}>
              <IconExit />
              <span>Выйти</span>
            </Link>
          </Button>
        )}
      </div>
    </header>
  );
};
