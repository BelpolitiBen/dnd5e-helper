import React from 'react';

type Props = {
  params: {
    trait: string;
  };
};

const Trait = (props: Props) => {
  return <div>Trait {props.params.trait}</div>;
};

export default Trait;
