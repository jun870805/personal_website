import axios from 'axios'
import { githubUserReposEndpoint, headers } from '.'

export const fetchUserRepositories = async (params:any) => {
  return axios(githubUserReposEndpoint, { headers, params })
    .then(response => response)
    .catch(error => error)
}
