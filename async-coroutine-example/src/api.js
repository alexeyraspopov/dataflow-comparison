export async function fetchStargazersByProject(repository) {
  let url = `https://api.github.com/repos/${repository}/stargazers`;
  let response = await fetch(url);
  let stargazers = await response.json();
  return stargazers;
}
