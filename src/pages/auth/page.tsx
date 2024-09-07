import { PageLayout } from '@/components/layout';
import { Button, Input, Typography } from '@/components/ui';

import { useAuthPage } from './hooks/useAuthPage';

export const AuthPage = () => {
  const { state, funtions } = useAuthPage();

  return (
    <PageLayout>
      <form className='container' onSubmit={funtions.onSubmit}>
        <div className='flex w-[464px] flex-col gap-6'>
          <Typography variant='title-h2'>Вход</Typography>
          <Typography variant='paragraph-16'>
            Введите номер телефона для входа <br /> в личный кабинет
          </Typography>
          <Input
            placeholder='Телефон'
            {...state.form.register('phone')}
            error={!!state.form.formState.errors?.phone}
            helpText={state.form.formState.errors?.phone?.message}
          />

          {state.stage === 'CONFIRMATION' && (
            <Input
              placeholder='Телефон'
              {...state.form.register('code')}
              error={!!state.form.formState.errors?.code}
              helpText={state.form.formState.errors?.code?.message}
              type='number'
            />
          )}
          <Button type='submit'>{state.stage === 'PHONE' ? 'Продолжить' : 'Войти'}</Button>
        </div>
      </form>
    </PageLayout>
  );
};
