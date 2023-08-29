import { useInform } from '@app/store/hooks';
import { Alert, AlertTitle } from '@mui/material';
import { useEffect } from 'react';

export const Inform = () => {
  const state = useInform();

  useEffect(() => {
    if (state.show) {
      const id = setTimeout(() => {
        state.closeInform();
      }, 5000);
      return () => {
        clearTimeout(id);
      };
    }
  }, [state.show]);

  if (!state.show) {
    return null;
  }

  return (
    <Alert onClose={() => state.closeInform()} severity={state.type}>
      <AlertTitle>Success</AlertTitle>
      {state.message}
    </Alert>
  );
};
