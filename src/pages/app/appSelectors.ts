import { RootStateType } from '../../store/store';

export const selectIsInitialized = (state: RootStateType) => state.app.isInitialized;
