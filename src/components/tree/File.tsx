import React from 'react';

import './sass/file.scss';

export default function File({ name }): JSX.Element {
    return <li key={`file-${name}`} className="file">{name}</li>;
}