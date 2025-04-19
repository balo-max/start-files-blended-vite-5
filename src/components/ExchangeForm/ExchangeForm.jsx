import { RiExchangeDollarFill } from 'react-icons/ri';
import styles from './ExchangeForm.module.css';
import { useDispatch } from 'react-redux';
import { getExchangeInfo } from '../../redux/currency/operations';

const ExchangeForm = () => {
  const dispatch = useDispatch();
  
  const handeSubmit = (event) => {
    event.preventDefault();

    const value = event.target.elements.text.value;
    const str = value.split(' ');

    dispatch(getExchangeInfo({
      to: str[3],
      from: str[1],
      amount: str[0]
    }))

}

  return (
    <form className={styles.form} onSubmit={handeSubmit}>
      <button className={styles.button} type="submit">
        <RiExchangeDollarFill className={styles.icon} />
      </button>

      <input name='text' title="Request format 15 USD in UAH" pattern='^\d+(\.\d{1,2})?\s[a-zA-Z]{3}\sin\s[a-zA-Z]{3}$' className={styles.input} />
    </form>
  );
};

export default ExchangeForm;
