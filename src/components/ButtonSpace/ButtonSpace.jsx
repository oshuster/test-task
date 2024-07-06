import { useDispatch, useSelector } from 'react-redux';
import css from './ButtonSpace.module.scss';
import {
  // submitForm,
  setFormValue,
  setFormNumber,
} from '../../redux/submitSlice';
import { selectFormNumber } from '../../redux/selectors';

export const ButtonSpace = () => {
  const dispatch = useDispatch();
  const showedForm = useSelector(selectFormNumber);

  const handleSubmit = () => {
    const form = document.querySelector(`[data-id="${showedForm}"]`);
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());

    dispatch(setFormValue(values));
    // dispatch(submitForm(true));
  };

  const switchForm = (e) => {
    const formNumber = e.target.dataset.idBtn;
    dispatch(setFormNumber(formNumber));
  };

  return (
    <div>
      <button data-id-btn="1" className={css.btn} onClick={switchForm}>
        Form 1
      </button>
      <button data-id-btn="2" className={css.btn} onClick={switchForm}>
        Form 2
      </button>
      <button data-id-btn="3" className={css.btn} onClick={switchForm}>
        Form 3
      </button>
      <button onClick={handleSubmit} form={`form-${showedForm}`} type="submit">
        Submit
      </button>
    </div>
  );
};
