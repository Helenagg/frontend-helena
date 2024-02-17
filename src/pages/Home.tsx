import React, { useEffect } from 'react';
import Card from '../components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { initializeAllPost } from '../reducers/postReducer';

const Home = () => {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.allPosts
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(initializeAllPost());
  }, [dispatch]);
  console.log('data', data);
  return (
    <div className='flex flex-wrap gap-4 m-4'>
      {data &&
        data.map((post) => (
          <Card title={post.title} body={post.body} userId={post.userId} />
        ))}
    </div>
  );
};

export default Home;
