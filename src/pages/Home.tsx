import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { initializeAllPost } from '../reducers/allPostsReducer';

const Home = () => {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.allPosts
  );
  const [localData, setLocalData] = useState(data);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(initializeAllPost());
  }, [dispatch]);

  useEffect(() => {
    setLocalData(data)
  }, [data])

  const handleDelete = (id: number) => {
    setLocalData(localData.filter((post) => post.id !== id));
  };
  console.log('data', localData);
  return (
    <div className='flex flex-wrap gap-4 m-4'>
      {localData &&
        localData.map((post) => (
          <div key={post.id}>
            <Card
              title={post.title}
              body={post.body}
              userId={post.userId}
              onDelete={() => handleDelete(post.id)}
            />
          </div>
        ))}
    </div>
  );
};

export default Home;
