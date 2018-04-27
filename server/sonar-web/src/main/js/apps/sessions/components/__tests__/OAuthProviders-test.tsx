/*
 * SonarQube
 * Copyright (C) 2009-2018 SonarSource SA
 * mailto:info AT sonarsource DOT com
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import OAuthProviders from '../OAuthProviders';

const identityProviders = [
  {
    backgroundColor: '#000',
    iconPath: '/some/path',
    key: 'foo',
    name: 'Foo'
  },
  {
    backgroundColor: '#00F',
    helpMessage: 'Help message!',
    iconPath: '/icon/path',
    key: 'bar',
    name: 'Bar'
  }
];

it('should render correctly', () => {
  expect(
    shallow(<OAuthProviders identityProviders={identityProviders} returnTo="" />)
  ).toMatchSnapshot();
});

it('should use the custom label formatter', () => {
  expect(
    shallow(
      <OAuthProviders
        formatLabel={name => 'custom_format.' + name}
        identityProviders={[identityProviders[0]]}
        returnTo=""
      />
    )
  ).toMatchSnapshot();
});