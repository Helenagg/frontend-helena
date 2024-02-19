import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  title?: string;
  body?: string;
  userId?: number;
  id?: number;
  onDelete?: () => void;
  onSave?: (title: string, body: string) => void;
  cardId: string;
  isUpdate: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  userId,
  body,
  cardId,
  onDelete,
  isUpdate,
  onSave,
}) => {
  const [editableTitle, setEditableTitle] = useState(title)
  const [editableBody, setEditableBody] = useState(body)

  const handleInputTitle = (e: React.FormEvent<HTMLDivElement>) => {
    setEditableTitle(e.currentTarget.textContent || '');
  };

  const handleInputBody = (e: React.FormEvent<HTMLDivElement>) => {
    setEditableBody(e.currentTarget.textContent || '');
  };

  const handleSave = () => {
    if (onSave) onSave(editableTitle || '', editableBody || '');
  }
  return (
   <div className='max-w-sm rounded overflow-hidden shadow-lg'>
      {!isUpdate ? (
        <>
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2'>{title}</div>
            <p className='text-gray-700 text-base'>{body}</p>
          </div>
          <div className='px-6 pt-4 pb-2'>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              Created By: {userId}
            </span>
          </div>
        </>
      ) : (
        <>
          <div className='px-6 py-4'>
            <div
              contentEditable='true'
              suppressContentEditableWarning={true}
              onInput={handleInputTitle}
              className='font-bold text-xl mb-2'
            >{title}</div>

            <div
              contentEditable='true'
              suppressContentEditableWarning={true}
              onInput={handleInputBody}
              className='text-gray-700 text-base'
            >{body}</div>
          </div>
          <div className='px-6 pt-4 pb-2'>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              Created By: {userId}
            </span>
          </div>
        </>
      )}

      {!isUpdate ? (
        <div className='flex flex-inline gap-2 pb-2 pl-2'>
          <button className='btn-white' onClick={onDelete}>
            Delete
          </button>
          <Link to={cardId} className='btn-primary'>
            Update
          </Link>
        </div>
      ) : (
        <div className='flex flex-inline gap-2 pb-2 pl-2'>
          <button className='btn-white' onClick={handleSave}>
            Save
          </button>
          <Link to='/' className='btn-primary'>
            Go Back
          </Link>
        </div>
      )}
    </div>
  );
};

export default Card;
