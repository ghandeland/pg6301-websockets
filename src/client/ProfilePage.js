import React from 'react';
import { useLoading } from "./useLoading";
import { fetchJson } from './http';

export const ProfilePage = (
  {loadingFunction = async () => await fetchJson("/api/profile")}
) => {
  window
  
    // TODO extract api call
    const {error, loading, data } = useLoading(
        loadingFunction
        );
    
    if (error) {
        return (
        <div>
            <h1>Error</h1>
            <p>{error.toString()}</p>
        </div>
        );
    }
    
    if (loading) {
      return (
        <div>
          <h1>Loading</h1>
        </div>
      );
    }
    
    return (
        <div>
            <h1>Profile</h1>
            <div>{data.email}</div>
        </div>
    )  
}

export default ProfilePage;