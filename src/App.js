import { SplitScreen } from './SplitScreen';

const LeftHandComponent = ({ name }) => {
  return <h1 style={{backgroundColor: 'green'}}>{name}</h1>;
}

const RightHandComponent = ({ message }) => {
  return <p style={{backgroundColor: 'red'}}>{message}</p>
}

function App() {
  return (
   <SplitScreen leftWeight={2} rightWeight={1}>
      <LeftHandComponent name="Murilo"/>
      <RightHandComponent message="How are you?"/>
   </SplitScreen>
    );
}

export default App;
