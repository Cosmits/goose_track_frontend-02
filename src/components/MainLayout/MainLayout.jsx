import { Suspense, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import { MainLayoutWrapper, PageWrapper } from './MainLayout.styled';
import { Container } from '../../Styles/Container.styled';
import { format, startOfToday } from 'date-fns';
import Loader from './Loader/Loader';
import Header from './Header/Header';

const MainLayout = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const navigate = useNavigate();
  const { pathname } = window.location;

  //default redirect to subPage
  useEffect(() => {
    const date = format(startOfToday(), 'yyyy-MM');

    navigate(`/calendar/month/${date}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname === '/goose_track_frontend-02/calendar']);

  
  const toggleSideBarShow = () => {
    setShowSideBar(() => !showSideBar);
    
    //disable scrolling
    if (!showSideBar) { document.body.style.overflow = 'hidden' }
    else { document.body.style.overflow = 'auto' }
  };

  return (
    <Container>
      <MainLayoutWrapper>
        <Sidebar closeSideBar={toggleSideBarShow} open={showSideBar} />
        <PageWrapper>
          <Header openSideBar={toggleSideBarShow} />
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </PageWrapper>
      </MainLayoutWrapper>
    </Container>
  );
};

export default MainLayout;
