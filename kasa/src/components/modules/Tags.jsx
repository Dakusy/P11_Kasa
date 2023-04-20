import React from 'react';

function Tags(props) {
  const { tags } = props;

  return (
    <ul className="tags">
      {tags.map((tag, index) => (
        <li key={index}>{tag}</li>
      ))}
    </ul>
  );
}

export default Tags;