import { PageLayout } from '@/components/layout';
import { Button, Input, Typography } from '@/components/ui';

import { useProfilePage } from './hooks/useProfilePage';

export const ProfilePage = () => {
  const { state } = useProfilePage();

  return (
    <PageLayout>
      <Typography variant='title-h2'> Профиль</Typography>
      <div className='grid w-full grid-cols-2 gap-6'>
        <Input label='Фамилия' placeholder={state.user.data?.data.user.firstname} />
        <Input disabled label='Номер телефона' placeholder={state.user.data?.data.user.phone} />
        <Input label='Имя' placeholder={state.user.data?.data.user.lastname} />
        <Input label='Email' placeholder={state.user.data?.data.user.email} />
        <Input label='Отчество' placeholder={state.user.data?.data.user.middlename} />
        <Input label='Город' placeholder={state.user.data?.data.user.city} />
      </div>
      <Button>Обновить данные</Button>
    </PageLayout>
  );
};
