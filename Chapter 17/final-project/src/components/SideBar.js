import { styled } from "styled-components";
import { Inline, Layers, Pad } from "../common/utils";
import { Logo } from "./Logo";

const SideMenu = styled(Layers).attrs(() => ({ as: "ul", gutter: "xs" }))`
    list-style-type: none;
    padding-left: 0;
`;

const SideMenuItem = styled(Inline).attrs(() => ({
    as: Pad,
    gutter: "l",
    padding: ["m", "l"],
    align: "center",
}))`
    border-inline-start: 0.25rem solid transparent;
    ${(props) =>
        props.active &&
        `
            border-inline-start-color: #324972;
            background: #1f29371c;
        `}
`;

const SideBar = () => {
    return (
        <Pad as="nav" padding={["l", "none"]}>
            <SideMenu as="ul" gutter="xs">
                <SideMenuItem active>
                    <Logo square inverse size="1rem" />
                    Profile
                </SideMenuItem>
                <SideMenuItem>
                    <Logo square inverse size="1rem" />
                    Acount
                </SideMenuItem>
                <SideMenuItem>
                    <Logo inverse size="1rem" />
                    Password
                </SideMenuItem>
                <SideMenuItem>
                    <Logo inverse size="1rem" />
                    Notifications
                </SideMenuItem>
                <SideMenuItem>
                    <Logo square inverse size="1rem" />
                    Billing
                </SideMenuItem>
                <SideMenuItem>
                    <Logo inverse size="1rem" />
                    Integrations
                </SideMenuItem>
            </SideMenu>
        </Pad>
    )
}
export default SideBar