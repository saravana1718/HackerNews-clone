import { BrowserRouter, Route, Switch,Redirect } from 'react-router-dom';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import PageNotFound from './Components/PageNotFound';
import ShowStories from './Components/ShowStories';
import logo from './logo.svg';


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Switch>
        <Route path="/" render={() => <Redirect to="/top" />} exact={true} />
<Route
  path="/:type"
  render={({ match }) => {
    const { type } = match.params;
    if (!['top', 'new', 'best'].includes(type)) {
       return <Redirect to="/" />;
    }
    return <ShowStories type={type} />;
  }}
/>
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
