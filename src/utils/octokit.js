const { Octokit } = require('Octokit');

exports.octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
});
