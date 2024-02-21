import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CardTexts } from '../../locale/en';

interface CardProps {
  title?: string;
  body?: string;
  userId?: number;
  id?: number;
  onDelete?: () => void;
  onSave?: (title: string, body: string) => void;
  cardId: string;
  isUpdate: boolean;
  bgColor?: string
}

const Card: React.FC<CardProps> = ({
  title,
  userId,
  body,
  cardId,
  onDelete,
  isUpdate,
  onSave,
  bgColor = '#FFFFFF'
}) => {
  const [editableTitle, setEditableTitle] = useState(title);
  const [editableBody, setEditableBody] = useState(body);

  const handleInputTitle = (e: React.FormEvent<HTMLDivElement>) => {
    setEditableTitle(e.currentTarget.textContent || '');
  };

  const handleInputBody = (e: React.FormEvent<HTMLDivElement>) => {
    setEditableBody(e.currentTarget.textContent || '');
  };

  const handleSave = () => {
    if (onSave) onSave(editableTitle || '', editableBody || '');
  };
  return (
    <div style={{ backgroundColor: bgColor }} className='max-w-sm rounded overflow-hidden shadow-lg min-h-80'>
      {!isUpdate ? (
        <>
          <div className='px-6 py-4'>
            <div className={`font-bold text-xl mb-2 ${bgColor === "#000000" ? 'text-white' : 'text-black' } text-base`}>{title}</div>
            <p className={`${bgColor === "#000000" ? 'text-white' : 'text-gray-700' } text-sm`}>{body}</p>
          </div>
          <div className='px-6 pt-4 pb-2'>
            <span className='inline-block bg-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
               {CardTexts.USER_ID}{userId}
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
            >
              {title}
            </div>

            <div
              contentEditable='true'
              suppressContentEditableWarning={true}
              onInput={handleInputBody}
              className='text-gray-700 text-base'
            >
              {body}
            </div>
          </div>
          <div className='px-6 pt-4 pb-2'>
            <span className='inline-block bg-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
            {CardTexts.USER_ID}{userId}
            </span>
          </div>
        </>
      )}

      {!isUpdate ? (
        <div className='flex flex-inline gap-2 pb-2 pl-2'>
          <button className='btn-white' onClick={onDelete}>
            {CardTexts.DELETE}
          </button>
          <Link to={cardId} className='btn-primary'>
          {CardTexts.UPDATE}
          </Link>
        </div>
      ) : (
        <div className='flex flex-inline gap-2 pb-2 pl-2'>
          <button className='btn-white' onClick={handleSave}>
          {CardTexts.SAVE}
          </button>
          <Link to='/posts' className='btn-primary'>
          {CardTexts.GO_BACK}
          </Link>
        </div>
      )}
    </div>
  );
};

export default Card;
