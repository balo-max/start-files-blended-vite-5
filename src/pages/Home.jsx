import Section from '../components/Section/Section';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import { useEffect } from 'react';
import { fetchCoordUser} from '../redux/currency/operations';
import { useDispatch, useSelector } from 'react-redux';
import { setBaseCurrency } from '../redux/currency/currencySlie';
import ExchangeForm from '../components/ExchangeForm/ExchangeForm';
import ExchangeInfo from '../components/ExchangeInfo/ExchangeInfo';
import { selectExchangeInfo } from '../redux/selectors';

const Home = () => {
  const isError = false;
  const dispatch = useDispatch();
  const exchangeInfo = useSelector(selectExchangeInfo);
  console.log(exchangeInfo);

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    const succes = ({ coords }) => {
      dispatch(fetchCoordUser(coords));
    };

    const error = () => {
      dispatch(setBaseCurrency('USD'))
    };

    navigator.geolocation.getCurrentPosition(succes, error, options);
  },[dispatch]);

  return (
    <Section>
      <Container>
        <Heading info title="What currencies do you want to exchange?🙂" />
        <ExchangeForm/>

        {isError && 
          <Heading
            error
            title="Something went wrong...😐 Check the data validity and try again!"
          />}
        
        {exchangeInfo && <ExchangeInfo exchangeInfo={exchangeInfo}/>}
      </Container>
    </Section>
  );
};

export default Home;
