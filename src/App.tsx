import { FaCaretRight } from 'react-icons/fa';

import { Button } from './components/ui';

export const App = () => (
  <div className='flex h-[100vh] flex-col items-center justify-center gap-3'>
    <Button buttonType='secondary' variant='outlined'>
      Button Typed
    </Button>
    <Button
      buttonType='primary'
      endIcon={<FaCaretRight />}
      startIcon={<FaCaretRight />}
      variant='contained'
    >
      Button
    </Button>
    <Button
      buttonType='primary'
      endIcon={<FaCaretRight />}
      startIcon={<FaCaretRight />}
      variant='text'
    >
      Button
    </Button>
    <Button
      buttonType='primary'
      endIcon={<FaCaretRight />}
      startIcon={<FaCaretRight />}
      variant='link'
    >
      Button
    </Button>
    <Button
      buttonType='secondary'
      endIcon={<FaCaretRight />}
      startIcon={<FaCaretRight />}
      variant='outlined'
    >
      Button
    </Button>
    <Button
      buttonType='secondary'
      endIcon={<FaCaretRight />}
      startIcon={<FaCaretRight />}
      variant='text'
    >
      Button
    </Button>
    <Button
      buttonType='secondary'
      endIcon={<FaCaretRight />}
      startIcon={<FaCaretRight />}
      variant='link'
    >
      Button
    </Button>
    <Button
      buttonType='tertiary'
      endIcon={<FaCaretRight />}
      startIcon={<FaCaretRight />}
      variant='link'
    >
      Button
    </Button>
  </div>
);
