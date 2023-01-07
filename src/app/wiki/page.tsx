import React from 'react';
import Link from 'next/link';

const endpoints = [
  'ability-scores',
  'alignments',
  'backgrounds',
  'classes',
  'conditions',
  'damage-types',
  'equipment',
  'equipment-categories',
  'feats',
  'features',
  'languages',
  'magic-items',
  'magic-schools',
  'monsters',
  'proficiencies',
  'races',
  'rule-sections',
  'rules',
  'skills',
  'spells',
  'subclasses',
  'subraces',
  'traits',
  'weapon-properties',
];

const Page = () => {
  return (
    <div className="p-2">
      <span className="text-xl">Categories:</span>
      <div className="flex flex-col gap-1">
        {endpoints.map((endp) => (
          <Link key={endp} href={`/wiki/${endp}`}>
            {endp}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
