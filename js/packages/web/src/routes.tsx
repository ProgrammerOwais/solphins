import { HashRouter, Route, Switch } from 'react-router-dom';
import { Providers } from './providers';
import { 
  CollectionView,
  HomeView,
  MintView,
  TraitsView
} from './views';

export function Routes() {
  return (
    <>
      <HashRouter basename={'/'}>
        <Providers>
          <Switch>
            <Route
              exact
              path="/mint-whales"
              component={() => <MintView />}
            />
            <Route
              exact
              path="/whale-traits"
              component={() => <TraitsView />}
            />
            <Route
              exact
              path="/my-whales"
              component={() => <CollectionView />}
            />
            <Route path="/" component={() => <HomeView />} />
          </Switch>
        </Providers>
      </HashRouter>
    </>
  );
}
