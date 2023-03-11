export const githubURL = () => {
  return process.env.REACT_APP_GITHUB_URL
}

export const githubOpenGraphURL = () => {
  return process.env.REACT_APP_GITHUB_OPEN_GRAPH_URL
}

export const githubUser = () => {
  return process.env.REACT_APP_GITHUB_USER
}

const getHeaders = () => {
  return {
    'Content-Type': 'application/json'
  }
}

export const headers = getHeaders()

// Github
export const githubUserReposEndpoint = `${githubURL()}/users/${githubUser()}/repos`
