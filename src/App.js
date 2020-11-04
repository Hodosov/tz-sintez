import { Redirect, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import { AboutPage } from './components/AboutPage';
import { MapPage } from './components/MapPage';

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`

function App() {
  return (
    <Wrapper>
      <Switch>
        <Route path='/' exact component={MapPage} />
        <Route path='/about' component={AboutPage} />
        <Redirect to='/' />
      </Switch>
    </Wrapper>
  );
}

export default App;
