import React from 'react';
import PropTypes from "prop-types";

function ContainerLayout({ className = '', children }) {
  return (
    <div className={`container mx-auto px-4 md:px-8 lg:px-9 xl:px-8 ${className}`}>
      {children}
    </div>
  );
}

ContainerLayout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default ContainerLayout;
