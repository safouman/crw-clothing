import React from 'react';
import Spinner from '../spinner/spinner.component';

const WithSpinner = WrappedComponent => ({ isLoading, ...OtherProps }) => {
  return isLoading ? <Spinner /> : <WrappedComponent {...OtherProps} />;
};
export default WithSpinner;
