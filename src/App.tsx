import { IconExit, IconHistory, IconUser } from './components/icons/svg';
import { Header } from './components/layout';
import { Select } from './components/ui/select/Select';
import { useGetDeliveryPoints } from './utils/api/hooks/delivery/useGetDeliveryPointsQuery';

export const App = () => {
  const { data } = useGetDeliveryPoints();

  return (
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
              {data?.data?.points.map((point) => (
                <Select.Item key={point.latitude} value={point.id}>
                  {point.name}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
        </div>
      </div>
    </>
  );
};
