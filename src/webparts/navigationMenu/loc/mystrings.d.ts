declare interface INavigationMenuWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  AppLocalEnvironmentSharePoint: string;
  AppLocalEnvironmentTeams: string;
  AppSharePointEnvironment: string;
  AppTeamsTabEnvironment: string;
}

declare module 'NavigationMenuWebPartStrings' {
  const strings: INavigationMenuWebPartStrings;
  export = strings;
}
