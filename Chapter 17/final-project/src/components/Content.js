import { Center, Layers, Pad, Split } from "../common/utils";
import styled from "styled-components";
import SideBar from "./SideBar";
import RightSide from "./RightSide";

const ContentArea = styled(Pad).attrs(() => ({ padding: "xl" }))`
    background-image: linear-gradient(
        to bottom,
        #0f1623 14rem,
        rgb(242, 242, 242) 14rem
    );
`;

const SettingsHeader = styled.header`
    color: white;
`;

const SettingsPane = styled(Split).attrs(() => ({
    gutter: "none",
    fraction: "1/4",
}))`
    background: white;
    border-radius: 0.5rem;
    `;

const Content = () => {
    return (
        <ContentArea>
            <Center as={Layers} gutter="xl" maxWidth="85rem">
                <SettingsHeader><h1>Profile Settings</h1></SettingsHeader>
                <SettingsPane as="main">
                    <SideBar />
                    <RightSide />
                </SettingsPane>
            </Center>
        </ContentArea>
    )
}
export default Content