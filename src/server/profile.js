const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
require('dotenv').config();

const googleDiscoveryUrl = process.env.REACT_APP_GOOGLE_OAUTH_DISCOVERY_URL;

router.get('/api/profile', async (req, res) => {
  const authorization = req.header('Authorization');
  if (!authorization) {
    return res.send(401);
  }
  

  const { userinfo_endpoint } = await fetchJson(googleDiscoveryUrl)
  const userInfo = await fetchJson(userinfo_endpoint, {
    headers: {
      Authorization: authorization,
    },
  });
  console.log("userInfo", userInfo);
  res.json(userInfo);
});

async function fetchJson(url, options) {
  const res = await fetch(url, options);
  if (!res.ok) {
    console.log('Hello');
    throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
  }
  return await res.json();
}

module.exports = router;
