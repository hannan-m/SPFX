import * as React from "react";
import styles from "./NavigationMenu.module.scss";
import { INavigationMenuProps } from "./INavigationMenuProps";
import { escape } from "@microsoft/sp-lodash-subset";
import {
  INavLink,
  INavLinkGroup,
  INavStyles,
  Nav,
} from "office-ui-fabric-react";
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { INavigationMenuState } from "./INavigationMenuState";

const navStyles: Partial<INavStyles> = {
  root: {
    width: 208,
    height: 350,
    boxSizing: "border-box",
    border: "1px solid #eee",
    overflowY: "auto",
  },
};

export default class NavigationMenu extends React.Component<
  INavigationMenuProps,
  INavigationMenuState
> {
  constructor(props: INavigationMenuProps) {
    super(props);
    sp.setup({
      spfxContext: this.props.context,
    });
    this.state = {
      links: [],
    };
    this._getLinks();
  }

  public render(): React.ReactElement<INavigationMenuProps> {
    const {
      description,
      links,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName,
    } = this.props;

    return (
      <div className={styles.spfxFluentuiNav}>
        <Nav
          onLinkClick={this._onLinkClick}
          selectedKey="5"
          ariaLabel="Nav basic example"
          styles={navStyles}
          groups={this.state.links}
        />
      </div>
    );
  }

  private async _getLinks() {
    const allItems: any[] = await sp.web.lists.getByTitle("Nav").items.getAll();
    console.log(allItems);
    console.log(allItems[0]["Link"]["Url"]);
    const linkgroupcol: INavLinkGroup[] = [{ links: [] }];
    let linkcol: INavLink[] = linkgroupcol[0].links;
    allItems.forEach(function (v, i) {
      if (v["ParentId"] == null) {
        linkcol.push({
          name: v["Title"],
          url: v["Link"]["Url"],
          links: [],
          key: v.Id + "",
          isExpanded: true,
          target: "_blank",
        });
      } else {
        const link: INavLink = {
          key: v.Id + "",
          name: v["Title"],
          url: v["Link"]["Url"],
          links: [],
          target: "_blank",
        };
        var treecol: INavLink[] = linkcol.filter(
          (value) => value.key == v["ParentId"]
        );
        if (treecol.length != 0) {
          treecol[0].links.push(link);
        }
      }
    });
    console.log(linkgroupcol);
    this.setState({ links: linkgroupcol });
  }

  private _onLinkClick(ev?: React.MouseEvent<HTMLElement>, item?: INavLink) {
    console.log(item);
  }
}
