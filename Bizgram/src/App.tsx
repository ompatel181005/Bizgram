import React from "react";
import Sidebar from "./SideBar";
import Feed from "./Feed";
import UserList from "./UserList";
import styled from "styled-components";



const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  background: #181818;
  color: white;
  font-family: "Arial", sans-serif;
`;

const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 20px;
  background: #1e1e1e;
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

const SidebarWrapper = styled.div`
  width: 280px;
  background: #222;
  padding: 20px;
  border-right: 2px solid #333;
`;

const UserListWrapper = styled.div`
  width: 280px;
  background: #222;
  padding: 20px;
  border-left: 2px solid #333;
`;

const ModernWebpage: React.FC = () => {
  return (
    <AppContainer>
      {/* Sidebar */}
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      
      {/* Main Content Area */}
      <MainContent>
        <Feed />
      </MainContent>
      
      {/* User List Section */}
      <UserListWrapper>
        <UserList />
      </UserListWrapper>
    </AppContainer>
  );
};

export default ModernWebpage;
