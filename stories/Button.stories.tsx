import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from '../components/button';

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <Button onClick={action('button-clicked')}>AntD Button</Button>;
