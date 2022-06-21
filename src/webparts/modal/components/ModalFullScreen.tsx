import * as React from "react";
import { IModalProps } from "./IModalProps";
import { DefaultButton } from "@fluentui/react";
import { MYModal } from "./MYModal";
import "bootstrap/dist/css/bootstrap.css";

interface IModalState {
  callchildcomponent: boolean;
  link: string;
}

export default class ModalFullScreen extends React.Component<IModalProps, IModalState> {
  constructor(props: IModalProps, state: IModalState) {
    super(props);
    this.state = {
      callchildcomponent: false,
      link: props.link,
    };
    this.handler = this.handler.bind(this);
    this.Buttonclick = this.Buttonclick.bind(this);
  }

  public handler() {
    this.setState({
      callchildcomponent: false,
    });
  }
  private Buttonclick(e) {
    e.preventDefault();

    this.setState({ callchildcomponent: true });
  }

  public render(): React.ReactElement<IModalProps> {
    const {
      description,
      link,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName,
    } = this.props;

    return (
      <div>
        <DefaultButton onClick={(e) => this.Buttonclick(e)} text="Open Modal" />
        {this.state.callchildcomponent && (
          <MYModal
            myprops={this.state}
            link={this.props.link}
            handler={this.handler}
          />
        )}
      </div>
    );
  }
}
