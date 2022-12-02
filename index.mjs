import { Octokit } from "octokit"

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
});

try {
  const result = await octokit.request("GET /search/repositories?q=javascript", {});

  // issues de un proyecto
  // const result = await octokit.request("GET /repos/{owner}/{repo}/issues", {
  //   owner: "facebook",
  //   repo: "react",
  // });

  const parsedResult = result.data.items.map(item => ({
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

  console.log(parsedResult.length, result.data.total_count);

} catch (error) {
  console.log(`Error! Status: ${error.status}. Message: ${error.response.data.message}`)
}