import { Link, useLocation } from '@tanstack/react-router';

import Logo from '@/assets/images/Logo.png';
import { IconExit, IconHistory, IconUser } from '@/components/icons/svg';
import { ROUTE } from '@/utils/constants';
import { useAuthContext } from '@/utils/contexts/session';

export const Header = () => {
  const { isAuth } = useAuthContext();
  const location = useLocation();
  const { setIsAuth } = useAuthContext();

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
                  <Link
                    activeProps={{ className: 'text-brand' }}
                    className='paragraph-16-medium flex gap-2 text-secondary hover:text-brand'
                    to={ROUTE.PROFILE}
                  >
                    <IconUser />
                    <span>Профиль</span>
                  </Link>
                </li>

                <li>
                  <Link
                    activeProps={{ className: 'text-brand' }}
                    className='paragraph-16-medium flex gap-2 text-secondary hover:text-brand'
                    params={{ id: '' }}
                    to={ROUTE.HISTORY}
                  >
                    <IconHistory />
                    <span>История</span>
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
        {!isAuth ? (
          <Link
            activeProps={{ className: 'text-brand' }}
            className='paragraph-16-medium flex gap-2 text-secondary hover:text-brand'
            to={ROUTE.AUTH}
          >
            <IconExit />
            <span>Войти</span>
          </Link>
        ) : (
          <Link
            activeProps={{ className: 'text-brand' }}
            className='paragraph-16-medium flex gap-2 text-secondary hover:text-brand'
            to={ROUTE.INDEX}
            onClick={() => setIsAuth(false)}
          >
            <IconExit />
            <span>Выйти</span>
          </Link>
        )}
      </div>
    </header>
  );
};
