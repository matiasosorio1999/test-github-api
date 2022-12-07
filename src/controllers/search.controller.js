const { octokit } = require("../utils/octokit");

exports.get = async (req, res) => {
  try {
    const query = req.query.q;
    const result = await octokit.request("GET /search/repositories{?q}", { q: query });

    const parsedResult = result.data.items.map(item => ({
      id: item.id,
      name: item.name,
      url: item.html_url,
      description: item.description,
      stars: item.stargazers_count,
      forks: item.forks_count,
      language: item.language,
      license: item.license?.name,
      created: item.created_at,
      updated: item.updated_at,
    }));

    res.status(200).json(parsedResult);
  } catch (error) {
    console.log(error);
  }
};
