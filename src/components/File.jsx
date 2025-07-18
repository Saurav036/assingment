import React from 'react';

const File = ({ item, level, user }) => {
  return (
    <div className="file-item" style={{ '--level': level }}>
      <div className="file-header">
        <span className="file-icon">
          <svg className="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16">
            <path fillRule="evenodd" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path>
          </svg>
        </span>
        <span className="file-name">{item.name}</span>
        {user === 'manager' && (
          <span className="permission-badge">
            <svg className="octicon octicon-lock" viewBox="0 0 16 16" width="16" height="16">
              <path fillRule="evenodd" d="M4 4v2h-.25A1.75 1.75 0 002 7.75v5.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-5.5A1.75 1.75 0 0012.25 6H12V4a4 4 0 10-8 0zm6.5 2V4a2.5 2.5 0 00-5 0v2h5zM12 7.5h.25a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-5.5a.25.25 0 01.25-.25H12z"></path>
            </svg>
          </span>
        )}
      </div>
    </div>
  );
};

export default File;