import logo from './logo.svg';
import './App.css';
import Greet1 from './components/Greet';
import Welcome1  from './components/Welcome';
import Count from './components/Count';
import FunctionClick from './components/FunctionClick';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import InlineStyle from './components/InlineStyle';
import Form from './components/Form';
import Welcome from './components/Welcome';
import LifeCycle from './components/LifeCycle';
import FragmentDemo from './components/FragmentDemo';
import RefsDemo from './components/RefsDemo';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import User from './components/User';
import { UserProvider } from './components/userContext';
import ComponentC from './components/ComponentC';
function App() {
  return (
    <div className="App">
       {/* <Greet1 name="bruce"><p>ddddd</p></Greet1>
      <Greet1 name="diana"><button>jjjjj</button></Greet1>
      <Greet1 name="roy"/> */}
      {/* <Welcome1 /> */}
      {/* <UserProvider value="Vishwasss"> */}
        <ComponentC />
      {/* </UserProvider> */}
      <ErrorBoundary>
      <Hero heroName="Batman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName="SuperMan"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName="Joker"></Hero>
      </ErrorBoundary>
      <User render={(login) => login ? 'vishws' : 'guru'}/>
      <PortalDemo />
      <RefsDemo />
      <FragmentDemo />
      <LifeCycle />
      <Welcome />
      <Form />
      <InlineStyle />
      <StyleSheet />
      <NameList />
      {/* <UserGreeting /> */}
      {/* <Count /> 
      <FunctionClick /> */}
    </div>
  );
}

export default App;
