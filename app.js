const express = require('express');
const app = express();
const port = 3000; 

app.get('/api', (req, res) => {
  const slackName = 'Idris_Adebayo'; 
  const track = 'Backend'; 
  const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const now = new Date();
  const currentUtcTime = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString();
  const githubFileUrl = 'https://github.com/Ade3164/Api_endpoinnt/blob/main/app.js';
  const githubRepoUrl = 'https://github.com/Ade3164/Api_endpoinnt.git';
  const response = {
    slack_name: slackName,
    current_day: currentDay,
    utc_time: currentUtcTime,
    track: track,
    github_file_url: githubFileUrl,
    github_repo_url: githubRepoUrl,
    status_code: 200,
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
