import { IconLocation, IconNavigate, IconPackage } from '@/components/icons/svg';
import { Button, Input, Select, Tab } from '@/components/ui';

import airplane from '../../assets/images/airplane.png';

import { TAB } from './constants/tab';
import { useIndexPage } from './hook/useIndexPage';

export const IndexPage = () => {
  const { state, functions, form } = useIndexPage();

  return (
    <div className='h-[100vh] w-full bg-hero bg-cover bg-no-repeat'>
      <div className='container grid h-full grid-cols-2 items-center gap-5'>
        <div className='flex h-[100%] flex-col justify-center gap-12'>
          <img alt='airplane' src={airplane} />
          <p className='text-center text-3xl text-white'>ЦФТ доставка - быстро, удобно, надежно!</p>
        </div>
        <div className='justify-cente flex w-full items-center'>
          <form
            className='flex w-[500px] max-w-[500px] flex-col gap-6 rounded-3xl bg-white px-16 py-8'
            onSubmit={form.calculateForm.handleSubmit(functions.onSubmit)}
          >
            <div>
              <p className='text- text-2xl font-bold'>Рассчитать доставку</p>
            </div>

            <div className='flex flex-col gap-1'>
              <Select.Root onValueChange={(id) => functions.setPointCoordonates('senderPoint', id)}>
                <Select.Label>Город отправки</Select.Label>
                <Select.Trigger className='w-full' disabled={!state.deliveryPoints.isSuccess}>
                  <Select.Icon>
                    <IconLocation />
                  </Select.Icon>
                  <Select.Value placeholder='Выберите город отправки' />
                </Select.Trigger>
                <Select.Content>
                  {state.deliveryPoints.data?.data.points.map((point) => (
                    <Select.Item key={point.id} value={point.id}>
                      {point.name}
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Root>
              {form.calculateForm.formState.errors.senderPoint?.message && (
                <p className='text-sm text-error'>
                  {form.calculateForm.formState.errors.senderPoint?.message}
                </p>
              )}
            </div>
            <div className='flex flex-col gap-1'>
              <Select.Root
                onValueChange={(id) => functions.setPointCoordonates('receiverPoint', id)}
              >
                <Select.Label>Город назначения</Select.Label>
                <Select.Trigger className='w-full' disabled={!state.deliveryPoints.isSuccess}>
                  <Select.Icon>
                    <IconNavigate />
                  </Select.Icon>
                  <Select.Value placeholder='Выберите город назначения' />
                </Select.Trigger>
                <Select.Content>
                  {state.deliveryPoints.data?.data.points.map((point) => (
                    <Select.Item key={point.id} value={point.id}>
                      {point.name}
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Root>
              {form.calculateForm.formState.errors.receiverPoint?.message && (
                <p className='text-sm text-error'>
                  {form.calculateForm.formState.errors.receiverPoint?.message}
                </p>
              )}
            </div>
            <div>
              <Select.Root onValueChange={(id) => functions.setPackageType('package', id)}>
                <Select.Label>Размер посылки</Select.Label>
                <Select.Trigger className='w-full' disabled={!state.packageType.isSuccess}>
                  <Select.Icon>
                    <IconPackage />
                  </Select.Icon>
                  <Select.Value placeholder='Выберите размер посылки' />
                </Select.Trigger>
                <Select.Content>
                  <Tab.Root defaultValue={TAB.APROXIMATE}>
                    <Tab.List>
                      <Tab.Trigger value='aproximate'>Примерные</Tab.Trigger>
                      <Tab.Trigger value='custom'>Точные</Tab.Trigger>
                    </Tab.List>
                    <Tab.Content value={TAB.APROXIMATE}>
                      {state.packageType.data?.data.packages.map((pack) => (
                        <Select.Item key={pack.id} value={pack.id}>
                          {`${pack.name}, ${pack.height} cm x ${pack.weight} cm x ${pack.length} cm `}
                        </Select.Item>
                      ))}
                    </Tab.Content>
                    <Tab.Content value={TAB.CUSTOM}>
                      <div className='flex flex-col gap-2 py-2'>
                        <div className='flex items-center justify-between gap-2'>
                          <p>Длина</p>
                          <Input
                            placeholder='cm'
                            type='number'
                            {...form.calculateForm.register('package.length', {
                              required: { value: true, message: 'is rewuired' }
                            })}
                          />
                        </div>
                        <div className='flex items-center justify-between gap-2'>
                          <p>Ширина</p>
                          <Input
                            placeholder='cm'
                            type='number'
                            {...form.calculateForm.register('package.width', {
                              required: { value: true, message: 'is rewuired' }
                            })}
                          />
                        </div>
                        <div className='flex items-center justify-between gap-2'>
                          <p>Высота</p>
                          <Input
                            placeholder='cm'
                            type='number'
                            {...form.calculateForm.register('package.height', {
                              required: { value: true, message: 'is rewuired' }
                            })}
                          />
                        </div>
                        <div className='flex items-center justify-between gap-2'>
                          <p>Вес</p>
                          <Input
                            placeholder='кг'
                            type='number'
                            {...form.calculateForm.register('package.weight', {
                              required: { value: true, message: 'is rewuired' }
                            })}
                          />
                        </div>
                      </div>
                    </Tab.Content>
                  </Tab.Root>
                </Select.Content>
              </Select.Root>
              {form.calculateForm.formState.errors?.package?.message && (
                <p className='text-sm text-error'>
                  {form.calculateForm.formState.errors.package?.message}
                </p>
              )}
            </div>
            <Button type='submit'>Рассчитать</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Typography component
