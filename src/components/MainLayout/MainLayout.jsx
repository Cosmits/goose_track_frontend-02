import { Suspense, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { useScreenSize } from '../../hooks/useScreenSize';
import Sidebar from '../Sidebar/Sidebar';
import { MainLayoutWrapper, PageWrapper } from './MainLayout.styled';
import { Container } from '../../Styles/Container.styled';


const MainLayout = () => {
  const { isDesktop } = useScreenSize();
  const [showSideBar, setShowSideBar] = useState(false);

  useEffect(() => {
    if (showSideBar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showSideBar]);

  const toggleSideBarShow = () => {
    setShowSideBar(() => !showSideBar);
  };
  return (
    <Container>
    <MainLayoutWrapper>
      {(isDesktop || showSideBar) && (
        <Sidebar closeSideBar={toggleSideBarShow} />
      )}
      <PageWrapper>
        <Header openSideBar={toggleSideBarShow} />
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </PageWrapper>
    </MainLayoutWrapper>
    </Container>
  );
};

export default MainLayout;
