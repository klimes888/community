import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Main from './src/components/Main';

interface Props {}

const App = ({  }: Props) => {
  return <Main/>;
};

ReactDOM.render(<App />, document.getElementById('app'));