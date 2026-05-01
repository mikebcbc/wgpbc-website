import styled, { themeGet, device } from "@theme/utils";

export const HeaderNavigationArea = styled.div`
    display: none;
    ${device.xlarge} {
        display: block;
    }
`;
export const Navbar = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
`;
export const Navitem = styled.li`
    display: inline-block;
    padding: 3px 0;
    &:first-of-type {
        padding-left: 0;
    }
    a {
        padding: 7px 34px;
        color: #001d23;
        display: block;
        font-size: 17px;
        font-weight: 500;
        line-height: 22px;
        padding: 7px 25px;
        position: relative;
        &:hover {
            color: ${themeGet("colors.orange")};
        }
        &.active {
            color: ${themeGet("colors.orange")};
            border-bottom: 2px solid ${themeGet("colors.orange")};
        }
    }

    > .menu-parent-label {
        padding: 7px 25px;
        color: #001d23;
        display: block;
        font-size: 17px;
        font-weight: 500;
        line-height: 22px;
        position: relative;
        cursor: default;
        &:hover {
            color: ${themeGet("colors.orange")};
        }
    }

    &.has-submenu {
        padding-right: 10px;
        position: relative;

        > a::after,
        > .menu-parent-label::after {
            content: "";
            display: inline-block;
            margin-left: 6px;
            margin-bottom: 2px;
            width: 0;
            height: 0;
            border-left: 4px solid transparent;
            border-right: 4px solid transparent;
            border-top: 5px solid currentColor;
            opacity: 0.65;
            vertical-align: middle;
        }

        > .menu-parent-label {
            cursor: pointer;
        }

        > .submenu-nav {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            list-style: none;
            margin: 0;
            padding: 15px 0 15px;
            position: absolute;
            top: 100%;
            transform: translateY(50px);
            transition: 0.4s;
            opacity: 0;
            visibility: hidden;
            min-width: min(320px, 85vw);
            margin-top: 25px;
            z-index: 3;
            background-color: #fff;
            border: none;
            border-radius: 0 0 5px 5px;
            box-shadow: 0px 20px 80px 0px rgb(171 181 189 / 35%);
            left: -10px;

            &:before {
                content: "";
                position: absolute;
                height: 56px;
                width: 100%;
                left: 0;
                bottom: 100%;
                height: 40px;
            }
            > li {
                display: block;
                width: 100%;
                padding: 9px 25px;
                > a {
                    color: #0e0e0e;
                    display: block;
                    font-weight: 400;
                    font-size: 14px;
                    letter-spacing: inherit;
                    text-transform: capitalize;
                    padding: 0;
                    &:hover {
                        color: ${themeGet("colors.primary")};
                    }
                }
            }
        }
        &:hover {
            > .submenu-nav {
                transform: none;
                opacity: 1;
                visibility: visible;
            }
        }
    }
`;
