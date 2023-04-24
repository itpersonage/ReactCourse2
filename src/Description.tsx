import React from 'react';

interface TProps {
  initData: {
    id: string;
    link: string;
  };
  name: string;
}

export const Description = (props: TProps) => {
  const { initData, name } = props;
  return (
    <>
      <p>{`Hello ${name}`}</p>
      <a className="App-link" href={initData.link} target="_blank" rel="noopener noreferrer">
        {`Learn React ${initData.id}`}
      </a>
    </>
  );
};
