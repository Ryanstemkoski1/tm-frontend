import { TextField } from '@mui/material';
import type { StandardTextFieldProps } from '@mui/material';
import { useController, Control } from 'react-hook-form';

interface Props extends StandardTextFieldProps {
  control: Control<any>;
  name: string;
}

export const HTextField = ({ name, control, ...props }: Props) => {
  const { field, fieldState } = useController({
    name,
    control,
  });

  return (
    <TextField
      onChange={field.onChange}
      onBlur={field.onBlur}
      value={field.value}
      name={field.name}
      inputRef={field.ref}
      error={!!fieldState.error?.message}
      helperText={fieldState.error?.message}
      {...props}
    />
  );
};
