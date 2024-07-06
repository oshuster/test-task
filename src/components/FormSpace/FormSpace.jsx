import { useSelector } from 'react-redux';
import { FormElement } from '../FormComponent/FormComponent';
import { selectFormNumber } from '../../redux/selectors';

export const FormSpace = () => {
  const formToShow = useSelector(selectFormNumber);

  return (
    <>
      {formToShow == 1 && <FormElement number={1} />}
      {formToShow == 2 && <FormElement number={2} />}
      {formToShow == 3 && <FormElement number={3} />}
    </>
  );
};
