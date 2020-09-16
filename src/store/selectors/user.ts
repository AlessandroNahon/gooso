import { AppState } from '../../types'

export const selectAuthedUser = (state: AppState): any => state.userReducer.user
