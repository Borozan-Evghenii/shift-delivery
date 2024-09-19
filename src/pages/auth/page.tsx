import { PageLayout } from '@/components/layout';
import { Button, Input, Toast, Typography } from '@/components/ui';

import { Retry } from './components/retry/Retry';
import { useAuthPage } from './hooks/useAuthPage';

export const AuthPage = () => {
  const { state, functions } = useAuthPage();

  return (
    <PageLayout>
      <form className='container' onSubmit={functions.onSubmit}>
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
          <Button
            disabled={!functions.isValid() || state.form.formState.isSubmitting}
            type='submit'
          >
            {state.stage === 'PHONE' ? 'Продолжить' : 'Войти'}
          </Button>

          {state.otp.data?.data && (
            <Retry retryDelay={state.otp.data?.data.retryDelay}>
              <Typography
                variant='paragraph-14-underline'
                onClick={() => functions.onOtp({ phone: state.form.getValues('phone') })}
              >
                Отправить ещё раз
              </Typography>
            </Retry>
          )}
        </div>
      </form>
      <Toast.Item ref={state.toast} />
    </PageLayout>
  );
};
