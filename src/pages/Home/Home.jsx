import styled from 'styled-components';
import yourImage from './../../assets/img/145.jpg';

const Header = styled.header`
  width: 100vw;
  height: 89vh;
  background-image: url(${yourImage});
  background-size: cover;
  background-position: center;
  background-repeat : no-repeat;

  @media (max-width: 768px) {
    background-size: contain;
    height: 100vh;
  }

  @media (max-width: 480px) {
    background-size: contain;
    height: 100vh;
  }
`;

const Home = () => {
  return (
    <>
    <Header />
    </>

  );
}

export default Home;
