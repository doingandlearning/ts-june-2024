interface GithubAPIResponse {
  name: string;
  blog: string;
  repos_url: string;
}

async function getJson(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        response.status + response.statusText + "Something went wrong!"
      );
    }
    return await response.json();
  } catch (error) {
    // redirect user? friendlier message? ping on call team?
    console.log(error.message);
  }
}

async function run() {
  try {
    const data: GithubAPIResponse = await getJson(
      "https://api.github.com/users/doingandlearning"
    );

    console.log(data);
    console.log(`${data.name} blogs at ${data.blog}`);

    const repoData = await getJson(data.repos_url);
    console.log(repoData);
  } catch (error) {
    // redirect user? friendlier message? ping on call team?
    console.log(error.message);
  }
}

run();
