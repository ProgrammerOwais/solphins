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
              path="/mint-solphins"
              component={() => <MintView />}
            />
            <Route
              exact
              path="/solphin-traits"
              component={() => <TraitsView />}
            />
            <Route
              exact
              path="/my-solphins"
              component={() => <CollectionView />}
            />
            <Route path="/" component={() => <HomeView />} />
          </Switch>
        </Providers>
      </HashRouter>
    </>
  );
}
