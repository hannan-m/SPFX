import * as React from 'react';
import {IDialogFullScreenProps} from './IDialogFullScreenProps';


export default class DialogFullScreen extends React.Component<IDialogFullScreenProps, {}> {
  public render(): React.ReactElement<IDialogFullScreenProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
        <p>Hi There working</p>
    );
  }
}
