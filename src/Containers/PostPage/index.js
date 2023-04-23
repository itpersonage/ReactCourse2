import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export const PostPage = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  console.log(navigate);

  const goBack = () => {
    // navigate(-1)
    navigate('/posts/dsdsdsd');
  };

  const goForward = () => {
    // navigate(1)
    navigate('/posts/3343434443');
  };
  return (
    <>
      <span>{params.id}</span>
      <button onClick={goBack}>Go back</button>
      <button onClick={goForward}>Go forward</button>
    </>
  );
};
