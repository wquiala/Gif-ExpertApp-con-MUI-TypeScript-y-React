import { useEffect, useState } from 'react';
import { Images } from '../components/GifGrid';
import { getGif } from '@/helpers/getGifs';

interface Data {
  data: Images[];
  loading: boolean;
}

export const useFetchGifs = (category: string) => {
  const [state, setState] = useState<Data>({
    data: [],
    loading: true,
  });
  useEffect(() => {
    getGif(category).then((imgs) => {
      setState({
        data: imgs,
        loading: false,
      });
    });
  }, [category]);

  return state;
};
