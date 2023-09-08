const express = require('express');
const app = express();
const port = 3000; // You can choose any port you prefer

app.get('/api', (req, res) => {
  // Retrieve query parameters
  const slackName = 'Idris_Adebayo'; // Set the slack_name parameter here
  const track = 'Backend'; // Set the track parameter here

  // Get the current day of the week
  const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  // Get the current UTC time with a +/-2 minute window
  const now = new Date();
  const currentUtcTime = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString();

  // Hardcoded GitHub URLs
  const githubFileUrl = '';
  const githubRepoUrl = 'https://github.com/Ade3164/Api_endpoinnt.git';

  // Create JSON response
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
