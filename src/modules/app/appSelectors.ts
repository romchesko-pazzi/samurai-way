import { RootStateType } from '../../store/store';

export const selectIsInitialized = (state: RootStateType) => state.app.isInitialized;
export const selectIsLoading = (state: RootStateType) => state.app.isLoading;
