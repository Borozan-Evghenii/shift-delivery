import { IconLocation } from '@/components/icons/svg';
import { PageLayout } from '@/components/layout';
import { Button, Input, Select, Toast, Typography } from '@/components/ui';

import { useProfilePage } from './hooks/useProfilePage';
import { ProfileLoading } from './loading';

export const ProfilePage = () => {
  const { state, functions } = useProfilePage();

  if (!state.user.isSuccess) {
    return <ProfileLoading />;
  }

  return (
    <PageLayout>
      <Typography variant='title-h2'> Профиль</Typography>
      <form className='grid w-full grid-cols-2 gap-6' onSubmit={functions.onSubmit}>
        <Input
          label='Фамилия'
          placeholder='Фамилия'
          {...state.form.register('firstname')}
          error={!!state.form.formState.errors.firstname}
          helpText={state.form.formState.errors.firstname?.message}
        />
        <Input
          disabled
          label='Номер телефона'
          placeholder='Номер телефона'
          {...state.form.register('phone')}
          error={!!state.form.formState.errors.phone}
          helpText={state.form.formState.errors.phone?.message}
        />
        <Input
          label='Имя'
          placeholder='Имя'
          {...state.form.register('lastname')}
          error={!!state.form.formState.errors.lastname}
          helpText={state.form.formState.errors.lastname?.message}
        />
        <Input
          label='Email'
          placeholder='Email'
          {...state.form.register('email')}
          error={!!state.form.formState.errors.email}
          helpText={state.form.formState.errors.email?.message}
        />
        <Input
          label='Отчество'
          placeholder='Отчество'
          {...state.form.register('middlename')}
          error={!!state.form.formState.errors.middlename}
          helpText={state.form.formState.errors.middlename?.message}
        />
        {state.form.formState.defaultValues && (
          <div className='flex flex-col gap-1'>
            <Select.Root
              defaultValue={state.form.getValues('city')}
              onValueChange={(name) => state.form.setValue('city', name)}
            >
              <Select.Label>Город отправки</Select.Label>
              <Select.Trigger className='w-full' disabled={!state.city.isSuccess}>
                <Select.Icon>
                  <IconLocation />
                </Select.Icon>
                <Select.Value placeholder='Выберите город' />
              </Select.Trigger>
              <Select.Content>
                {state.city.data?.data.points.map((point) => (
                  <Select.Item key={point.id} value={point.name}>
                    <Typography variant='paragraph-16'>{point.name}</Typography>
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
            {state.form.formState.errors.city?.message && (
              <p className='text-sm text-error'>{state.form.formState.errors.city?.message}</p>
            )}
          </div>
        )}
        <Button disabled={!state.form.formState.isValid} type='submit'>
          Обновить данные
        </Button>
      </form>

      <Toast.Item ref={state.toast} />
    </PageLayout>
  );
};
