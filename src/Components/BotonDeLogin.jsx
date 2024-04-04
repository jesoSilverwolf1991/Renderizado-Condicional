import React from 'react';

class BotonDeLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false 
    };
  }

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button;

    if (isLoggedIn) {
      button = <button className='border-2 border-black w-80 p-5 m-5 bg-white cursor-pointer font-bold rounded-full' onClick={this.handleLogoutClick}>Cerrar sesión</button>;
    } else {
      button = <button className='border-2 border-black w-80 p-5 m-5 bg-black cursor-pointer text-white font-bold rounded-full ' onClick={this.handleLoginClick}>Iniciar sesión</button>;
    }

    return (
      <div>
        {button}
      </div>
    );
  }
}

export default BotonDeLogin;
