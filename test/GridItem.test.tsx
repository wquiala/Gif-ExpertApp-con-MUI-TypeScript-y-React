import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { Images } from '../src/components/GifGrid';
import GridItem from '../src/components/GridItem';

describe('Pruebas en <GridItem/>', () => {
  test('debe mostrar el componente correctamente', () => {
    const img = {
      id: 'VXJWhaO7afRe',
      title: 'One Punch Man GIF',
      url: {
        height: '303',
        size: '1534435',
        url: 'https://media4.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=28f2786d833x2dh0hiq0fgwvyhpni9d4lpo3fu0rpcrzk5dz&rid=giphy.gif&ct=g',
        width: '540',
      },
    };
    const wrapper = render();
  });
});
