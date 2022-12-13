const { octokit } = require("../utils/octokit");

exports.get = async (req, res) => {
  try {
    const owner = req.query.owner;
    const repo = req.query.repo;
    const result = await octokit.request('GET /repos/{owner}/{repo}/pulls/comments{?sort,direction,since,per_page,page}', {
        owner: owner,
        repo: repo
      })

    const parsedResult = result.data.items.map(item => ({
        pull_request_review_id: item.pull_request_review_id,
        id: item.id,
        node_id: id.node_id,
        commit_id: id.commit_id,
        body: id.body,
        created_at: id.created_at,
        updated_at: id.updated_at,
    }));

    res.status(200).json(parsedResult);
  } catch (error) {
    console.log(error);
  }
};
