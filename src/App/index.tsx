import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Header } from './components';
import { LoginData } from './type';

function RouteInterceptor({
  children,
  isAuthenticated,
  exact,
  ...rest
}: {
  children: any;
  isAuthenticated: any;
  path: any;
  exact?: any;
}) {
  return (
    <Route
      {...rest}
      exact={exact}
      render={({ location }) => (isAuthenticated ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: location },
          }}
        />
      ))}
    />
  );
}

const Home = lazy(() => import('./views/Dashboard'));

const Loading: React.FC = () => (
  <div className="container" style={{marginTop: 40}}>Loading.....</div>
);

function App({ user }: { user: LoginData; }) {
  return (
    <div>
      <Header />
      <Switch>
        <Suspense fallback={<Loading />}>
          <Route
            path="/"
            exact
            component={lazy(() => import('./views/Auth'))}
          />
          <RouteInterceptor isAuthenticated={user} path={"/app"}>
            <Home />
          </RouteInterceptor> 
        </Suspense>
      </Switch>
    </div>
  )
}

const mapStateToProps = ({ auth }: { auth: any }) => {
  const { user } = auth;
  return { user };
};

export default connect(mapStateToProps)(App);
