const { octokit } = require("../utils/octokit");

exports.get = async (req, res) => {
  try {
    const owner = req.query.owner;
    const repo = req.query.repo;

    const result = await octokit.request("GET /repos/{owner}/{repo}", {
      owner,
      repo
    });

    const data = {
      id: result.data.id,
      name: result.data.name,
      fullName: result.data.full_name,
      description: result.data.description,
      logo: result.data.logo,
      topics: result.data.topics,
      language: result.data.language,
      url: result.data.html_url,
      stars: result.data.stargazers_count,
      forks: result.data.forks_count,
      issues: result.data.open_issues_count,
      watchers: result.data.watchers_count,
      license: result.data.license?.name,
      created: result.data.created_at,
      updated: result.data.updated_at,
    }

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

exports.getIssues = async (req, res) => {
  try {
    const owner = req.query.owner;
    const repo = req.query.repo;

    const resultIssues = await octokit.request("GET /repos/{owner}/{repo}/issues", {
      owner,
      repo,
    });


    res.status(200).json(resultIssues);
  } catch (error) {
    console.log(error);
  }
};

exports.getPulls = async (req, res) => {
  try {
    const owner = req.query.owner;
    const repo = req.query.repo;

    const result = await octokit.request("GET /repos/{owner}/{repo}/pulls", {
      owner,
      repo,
    });


    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

exports.getCommitCount = async (req, res) => {
  try {
    const owner = req.query.owner;
    const repo = req.query.repo;

    const result = await octokit.request("/repos/{owner}/{repo}/stats/participation", {
      owner,
      repo,
    });


    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

exports.getHealthCheck = async (req, res) => {
  try {
    const owner = req.query.owner;
    const repo = req.query.repo;

    const result = await octokit.request("/repos/{owner}/{repo}/community/profile", {
      owner,
      repo,
    });


    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};