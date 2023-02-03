import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export interface ProjectState {
  projectList:any[];
  fetching:boolean;
  error:boolean;
}

const initialState:ProjectState = {
  projectList: [],
  fetching: false,
  error: false
}

export const getProjectListList = createAsyncThunk(
  'getProjectList',
  async () => {
    // const response = await fetchProjectList()
    // return response.data?.supported || []
    return []
  }
)

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProjectListList.pending, (state) => {
        state.fetching = true
      })
      .addCase(getProjectListList.fulfilled, (state, action) => {
        state.projectList = action.payload
        state.fetching = false
      })
      .addCase(getProjectListList.rejected, (state) => {
        state.fetching = false
        state.error = true
      })
  }
})

export default projectSlice.reducer
