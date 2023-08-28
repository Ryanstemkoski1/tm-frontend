import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../';
import { closeInform, InformState } from '../reducers/inform';

interface UseInformProps extends InformState {
  closeInform: () => void;
}

export const useInform = (): UseInformProps => {
  const allState = useSelector((state: RootState) => state.inform);
  const dispatch = useDispatch();

  return {
    ...allState,
    closeInform: () => dispatch(closeInform()),
  };
};
