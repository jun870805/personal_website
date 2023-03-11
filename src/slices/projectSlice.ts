import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchUserRepositories } from '../api/github'
import { RootState } from '../app/store'

export interface ProjectState {
  repositories:any[];
  fetching:boolean;
  error:boolean;
}

const initialState:ProjectState = {
  repositories: [],
  fetching: false,
  error: false
}

export const getProjectRepositories = createAsyncThunk(
  'getProjectRepos',
  async (params:any) => {
    const response = await fetchUserRepositories(params)
    return response.data || []
  }
)

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProjectRepositories.pending, (state) => {
        state.fetching = true
      })
      .addCase(getProjectRepositories.fulfilled, (state, action) => {
        state.repositories = action.payload
        state.fetching = false
      })
      .addCase(getProjectRepositories.rejected, (state) => {
        state.fetching = false
        state.error = true
      })
  }
})

export const project = (state: RootState) => state.project

export default projectSlice.reducer
