import React from 'react';

export function capitalize(text) {
  const [firstLetter, ...rest] = text;
  return `${firstLetter.toUpperCase()}${rest.join('')}`;
}

export default function Capitalize({text}) {
  return <span>{capitalize(text)}</span>
}
