export type RootStackParamList = {
  Dashboard: undefined;
  Info: undefined;
  Author: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}