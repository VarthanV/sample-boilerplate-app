import * as React from 'react';
import { render } from '@testing-library/react';

import { TodoPage } from '..';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe('<TodoPage  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<TodoPage />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
