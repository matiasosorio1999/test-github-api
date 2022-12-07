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
