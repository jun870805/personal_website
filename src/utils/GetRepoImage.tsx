// import axios from 'axios'
import { githubOpenGraphURL, githubUser } from '../api'

export const getRepositoryImageUrl = (repo: string) => {
  const hashNumber = Math.floor(Math.random() * 1000000) + 1
  return `${githubOpenGraphURL()}/${hashNumber}/${githubUser()}/${repo}`
}
