import React from 'react';
import classNames from 'classnames';
import uniqueId from 'uniqid';

const Styled = ({ rootClassnames, otherClasses, children }) => {
  const styles = classNames({
		[`${ rootClassnames || uniqueId()}`]: true,
    ...otherClasses
	});

  return (
    <div className={styles}>
      {children}
    </div>
  );
};

export default Styled;
