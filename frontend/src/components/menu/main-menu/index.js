import { Link } from "gatsby";
import React from "react";
import PropTypes from "prop-types";
import { HeaderNavigationArea, Navbar, Navitem } from "./style";

const isExternalHref = (href) =>
    typeof href === "string" && /^https?:\/\//i.test(href);

const MainMenu = ({ allmenuData }) => {
    const menuarr = allmenuData;
    return (
        <HeaderNavigationArea>
            <Navbar className="main-menu">
                {menuarr.map((menu) => {
                    const hasSubmenu = menu.node.isSubmenu ? true : false;
                    const submenu = menu.node.submenu;
                    const parentIsDropdownOnly =
                        hasSubmenu && menu.node.link === "#";
                    return (
                        <Navitem
                            key={`menu-${menu.node.id}`}
                            className={`${hasSubmenu ? "has-submenu" : ""}`}
                        >
                            {parentIsDropdownOnly ? (
                                <span className="menu-parent-label">
                                    {menu.node.text}
                                </span>
                            ) : menu.node.isExternal ? (
                                <a
                                    href={menu.node.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {menu.node.text}
                                </a>
                            ) : (
                                <Link
                                    activeClassName="active"
                                    to={menu.node.link}
                                >
                                    {menu.node.text}
                                </Link>
                            )}
                            {submenu && (
                                <ul className="submenu-nav">
                                    {submenu.map((submenu, i) => {
                                        return (
                                            <Navitem key={`submenu${i}`}>
                                                {isExternalHref(submenu.link) ? (
                                                    <a
                                                        href={submenu.link}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        {submenu.text}
                                                    </a>
                                                ) : (
                                                    <Link to={submenu.link}>
                                                        {submenu.text}
                                                    </Link>
                                                )}
                                            </Navitem>
                                        );
                                    })}
                                </ul>
                            )}
                        </Navitem>
                    );
                })}
            </Navbar>
        </HeaderNavigationArea>
    );
};

MainMenu.propTypes = {
    allmenuData: PropTypes.array,
};

export default MainMenu;
