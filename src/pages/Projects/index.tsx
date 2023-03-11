import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import styles from './index.module.scss'
import { getProjectRepositories, project } from '../../slices/projectSlice'
import { getRepositoryImageUrl } from '../../utils/GetRepoImage'

const Projects = () => {
  const dispatch = useAppDispatch()
  const { repositories } = useAppSelector(project)

  useEffect(() => {
    const params = {}
    dispatch(getProjectRepositories(params))
  }, [])

  return (
    <div className={styles.container}>
      {repositories.map((repo) => (
        <img src={getRepositoryImageUrl(repo.name)} key={repo.name}></img>
      ))}
    </div>
  )
}

export default Projects
