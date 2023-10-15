// import { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';

import { Link } from 'react-router-dom';
import FeedbackBtn from './FeedbackBtn/FeedbackBtn';
import UserInfo from './UserInfo/UserInfo';
import ThemeToggler from './ThemeToggler/ThemeToggler';
import { HeaderWrapper } from './MyHeader.styled';

const MyHeader = () => {
  console.log('еейее');
  // const [title, setTitle] = useState("");
  // const [searchParams] = useSearchParams();
  // const searchTerm = searchParams.get('query');

  // useEffect(() => {
  //   if (!searchTerm) return;

  //   setTitle(searchTerm);
  // }, [searchTerm, setTitle ]);

  return (
    <HeaderWrapper>
      <h2>Привіт</h2>
      <FeedbackBtn />
      <ThemeToggler/>
            <Link to="/account">
        <UserInfo />
      </Link>
    </HeaderWrapper>
  );
};

export default MyHeader;
