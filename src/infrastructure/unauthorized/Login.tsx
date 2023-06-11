import { Box, Button, Grid } from '@mui/material';
import reactLogo from 'assets/img/banner-moi.png';
import Typography from '@mui/material/Typography';
import { LoginBox, FormTextField, StyledPaper } from 'components';
import { palette } from 'core';
import axios from 'axios';
import { Formik, FormikHelpers, FormikProps, Form, Field } from 'formik';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import showToast, { errorSwal } from 'lib/sweetalert';

interface FormValues {
  username: string;
  password: string;
  client_secret: string;
}

function Login() {
  const [urlCapcha, setUrlCapcha] = useState('');
  const [rescapcha, setRescapcha] = useState<any>();

  const { t } = useTranslation('translation');
  const validationSchema = yup.object().shape({
    username: yup.string().required('gl.errUserNmae'),
    client_secret: yup.number().required(t('لطفا کپچا را وارد نمایید')).typeError('لطفا فقط اعداد را وارد نمایید'),
    password: yup.string().min(8, t('gl.errPasswordLength')).required(t('gl.errPassword')),
  });

  useEffect(() => {
    fetch('https://nezarat.moi.ir/api/captcha/generate')
      .then(res => {
        setUrlCapcha(res?.url);
        return res.blob();
      })
      .then(blob => {
        const myFile = new File([blob], 'image/png', {
          type: blob.type,
        });
        setRescapcha(myFile as any) as any;
      });
  }, []);

  return (
    <LoginBox height={'100vh'}>
      <StyledPaper>
        <Grid
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '98.3vh',
          }}
        >
          <Box
            sx={{ flexGrow: 0 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              backgroundColor: 'white',
              padding: '0 15px',
            }}
          >
            <div>
              <img style={{ width: '20%', marginTop: '-34px' }} src={reactLogo} alt='react logo' />
              <Typography sx={{ marginTop: '10px' }} variant='h6' gutterBottom>
                {t('gl.arbaeen')}
              </Typography>
            </div>

            <Formik
              initialValues={{
                username: '',
                password: '',
                client_secret: '',
              }}
              validationSchema={validationSchema}
              onSubmit={(values: FormValues, formikHelpers: FormikHelpers<FormValues>) => {
                const { username, password, client_secret } = values;
                const saveItem = {
                  username,
                  password,
                  client_secret: String(client_secret),
                  image: rescapcha,
                };
                alert(JSON.stringify(saveItem, null, 2));
                console.log(saveItem);
                var formData = new FormData();
                formData.append('username', username);
                formData.append('password', password);
                formData.append('client_secret', client_secret);
                formData.append('image', rescapcha);
                axios({
                  method: 'POST',
                  url: 'https://nezarat.moi.ir/api/token',
                  data: formData,
                  headers: {
                    'Content-Type': 'multipart/form-data', // Important
                  },
                })
                  .then(function (response) {
                    //handle success
                    console.log('response', response);
                  })
                  .catch(function ({ response }) {
                    //handle error
                    showToast(response?.data.detail);
                    formikHelpers.resetForm({});
                    formikHelpers.setSubmitting(false);
                  });
                formikHelpers.setSubmitting(false);
              }}
            >
              {(formikProps: FormikProps<FormValues>) => (
                <Form noValidate autoComplete='off'>
                  <Grid container spacing={0}>
                    <Grid item xs={12}>
                      <StyledPaper>
                        <Field id='username' label={t('gl.username')} type='username' name='username' size='small' component={FormTextField} />
                      </StyledPaper>
                    </Grid>
                    <Grid item xs={12}>
                      <StyledPaper>
                        <Field id='password' label={t('gl.password')} type='password' name='password' size='small' component={FormTextField} />
                      </StyledPaper>
                    </Grid>
                    <Grid item xs={12}>
                      <img
                        style={{
                          width: '100%',
                          height: '80px',
                          padding: ' 0px 9px',
                        }}
                        src={urlCapcha}
                        alt='react logo'
                      />
                      <Grid item xs={12}>
                        <StyledPaper>
                          <Field id='client_secret' label={t('gl.code')} type='client_secret' name='client_secret' size='small' component={FormTextField} />
                        </StyledPaper>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <StyledPaper>
                        <Button
                          type='submit'
                          variant='contained'
                          color='success'
                          size='large'
                          sx={{
                            width: '100%',
                            background: palette.green[1],
                            color: palette.white[0],
                            ':hover': {
                              background: palette.green[0],
                              color: palette.white[0],
                            },
                          }}
                        >
                          {t('gl.loginPanele')}
                        </Button>
                      </StyledPaper>
                    </Grid>
                    <Grid item xs={12}>
                      <StyledPaper>
                        {' '}
                        <Typography mt={1} variant='caption' display='block' gutterBottom>
                          {t('gl.hOJANGroup')}
                        </Typography>
                      </StyledPaper>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Box>
        </Grid>
      </StyledPaper>
    </LoginBox>
  );
}
export default Login;
