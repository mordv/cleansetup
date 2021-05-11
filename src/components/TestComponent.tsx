import React from 'react';

interface TestComponentProps {
  name: string;
}

export const TestComponent: React.FC<TestComponentProps> = ({ name }) => {
  return <div>{name}</div>;
};
