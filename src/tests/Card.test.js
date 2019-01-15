import React from 'react';
import { shallow } from 'enzyme';

import Card from '../Card';

describe('Card', () => {
  const app = shallow(
    <Card
      authors='Shawn Adams'
      downloads={1}
      info='test info'
      name='test name'
      project_uri='http://teachable.com'
      version='1'
      version_downloads={1}
    />
  );

  it('renders the card container', () => {
    expect(app.find('.card').exists()).toBe(true);
  });

  it('renders the gem name container', () => {
    expect(app.find('.name').exists()).toBe(true);
  });

  it('renders the gem version container', () => {
    expect(app.find('.version').exists()).toBe(true);
  });

  it('renders the gem info container', () => {
    expect(app.find('.info').exists()).toBe(true);
  });

  it('renders the card footer', () => {
    expect(app.find('.footer').exists()).toBe(true);
  });
});
