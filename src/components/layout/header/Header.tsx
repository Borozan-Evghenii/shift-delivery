import Logo from '@/assets/images/Logo.png';

export const Header = () => (
  <header className='w-full bg-primary py-6'>
    <div className='m-auto my-0 flex max-w-[960px] items-center justify-between'>
      <div className='flex items-center gap-8'>
        <img alt='shift' src={Logo} />
        <nav>
          <ul>
            <li>History</li>
          </ul>
        </nav>
      </div>

      <a href='/'>Exit</a>
    </div>
  </header>
);
