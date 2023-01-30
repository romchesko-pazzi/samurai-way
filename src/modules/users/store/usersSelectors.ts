import { RootStateType } from '../../../store/store';

export const selectTotalCount = (state: RootStateType) => state.users.totalCount;
export const selectCount = (state: RootStateType) => state.users.queryParams.count;
export const selectCurrentPage = (state: RootStateType) => state.users.queryParams.page;
export const selectName = (state: RootStateType) => state.users.queryParams.term;
export const selectUsers = (state: RootStateType) => state.users.users;
