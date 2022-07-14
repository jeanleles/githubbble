import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
    font-size: 16px;
    flex-grow: 1;
`

export const WrapperTabList = styled(TabList)`
    list-style-type: none;
    padding: 4px;
    display: flex;
    margin: 4px;
`
//WrapperTabList.tabsRole = 'Tablist'

export const WrapperTab = styled(Tab)`
    border-radius: 8px 8px 0 0;
    background-color: #3f4b5a;
    color: #fff;
    padding: 12px;
    margin-right: 1px;
    border-bottom: 2px solid #4ECCA3;
    user-select: none;
    cursor: pointer;

    &:focus {
        outline: none;
        border-bottom: 2px solid #4ECCA3;
    }

    &.is-selected {
        background-color: #393E46;
        border: 2px solid #4ECCA3;
        border-bottom: 0;
        padding: 10px;
    }
`
// WrapperTab.tabsRole = 'Tab'

export const WrapperTabPanel = styled(TabPanel)`
    background-color: #393E46;
    color: #c9d1d9;
    margin-top: -10px;
    padding: 4px;
    display: none;
    min-height: 40vh;
    border: 2px solid #4ECCA3;
    border-radius: 8px;
    box-shadow: 1px 2px 10px rgb(83 83 83 / 24%);
    z-index: -1;

    &.is-selected {
        display: block;
    }

    h3 {
        margin: 12px;
        font-size: 24px;
        color: #FEFEFE;
    }
`
// WrapperTabPanel.tabsRole = 'TabPanel'

export const WrapperList = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`

export const RepositoryItem = styled.div`
    background-color: #0D1117;
    border: 1px solid #30363d;
    border-radius: 6px;
`