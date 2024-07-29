import { IconExit, IconHistory, IconUser } from './components/icons/svg';
import { Header } from './components/layout';
import { Select } from './components/ui/select/Select';

export const App = () => (
  <>
    <Header />
    <div className='flex h-[100vh] flex-col items-center justify-center gap-3'>
      <IconUser />
      <IconHistory />
      <IconExit />

      <div className='w-[500px]'>
        <Select.Root>
          <Select.Label>Select category</Select.Label>
          <Select.Trigger>
            <Select.Value placeholder='Select a fruit' />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value='1'>Item 1</Select.Item>
            <Select.Item value='2'>Item 2</Select.Item>
            <Select.Item value='3'>Item 3</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>
    </div>
  </>
);
