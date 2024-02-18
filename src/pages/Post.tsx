import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppDispatch, RootState } from '../store';
import { initializePost } from '../reducers/postEditReducer';
import Card from '../components/Card';
import { toast } from '../reducers/notificationReducer';
import { PotsTexts } from '../locale/es';

// interface RouteParams {
//     id: string;
// }

const Post = () => {
  let { id } = useParams();
  const postId = id ? parseInt(id, 10) : null;
  const { data, loading, error } = useSelector(
    (state: RootState) => state.post
  );
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (postId !== null) dispatch(initializePost(postId));
  }, [dispatch]);

//   useEffect(() => {
//     if (data) {
//         setTitle(data.title)
//         setBody(data.body)
//     }
//   }, [data])

//   const handleTitleChange = (event) => {
//     setTitle(event.target.innerText)
//   };
//   const handleBodyChange = (event) => {
//     setBody(event.target.innerText)
//   };

const handleSave = (newTile: string, newBody: string) => {
    setTitle(newTile)
    setBody(newBody)
    dispatch(toast(PotsTexts.EDITED, 'success'))
}
  return (
    <div className='container'>
      {data && (
        <Card 
        isUpdate={true}
        title={data.title}
        body={data.body}
        cardId={data.id.toString()}
        onSave={handleSave}
        />
      )}
    </div>
  );
};

export default Post;
