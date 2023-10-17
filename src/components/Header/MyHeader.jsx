// import { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';

import { Link } from 'react-router-dom';
import UserInfo from './UserInfo/UserInfo';
import ThemeToggler from './ThemeToggler/ThemeToggler';
import { BurgerMenu, HeaderUser, HeaderWrapper } from './MyHeader.styled';
import AddFeedbackBtn from './FeedbackBtn/AddFeedbackBtn';
import { useScreenSize } from '../../hooks/useScreenSize';


const MyHeader = () => {
  const {isDesktop} = useScreenSize();
 
  // const [title, setTitle] = useState("");
  // const [searchParams] = useSearchParams();
  // const searchTerm = searchParams.get('query');

  // useEffect(() => {
  //   if (!searchTerm) return;

  //   setTitle(searchTerm);
  // }, [searchTerm, setTitle ]);

  return (
    <HeaderWrapper>
      {isDesktop&&<h2>Привіт</h2>}
      {!isDesktop && <BurgerMenu/>}
      <HeaderUser>
      <AddFeedbackBtn />
      <ThemeToggler/>
            <Link to="/account">
        <UserInfo />
      </Link>
      </HeaderUser>
    </HeaderWrapper>
  );
};

export default MyHeader;
