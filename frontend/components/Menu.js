import React, { Component } from "react";
import Link from "next/link";
import { Config } from "../config.js";

const linkStyle = {
    marginRight: 15,
    color: 'white',
    textDecoration: 'none',
};
const headerBarStyle = {
    color: 'rgb(255, 255, 255)',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '20px',
    background: 'rgb(51, 63, 72)',
}

const tagLineStyle = {
    maxWidth: 'none',
    paddingLeft: '20px',
    paddingBottom: '6px',
    textTransform: 'uppercase',
    fontSize: '16px',
    lineHeight: 1,
    position: 'relative',
    flex: '0 0 auto',
    margin: '0px'
}

class Menu extends Component {
  constructor() {
      super();
  }

  getSlug(url) {
      const parts = url.split("/");
      return parts.length > 2 ? parts[parts.length - 2] : "";
  }

  render() {
      const menuItems = this.props.menu.items.map((item, index) => {
        if (item.object === "custom") {
            return (
                <Link href={item.url} key={item.ID}>
                    <a style={linkStyle}>{item.title}</a>
                </Link>
            );
        }
        const slug = this.getSlug(item.url);
        const actualPage = item.object === "category" ? "category" : "post";
        return (
            <Link
                as={`/${item.object}/${slug}`}
                href={`/${actualPage}?slug=${slug}&apiRoute=${item.object}`}
                key={item.ID}
            >
                <a style={linkStyle}>{item.title}</a>
            </Link>
        );
    });


    return(
      <div style={headerBarStyle}>
         {menuItems}
      </div>
    )
  }


}

export default Menu;
