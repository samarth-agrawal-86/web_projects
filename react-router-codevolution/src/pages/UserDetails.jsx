import React from 'react';
import { useParams } from 'react-router-dom';

function UserDetailsPage() {
  const params = useParams();
  //   console.log(params);
  const userId = params['userId']; // params.userId
  //   console.log(userId);
  return (
    <div>
      <h3> This is a User {userId} Details Page</h3>
    </div>
  );
}

export default UserDetailsPage;
