import React from 'react';
import Folder from './Folder';

const FileExplorer = ({ data, user }) => {
  return (
    <div className="file-explorer">
      {data.children && data.children.length > 0 ? (
        <div className="file-tree">
          <Folder item={data} level={0} user={user} />
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-state-icon">📁</div>
          <h3>No accessible folders</h3>
          <p>This user doesn't have permission to view any folders</p>
        </div>
      )}
    </div>
  );
};

export default FileExplorer;