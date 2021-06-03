import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../App/redux/actions/index';

function Auth(props: any) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (e) {
      e.preventDefault();
    }
    props.loginUser({
      email,
      password
    });
  }

  return (
    <main>
      <div className="login-container">
        <form onSubmit={(e) => handleSubmit(e)} className="login-box">
          {props.error && ( 
            <div className="alert-error">
              <div className="alert-error_text">
                {props.error}
              </div>
            </div>
          )}
          <h4>Login</h4>
          <div className="input-container">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e: any) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div className="input-container">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="login-box-button-container">
            <button disabled={props.loading} type="submit" className="login-box-button-container_button">
              Login
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}

const mapStateToProps = ({ auth }: { auth: any }) => {
  const { loading, error } = auth;
  return { loading, error };
};

const mapDispatchToProps = {
  loginUser,
};


export default connect(mapStateToProps, mapDispatchToProps)(Auth);
