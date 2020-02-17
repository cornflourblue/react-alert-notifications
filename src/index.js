import React from 'react';
import { render } from 'react-dom';

import { App } from './app';

import './styles.less';

render(
    <App />,
    document.getElementById('app')
);