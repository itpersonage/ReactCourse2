import React from 'react';

interface Tprops {
  initData: {
    id: number;
    link: string;
  };
  name: string;
}

export const Description = ({ initData, name }: Tprops) => {
  return (
    <>
      {name}
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a className="App-link" href={initData.link} target="_blank" rel="noopener noreferrer">
        Learn React {initData.id}
      </a>
    </>
  );
};
