/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import Lista from '../src/components/Lista';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly App', () => {
  renderer.create(<App />);
});

it('renders correctly Lista Mensagens', () => {
  renderer.create(<Lista mensagens={[]} />);
});
