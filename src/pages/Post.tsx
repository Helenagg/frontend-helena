import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppDispatch, RootState } from '../store';
import { initializePost } from '../reducers/postEditReducer';
import Card from '../components/Card';
import { toast } from '../reducers/notificationReducer';
import { PotsTexts } from '../locale/es';

const Post = () => {
  let { id } = useParams();
  const postId = id ? parseInt(id, 10) : null;
  const { data, loading, error } = useSelector(
    (state: RootState) => state.post
  );
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  console.log('data?.body', data?.body)
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (postId !== null) dispatch(initializePost(postId));
  }, [dispatch]);


const handleSave = (newTitle: string, newBody: string) => {
  console.log('newBpdy', newBody)

  if (newTitle !== data?.title || newBody !== data?.body) {
    setTitle(newTitle)
    setBody(newBody)
    dispatch(toast(PotsTexts.EDITED, 'success'))
  } else {
    dispatch(toast(PotsTexts.EDITED_ERROR, 'error'))
  }
}
  return (
    <div className='container mt-20 flex flex-col min-h-screen'>
      {data && (
        <Card 
        isUpdate={true}
        title={data?.title}
        body={data?.body}
        userId={data?.userId}
        cardId={data.id.toString()}
        onSave={handleSave}
        />
      )}
    </div>
  );
};

export default Post;
