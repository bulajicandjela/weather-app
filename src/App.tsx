import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { GlobalStyle } from './App.style';
import CityContainer from './containers/CityContainer';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/weather">
            <CityContainer></CityContainer>
          </Route>
          <Route path="/" exact>
            <Redirect
              to={`/weather`}
            ></Redirect>
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App;
