import React, { useState, useEffect } from 'react'

// TODO: Extract fetching functionality into custom testable custom hook

const fetchJson = async (url) => {
    const result = await fetch(url);
    return await result.json();
}

const ProfilePage = () => {
    const [profile, setProfile] = useState(undefined)
    const [loading, setLoading] = useState()
    
    const retrieveData = async () => {
        try {
            setLoading(true);
            const res = await fetch("/api/profile");
            setProfile(await res.json());
        } catch(e) {
            console.log("Data fetch failed", e)
        } finally {
            setLoading(false);
        }
    }
    
    useEffect(retrieveData, []);
    
    if (loading || !profile) {
      return (
        <div>
          <h1>Profile Page</h1>
        </div>
      );
    }
    
    return (
        <div>{profile.email}</div>
    )  
}

export default ProfilePage;