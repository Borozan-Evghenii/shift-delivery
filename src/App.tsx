import { Button, Input } from './components/ui';

export const App = () => (
  <div className='flex h-[100vh] flex-col items-center justify-center gap-3'>
    <Button asChild colour='primary' variant='contained'>
      <a href='/'>Some text</a>
    </Button>

    <Input helpText='help text' label='Label' placeholder='Write text' />
  </div>
);
