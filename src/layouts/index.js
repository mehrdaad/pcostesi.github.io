import React from 'react'

import './index.css'

const TemplateWrapper = ({ children }) =>
  <div>
      {children()}
  </div>

export default TemplateWrapper
