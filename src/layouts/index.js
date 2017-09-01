import React from 'react';

// Review import './index.css';

const TemplateWrapper = ({children}) => (
  <div>
    {children()}
  </div>
);

export default TemplateWrapper;
