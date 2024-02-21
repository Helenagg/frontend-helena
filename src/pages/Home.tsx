import React, { useEffect, useState } from 'react';
import Card from '../components/Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { initializeAllPosts } from '../reducers/allPostsReducer';
import ColorPicker from '../components/ColorPicker';

const Home = () => {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.allPosts
  );
  const [localData, setLocalData] = useState(data);
  const [selectedColor, setSelectedColor] = useState<string>('');

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(initializeAllPosts());
  }, [dispatch]);

  useEffect(() => {
    setLocalData(data);
  }, [data]);

  const handleDelete = (id: number) => {
    setLocalData(localData.filter((post) => post.id !== id));
  };

  const handleColorChangeComplete = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div className='container mt-20'>
      <ColorPicker onChangeComplete={handleColorChangeComplete} />
      <div className='flex flex-wrap gap-4 m-4 justify-center'>
        {localData &&
          localData.map((post) => (
            <div key={post.id}>
              <Card
                isUpdate={false}
                title={post.title}
                body={post.body}
                userId={post.userId}
                onDelete={() => handleDelete(post.id)}
                cardId={`/post/${post.id}`}
                bgColor={selectedColor}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
