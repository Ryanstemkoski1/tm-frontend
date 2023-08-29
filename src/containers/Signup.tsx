import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { Link, redirect } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useForm, SubmitHandler } from 'react-hook-form';
import { CircularProgress } from '@mui/material';

import { useSignupMutation } from '@app/store/services/auth';
import { SignupPayload } from '@app/store/services/auth/type';
import { registerValidation } from '@app/validations';
import { HTextField } from '@app/components/HTextField';

export default function Signup() {
  const [signup, { isLoading }] = useSignupMutation();
  const { handleSubmit, control, reset } = useForm<SignupPayload>({
    resolver: registerValidation,
  });

  const onSubmit: SubmitHandler<SignupPayload> = (data) => {
    signup(data).then(() => {
      reset();
      redirect('/signin');
    });
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign Up
      </Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
        <HTextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          control={control}
        />
        <HTextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          control={control}
        />
        <HTextField
          margin="normal"
          required
          fullWidth
          name="confirm_password"
          label="Confirm Password"
          type="password"
          id="confirm_password"
          autoComplete="current-password"
          control={control}
        />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          {isLoading ? <CircularProgress color="primary" /> : 'Sign Up'}
        </Button>
        <Grid container>
          <Grid item>
            <Link to="/">Back to Sign In</Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
