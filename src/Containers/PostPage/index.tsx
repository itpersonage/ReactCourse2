import React from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

export const PostPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/posts/5657');
  };

  const goForward = () => {
    navigate('/');
  };

  return (
    <div>
      <span>{`Hi i am post number - ${params.id ?? ''} `}</span>
      <button onClick={goBack}>Go back</button>
      <button onClick={goForward}>Go forward</button>
    </div>
  );
};
