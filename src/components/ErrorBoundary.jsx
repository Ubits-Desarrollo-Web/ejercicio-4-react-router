import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('error',error);
    console.error('componentStack',info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          Hubo un error en la aplicacion.
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;