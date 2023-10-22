import { Link, useLocation } from 'react-router-dom';
import { SidebarWrapper } from './Sidebar.styled';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import sidebarLogo from '/src/images/goose_logo_desktop@1x.png';


function Sidebar(props) {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };
  const { closeSideBar } = props;
  const location = useLocation();

  return (
    <SidebarWrapper>
      {/* <button id="open-burger">OPEN</button>*/}{' '}
      <div id="sidebar" className="conteiner sidebar">
        <div className="logo-class">
          <Link to="/account" className="logo">
            <img src={sidebarLogo} alt="Sidebar Logo" />
            <p className="logo-text">GooseTrack</p>
          </Link>
          <button id="close-button" className="icon" onClick={closeSideBar}>
            <svg
              className="close-btn"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 34 34"
              fill="none"
            >
              <path
                d="M25.5 8.5L8.5 25.5"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.5 8.5L25.5 25.5"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="menu">
          <h5 className="user-panel">User Panel</h5>
          <ul>
            <li>
              <Link
                className={`panel-instrument ${
                  location.pathname === '/account' ? 'active' : ''
                }`}
                to="/account"
              >
                {' '}
                <svg
                  className="svg-nav"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16 18L18 20L22 16"
                    stroke="rgba(52, 52, 52, 0.5)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 15.5H7.5C6.10444 15.5 5.40665 15.5 4.83886 15.6722C3.56045 16.06 2.56004 17.0605 2.17224 18.3389C2 18.9067 2 19.6044 2 21V21"
                    stroke="rgba(52, 52, 52, 0.5)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 12C12.4853 12 14.5 9.98528 14.5 7.5C14.5 5.01472 12.4853 3 10 3C7.51472 3 5.5 5.01472 5.5 7.5C5.5 9.98528 7.51472 12 10 12Z"
                    stroke="rgba(52, 52, 52, 0.5)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                My Account
              </Link>
            </li>
            <li>
              <Link
                className={`panel-instrument ${
                  location.pathname === '/calendar' ? 'active' : ''
                }`}
                to="/calendar"
              >
                <svg
                  className="svg-nav"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 10H3"
                    stroke="#343434"
                    strokeOpacity="0.5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 12.5V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22H12"
                    stroke="#343434"
                    strokeOpacity="0.5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 2V6"
                    stroke="#343434"
                    strokeOpacity="0.5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 2V6"
                    stroke="#343434"
                    strokeOpacity="0.5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.5 19L16.5 21L21 16.5"
                    stroke="#343434"
                    strokeOpacity="0.5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Calendar
              </Link>
            </li>
            <li>
              <Link
                className={`panel-instrument ${
                  location.pathname === '/statistics' ? 'active' : ''
                }`}
                to="/statistics"
              >
                <svg
                  className="svg-nav"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.85 6.7778C17.85 6.20873 17.8507 5.79903 17.8782 5.47886C17.9062 5.15187 17.9555 5.03191 17.9789 4.9929C17.9849 4.98283 17.9873 4.9811 17.9905 4.97879L17.991 4.97844C17.9974 4.97368 18.0249 4.95522 18.0944 4.93375C18.2503 4.88564 18.5213 4.85002 19 4.85002C19.4788 4.85002 19.7497 4.88564 19.9056 4.93375C19.9752 4.95522 20.0026 4.97368 20.0091 4.97844L20.0096 4.97879C20.0127 4.9811 20.0151 4.98283 20.0212 4.9929C20.0446 5.03191 20.0939 5.15187 20.1219 5.47886C20.1493 5.79903 20.15 6.20873 20.15 6.7778V6.79087V6.80402V6.81725V6.83057V6.84398V6.85747V6.87105V6.88471V6.89845V6.91228V6.92619V6.94018V6.95426V6.96841V6.98265V6.99697V7.01137V7.02586V7.04042V7.05506V7.06978V7.08459V7.09947V7.11443V7.12946V7.14458V7.15977V7.17504V7.19039V7.20582V7.22132V7.23689V7.25255V7.26828V7.28408V7.29996V7.31591V7.33193V7.34803V7.36421V7.38045V7.39677V7.41316V7.42962V7.44616V7.46276V7.47944V7.49619V7.513V7.52989V7.54685V7.56387V7.58097V7.59813V7.61536V7.63266V7.65003V7.66746V7.68496V7.70253V7.72017V7.73787V7.75563V7.77346V7.79136V7.80932V7.82734V7.84543V7.86358V7.88179V7.90007V7.91841V7.93681V7.95528V7.9738V7.99239V8.01104V8.02974V8.04851V8.06734V8.08623V8.10517V8.12418V8.14324V8.16236V8.18154V8.20078V8.22007V8.23942V8.25883V8.27829V8.29781V8.31738V8.33701V8.3567V8.37643V8.39623V8.41607V8.43597V8.45592V8.47593V8.49599V8.5161V8.53626V8.55647V8.57673V8.59705V8.61741V8.63783V8.65829V8.6788V8.69936V8.71998V8.74063V8.76134V8.7821V8.8029V8.82375V8.84464V8.86559V8.88657V8.90761V8.92869V8.94981V8.97098V8.99219V9.01345V9.03475V9.05609V9.07748V9.0989V9.12037V9.14189V9.16344V9.18504V9.20667V9.22835V9.25007V9.27182V9.29362V9.31546V9.33733V9.35924V9.3812V9.40318V9.42521V9.44727V9.46937V9.49151V9.51368V9.53589V9.55814V9.58042V9.60273V9.62508V9.64746V9.66988V9.69233V9.71481V9.73733V9.75988V9.78246V9.80507V9.82771V9.85039V9.87309V9.89583V9.91859V9.94139V9.96421V9.98707V10.01V10.0329V10.0558V10.0788V10.1018V10.1248V10.1478V10.1709V10.194V10.2171V10.2403V10.2635V10.2867V10.3099V10.3331V10.3564V10.3797V10.403V10.4264V10.4497V10.4731V10.4965V10.52V10.5434V10.5669V10.5904V10.6139V10.6374V10.661V10.6845V10.7081V10.7317V10.7553V10.779V10.8026V10.8263V10.85V10.8737V10.8974V10.9212V10.9449V10.9687V10.9925V11.0163V11.0401V11.0639V11.0877V11.1116V11.1355V11.1593V11.1832V11.2071V11.231V11.255V11.2789V11.3028V11.3268V11.3507V11.3747V11.3987V11.4227V11.4467V11.4707V11.4947V11.5187V11.5427V11.5668V11.5908V11.6148V11.6389V11.6629V11.687V11.7111V11.7351V11.7592V11.7833V11.8073V11.8314V11.8555V11.8796V11.9037V11.9278V11.9518V11.9759V12V12.0241V12.0482V12.0723V12.0964V12.1205V12.1445V12.1686V12.1927V12.2168V12.2409V12.2649V12.289V12.3131V12.3371V12.3612V12.3852V12.4093V12.4333V12.4573V12.4813V12.5054V12.5294V12.5534V12.5774V12.6014V12.6253V12.6493V12.6733V12.6972V12.7212V12.7451V12.769V12.7929V12.8168V12.8407V12.8646V12.8884V12.9123V12.9361V12.96V12.9838V13.0076V13.0314V13.0551V13.0789V13.1026V13.1263V13.15V13.1737V13.1974V13.2211V13.2447V13.2683V13.2919V13.3155V13.3391V13.3626V13.3862V13.4097V13.4332V13.4566V13.4801V13.5035V13.5269V13.5503V13.5737V13.597V13.6203V13.6436V13.6669V13.6902V13.7134V13.7366V13.7598V13.7829V13.806V13.8291V13.8522V13.8753V13.8983V13.9213V13.9442V13.9672V13.9901V14.013V14.0358V14.0587V14.0815V14.1042V14.127V14.1497V14.1723V14.195V14.2176V14.2402V14.2627V14.2852V14.3077V14.3302V14.3526V14.375V14.3973V14.4196V14.4419V14.4642V14.4864V14.5085V14.5307V14.5528V14.5748V14.5969V14.6189V14.6408V14.6627V14.6846V14.7064V14.7282V14.75V14.7717V14.7934V14.815V14.8366V14.8582V14.8797V14.9011V14.9226V14.944V14.9653V14.9866V15.0079V15.0291V15.0502V15.0714V15.0924V15.1135V15.1345V15.1554V15.1763V15.1971V15.2179V15.2387V15.2594V15.2801V15.3007V15.3212V15.3418V15.3622V15.3826V15.403V15.4233V15.4436V15.4638V15.484V15.5041V15.5241V15.5441V15.5641V15.584V15.6038V15.6236V15.6434V15.663V15.6827V15.7022V15.7218V15.7412V15.7606V15.78V15.7993V15.8185V15.8377V15.8568V15.8759V15.8949V15.9138V15.9327V15.9515V15.9703V15.989V16.0077V16.0262V16.0448V16.0632V16.0816V16.1V16.1183V16.1365V16.1546V16.1727V16.1907V16.2087V16.2266V16.2444V16.2622V16.2799V16.2975V16.3151V16.3326V16.35V16.3674V16.3847V16.4019V16.4191V16.4362V16.4532V16.4702V16.487V16.5039V16.5206V16.5373V16.5539V16.5704V16.5869V16.6033V16.6196V16.6358V16.652V16.6681V16.6841V16.7001V16.716V16.7318V16.7475V16.7632V16.7787V16.7942V16.8097V16.825V16.8403V16.8555V16.8706V16.8856V16.9006V16.9155V16.9303V16.945V16.9596V16.9742V16.9887V17.0031V17.0174V17.0316V17.0458V17.0599V17.0739V17.0878V17.1016V17.1153V17.129V17.1426V17.1561V17.1695V17.1828V17.196V17.2092V17.2222C20.15 17.8944 20.1119 18.3497 20.049 18.6586C19.9858 18.969 19.9123 19.0566 19.8998 19.0698C19.8953 19.0746 19.8912 19.0784 19.8782 19.0845C19.8612 19.0925 19.8241 19.1064 19.7516 19.1189C19.5859 19.1474 19.3687 19.15 19 19.15C18.6256 19.15 18.4056 19.1474 18.2388 19.1188C18.1657 19.1063 18.129 19.0924 18.113 19.0848C18.1009 19.0791 18.098 19.0761 18.0946 19.0724C18.0836 19.0607 18.0109 18.9742 17.9487 18.6621C17.8869 18.352 17.85 17.8956 17.85 17.2222V6.7778ZM19 3.15002C18.0337 3.15002 17.0408 3.25217 16.5212 4.11826C16.2946 4.49591 16.2189 4.93151 16.1844 5.33369C16.15 5.73479 16.15 6.21674 16.15 6.74644V6.74645V6.7778V17.2222C16.15 17.9378 16.1876 18.523 16.2815 18.9942C16.3749 19.4633 16.539 19.8977 16.8525 20.2332C17.1818 20.5855 17.5835 20.7313 17.9517 20.7944C18.2776 20.8503 18.6414 20.8501 18.9597 20.85L19 20.85L19.0397 20.85C19.3532 20.8501 19.7146 20.8503 20.0398 20.7943C20.4069 20.7312 20.8073 20.5856 21.137 20.2358C21.4517 19.9018 21.619 19.4686 21.7148 18.9977C21.811 18.5253 21.85 17.939 21.85 17.2222V17.2092V17.196V17.1828V17.1695V17.1561V17.1426V17.129V17.1153V17.1016V17.0878V17.0739V17.0599V17.0458V17.0316V17.0174V17.0031V16.9887V16.9742V16.9596V16.945V16.9303V16.9155V16.9006V16.8856V16.8706V16.8555V16.8403V16.825V16.8097V16.7942V16.7787V16.7632V16.7475V16.7318V16.716V16.7001V16.6841V16.6681V16.652V16.6358V16.6196V16.6033V16.5869V16.5704V16.5539V16.5373V16.5206V16.5039V16.487V16.4702V16.4532V16.4362V16.4191V16.4019V16.3847V16.3674V16.35V16.3326V16.3151V16.2975V16.2799V16.2622V16.2444V16.2266V16.2087V16.1907V16.1727V16.1546V16.1365V16.1183V16.1V16.0816V16.0632V16.0448V16.0262V16.0077V15.989V15.9703V15.9515V15.9327V15.9138V15.8949V15.8759V15.8568V15.8377V15.8185V15.7993V15.78V15.7606V15.7412V15.7218V15.7022V15.6827V15.663V15.6434V15.6236V15.6038V15.584V15.5641V15.5441V15.5241V15.5041V15.484V15.4638V15.4436V15.4233V15.403V15.3826V15.3622V15.3418V15.3212V15.3007V15.2801V15.2594V15.2387V15.2179V15.1971V15.1763V15.1554V15.1345V15.1135V15.0924V15.0714V15.0502V15.0291V15.0079V14.9866V14.9653V14.944V14.9226V14.9011V14.8797V14.8582V14.8366V14.815V14.7934V14.7717V14.75V14.7282V14.7064V14.6846V14.6627V14.6408V14.6189V14.5969V14.5748V14.5528V14.5307V14.5085V14.4864V14.4642V14.4419V14.4196V14.3973V14.375V14.3526V14.3302V14.3077V14.2852V14.2627V14.2402V14.2176V14.195V14.1723V14.1497V14.127V14.1042V14.0815V14.0587V14.0358V14.013V13.9901V13.9672V13.9442V13.9213V13.8983V13.8753V13.8522V13.8291V13.806V13.7829V13.7598V13.7366V13.7134V13.6902V13.6669V13.6436V13.6203V13.597V13.5737V13.5503V13.5269V13.5035V13.4801V13.4566V13.4332V13.4097V13.3862V13.3626V13.3391V13.3155V13.2919V13.2683V13.2447V13.2211V13.1974V13.1737V13.15V13.1263V13.1026V13.0789V13.0551V13.0314V13.0076V12.9838V12.96V12.9361V12.9123V12.8884V12.8646V12.8407V12.8168V12.7929V12.769V12.7451V12.7212V12.6972V12.6733V12.6493V12.6253V12.6014V12.5774V12.5534V12.5294V12.5054V12.4813V12.4573V12.4333V12.4093V12.3852V12.3612V12.3371V12.3131V12.289V12.2649V12.2409V12.2168V12.1927V12.1686V12.1445V12.1205V12.0964V12.0723V12.0482V12.0241V12V11.9759V11.9518V11.9278V11.9037V11.8796V11.8555V11.8314V11.8073V11.7833V11.7592V11.7351V11.7111V11.687V11.6629V11.6389V11.6148V11.5908V11.5668V11.5427V11.5187V11.4947V11.4707V11.4467V11.4227V11.3987V11.3747V11.3507V11.3268V11.3028V11.2789V11.255V11.231V11.2071V11.1832V11.1593V11.1355V11.1116V11.0877V11.0639V11.0401V11.0163V10.9925V10.9687V10.9449V10.9212V10.8974V10.8737V10.85V10.8263V10.8026V10.779V10.7553V10.7317V10.7081V10.6845V10.661V10.6374V10.6139V10.5904V10.5669V10.5434V10.52V10.4965V10.4731V10.4497V10.4264V10.403V10.3797V10.3564V10.3331V10.3099V10.2867V10.2635V10.2403V10.2171V10.194V10.1709V10.1478V10.1248V10.1018V10.0788V10.0558V10.0329V10.01V9.98707V9.96421V9.94139V9.91859V9.89583V9.87309V9.85039V9.82771V9.80507V9.78246V9.75988V9.73733V9.71481V9.69233V9.66988V9.64746V9.62508V9.60273V9.58042V9.55814V9.53589V9.51368V9.49151V9.46937V9.44727V9.42521V9.40318V9.3812V9.35924V9.33733V9.31546V9.29362V9.27182V9.25007V9.22835V9.20667V9.18504V9.16344V9.14189V9.12037V9.0989V9.07748V9.05609V9.03475V9.01345V8.99219V8.97098V8.94981V8.92869V8.90761V8.88657V8.86559V8.84464V8.82375V8.8029V8.7821V8.76134V8.74063V8.71998V8.69936V8.6788V8.65829V8.63783V8.61741V8.59705V8.57673V8.55647V8.53626V8.5161V8.49599V8.47593V8.45592V8.43597V8.41607V8.39623V8.37643V8.3567V8.33701V8.31738V8.29781V8.27829V8.25883V8.23942V8.22007V8.20078V8.18154V8.16236V8.14324V8.12418V8.10517V8.08623V8.06734V8.04851V8.02974V8.01104V7.99239V7.9738V7.95528V7.93681V7.91841V7.90007V7.88179V7.86358V7.84543V7.82734V7.80932V7.79136V7.77346V7.75563V7.73787V7.72017V7.70253V7.68496V7.66746V7.65003V7.63266V7.61536V7.59813V7.58097V7.56387V7.54685V7.52989V7.513V7.49619V7.47944V7.46276V7.44616V7.42962V7.41316V7.39677V7.38045V7.36421V7.34803V7.33193V7.31591V7.29996V7.28408V7.26828V7.25255V7.23689V7.22132V7.20582V7.19039V7.17504V7.15977V7.14458V7.12946V7.11443V7.09947V7.08459V7.06978V7.05506V7.04042V7.02586V7.01137V6.99697V6.98265V6.96841V6.95426V6.94018V6.92619V6.91228V6.89845V6.88471V6.87105V6.85747V6.84398V6.83057V6.81725V6.80402V6.79087V6.7778L21.85 6.74643C21.85 6.21674 21.8501 5.73479 21.8157 5.33369C21.7812 4.93151 21.7055 4.49591 21.4789 4.11826C20.9592 3.25217 19.9663 3.15002 19 3.15002ZM10.879 9.49999C10.854 9.72542 10.853 9.98792 10.853 10.3334L10.853 14L10.853 17.6667C10.853 17.6749 10.8529 17.683 10.8527 17.6912C10.8279 18.5508 10.9843 18.8413 11.0773 18.9409C11.1577 19.027 11.3596 19.15 11.9997 19.15C12.6255 19.15 12.8337 19.0284 12.9193 18.9376C13.0145 18.8368 13.1743 18.5458 13.1469 17.694C13.1466 17.6849 13.1465 17.6758 13.1465 17.6667V14L13.1465 10.3334C13.1465 9.98792 13.1455 9.72542 13.1205 9.49999C13.0958 9.27781 13.054 9.16413 13.0177 9.10349L13.0165 9.10143C12.9931 9.0617 12.8682 8.85002 11.9997 8.85002C11.1313 8.85002 11.0064 9.0617 10.983 9.10143L10.9818 9.10349C10.9454 9.16413 10.9037 9.27781 10.879 9.49999ZM9.52341 8.2299C10.0024 7.4303 10.8878 7.15002 11.9997 7.15002C13.1117 7.15002 13.9971 7.4303 14.4761 8.2299C14.6894 8.58592 14.7724 8.97224 14.8101 9.31256C14.8465 9.64101 14.8465 9.99362 14.8465 10.3086L14.8465 10.3334L14.8465 14V17.6534C14.8761 18.6293 14.7263 19.4995 14.156 20.1041C13.5736 20.7217 12.754 20.85 11.9997 20.85C11.2382 20.85 10.4154 20.7231 9.83455 20.1009C9.26881 19.4947 9.12652 18.6235 9.15301 17.6548L9.15301 14L9.153 10.3334L9.153 10.3086C9.15298 9.99361 9.15295 9.64101 9.18938 9.31256C9.22713 8.97224 9.31014 8.58592 9.52341 8.2299ZM3.87711 14.5196C3.85089 14.7834 3.85003 15.1018 3.85003 15.5278V18.2943C3.85003 18.7748 3.9662 18.9063 4.02252 18.954C4.11412 19.0315 4.36207 19.15 5.00003 19.15C5.62373 19.15 5.87547 19.0328 5.97207 18.9517C6.03288 18.9007 6.15003 18.7665 6.15003 18.2943V18.2872V18.2801V18.273V18.2659V18.2589V18.2518V18.2448V18.2378V18.2308V18.2238V18.2169V18.2099V18.203V18.196V18.1891V18.1822V18.1753V18.1685V18.1616V18.1547V18.1479V18.1411V18.1343V18.1275V18.1207V18.114V18.1072V18.1005V18.0937V18.087V18.0803V18.0737V18.067V18.0603V18.0537V18.047V18.0404V18.0338V18.0272V18.0206V18.0141V18.0075V18.001V17.9944V17.9879V17.9814V17.9749V17.9684V17.962V17.9555V17.9491V17.9426V17.9362V17.9298V17.9234V17.917V17.9107V17.9043V17.898V17.8916V17.8853V17.879V17.8727V17.8664V17.8601V17.8539V17.8476V17.8414V17.8351V17.8289V17.8227V17.8165V17.8103V17.8041V17.798V17.7918V17.7857V17.7796V17.7734V17.7673V17.7612V17.7551V17.7491V17.743V17.7369V17.7309V17.7249V17.7188V17.7128V17.7068V17.7008V17.6949V17.6889V17.6829V17.677V17.671V17.6651V17.6592V17.6533V17.6474V17.6415V17.6356V17.6297V17.6239V17.618V17.6122V17.6064V17.6005V17.5947V17.5889V17.5831V17.5773V17.5716V17.5658V17.5601V17.5543V17.5486V17.5428V17.5371V17.5314V17.5257V17.52V17.5143V17.5087V17.503V17.4974V17.4917V17.4861V17.4804V17.4748V17.4692V17.4636V17.458V17.4524V17.4468V17.4413V17.4357V17.4302V17.4246V17.4191V17.4135V17.408V17.4025V17.397V17.3915V17.386V17.3805V17.3751V17.3696V17.3641V17.3587V17.3533V17.3478V17.3424V17.337V17.3316V17.3261V17.3208V17.3154V17.31V17.3046V17.2992V17.2939V17.2885V17.2832V17.2778V17.2725V17.2672V17.2618V17.2565V17.2512V17.2459V17.2406V17.2353V17.2301V17.2248V17.2195V17.2143V17.209V17.2038V17.1985V17.1933V17.1881V17.1828V17.1776V17.1724V17.1672V17.162V17.1568V17.1516V17.1464V17.1413V17.1361V17.1309V17.1258V17.1206V17.1155V17.1103V17.1052V17.1001V17.0949V17.0898V17.0847V17.0796V17.0745V17.0694V17.0643V17.0592V17.0541V17.049V17.044V17.0389V17.0338V17.0288V17.0237V17.0187V17.0136V17.0086V17.0035V16.9985V16.9935V16.9884V16.9834V16.9784V16.9734V16.9684V16.9634V16.9584V16.9534V16.9484V16.9434V16.9384V16.9335V16.9285V16.9235V16.9185V16.9136V16.9086V16.9037V16.8987V16.8938V16.8888V16.8839V16.8789V16.874V16.8691V16.8641V16.8592V16.8543V16.8494V16.8444V16.8395V16.8346V16.8297V16.8248V16.8199V16.815V16.8101V16.8052V16.8003V16.7954V16.7906V16.7857V16.7808V16.7759V16.771V16.7662V16.7613V16.7564V16.7516V16.7467V16.7418V16.737V16.7321V16.7272V16.7224V16.7175V16.7127V16.7078V16.703V16.6981V16.6933V16.6885V16.6836V16.6788V16.6739V16.6691V16.6643V16.6594V16.6546V16.6498V16.6449V16.6401V16.6353V16.6304V16.6256V16.6208V16.616V16.6111V16.6063V16.6015V16.5967V16.5919V16.587V16.5822V16.5774V16.5726V16.5678V16.5629V16.5581V16.5533V16.5485V16.5437V16.5389V16.534V16.5292V16.5244V16.5196V16.5148V16.51V16.5051V16.5003V16.4955V16.4907V16.4859V16.481V16.4762V16.4714V16.4666V16.4618V16.4569V16.4521V16.4473V16.4425V16.4377V16.4328V16.428V16.4232V16.4184V16.4135V16.4087V16.4039V16.399V16.3942V16.3894V16.3845V16.3797V16.3748V16.37V16.3652V16.3603V16.3555V16.3506V16.3458V16.3409V16.3361V16.3312V16.3264V16.3215V16.3167V16.3118V16.3069V16.3021V16.2972V16.2923V16.2875V16.2826V16.2777V16.2728V16.2679V16.2631V16.2582V16.2533V16.2484V16.2435V16.2386V16.2337V16.2288V16.2239V16.219V16.2141V16.2092V16.2042V16.1993V16.1944V16.1895V16.1845V16.1796V16.1747V16.1697V16.1648V16.1599V16.1549V16.1499V16.145V16.14V16.1351V16.1301V16.1251V16.1202V16.1152V16.1102V16.1052V16.1002V16.0952V16.0902V16.0852V16.0802V16.0752V16.0702V16.0652V16.0601V16.0551V16.0501V16.045V16.04V16.0349V16.0299V16.0248V16.0198V16.0147V16.0096V16.0046V15.9995V15.9944V15.9893V15.9842V15.9791V15.974V15.9689V15.9638V15.9587V15.9535V15.9484V15.9433V15.9381V15.933V15.9278V15.9227V15.9175V15.9123V15.9071V15.902V15.8968V15.8916V15.8864V15.8812V15.876V15.8707V15.8655V15.8603V15.8551V15.8498V15.8446V15.8393V15.834V15.8288V15.8235V15.8182V15.8129V15.8076V15.8023V15.797V15.7917V15.7864V15.7811V15.7757V15.7704V15.765V15.7597V15.7543V15.749V15.7436V15.7382V15.7328V15.7274V15.722V15.7166V15.7112V15.7057V15.7003V15.6949V15.6894V15.6839V15.6785V15.673V15.6675V15.662V15.6565V15.651V15.6455V15.64V15.6345V15.6289V15.6234V15.6178V15.6123V15.6067V15.6011V15.5955V15.5899V15.5843V15.5787V15.5731V15.5675V15.5618V15.5562V15.5505V15.5449V15.5429L6.14311 15.3406V15.3406C6.13205 15.0114 6.12341 14.754 6.09885 14.527C6.06936 14.2544 6.02495 14.1272 5.98961 14.0653L5.98894 14.0639C5.97993 14.0437 5.89336 13.85 5.00003 13.85C4.10278 13.85 3.9983 14.0459 3.98392 14.0728L3.98282 14.0748C3.94834 14.1335 3.90328 14.2563 3.87711 14.5196ZM2.51722 13.2134C3.00748 12.3793 3.92522 12.15 5.00003 12.15C6.07679 12.15 6.98578 12.3807 7.46626 13.223C7.67355 13.5864 7.75045 13.9879 7.78899 14.3442C7.82101 14.6402 7.83207 14.9753 7.84295 15.3046C7.84508 15.3693 7.84721 15.4337 7.84949 15.4975L7.84978 15.5072L7.85003 15.5278V15.5335V15.5392V15.5449V15.5505V15.5562V15.5618V15.5675V15.5731V15.5787V15.5843V15.5899V15.5955V15.6011V15.6067V15.6123V15.6178V15.6234V15.6289V15.6345V15.64V15.6455V15.651V15.6565V15.662V15.6675V15.673V15.6785V15.6839V15.6894V15.6949V15.7003V15.7057V15.7112V15.7166V15.722V15.7274V15.7328V15.7382V15.7436V15.749V15.7543V15.7597V15.765V15.7704V15.7757V15.7811V15.7864V15.7917V15.797V15.8023V15.8076V15.8129V15.8182V15.8235V15.8288V15.834V15.8393V15.8446V15.8498V15.8551V15.8603V15.8655V15.8707V15.876V15.8812V15.8864V15.8916V15.8968V15.902V15.9071V15.9123V15.9175V15.9227V15.9278V15.933V15.9381V15.9433V15.9484V15.9535V15.9587V15.9638V15.9689V15.974V15.9791V15.9842V15.9893V15.9944V15.9995V16.0046V16.0096V16.0147V16.0198V16.0248V16.0299V16.0349V16.04V16.045V16.0501V16.0551V16.0601V16.0652V16.0702V16.0752V16.0802V16.0852V16.0902V16.0952V16.1002V16.1052V16.1102V16.1152V16.1202V16.1251V16.1301V16.1351V16.14V16.145V16.1499V16.1549V16.1599V16.1648V16.1697V16.1747V16.1796V16.1845V16.1895V16.1944V16.1993V16.2042V16.2092V16.2141V16.219V16.2239V16.2288V16.2337V16.2386V16.2435V16.2484V16.2533V16.2582V16.2631V16.2679V16.2728V16.2777V16.2826V16.2875V16.2923V16.2972V16.3021V16.3069V16.3118V16.3167V16.3215V16.3264V16.3312V16.3361V16.3409V16.3458V16.3506V16.3555V16.3603V16.3652V16.37V16.3748V16.3797V16.3845V16.3894V16.3942V16.399V16.4039V16.4087V16.4135V16.4184V16.4232V16.428V16.4328V16.4377V16.4425V16.4473V16.4521V16.4569V16.4618V16.4666V16.4714V16.4762V16.481V16.4859V16.4907V16.4955V16.5003V16.5051V16.51V16.5148V16.5196V16.5244V16.5292V16.534V16.5389V16.5437V16.5485V16.5533V16.5581V16.5629V16.5678V16.5726V16.5774V16.5822V16.587V16.5919V16.5967V16.6015V16.6063V16.6111V16.616V16.6208V16.6256V16.6304V16.6353V16.6401V16.6449V16.6498V16.6546V16.6594V16.6643V16.6691V16.6739V16.6788V16.6836V16.6885V16.6933V16.6981V16.703V16.7078V16.7127V16.7175V16.7224V16.7272V16.7321V16.737V16.7418V16.7467V16.7516V16.7564V16.7613V16.7662V16.771V16.7759V16.7808V16.7857V16.7906V16.7954V16.8003V16.8052V16.8101V16.815V16.8199V16.8248V16.8297V16.8346V16.8395V16.8444V16.8494V16.8543V16.8592V16.8641V16.8691V16.874V16.8789V16.8839V16.8888V16.8938V16.8987V16.9037V16.9086V16.9136V16.9185V16.9235V16.9285V16.9335V16.9384V16.9434V16.9484V16.9534V16.9584V16.9634V16.9684V16.9734V16.9784V16.9834V16.9884V16.9935V16.9985V17.0035V17.0086V17.0136V17.0187V17.0237V17.0288V17.0338V17.0389V17.044V17.049V17.0541V17.0592V17.0643V17.0694V17.0745V17.0796V17.0847V17.0898V17.0949V17.1001V17.1052V17.1103V17.1155V17.1206V17.1258V17.1309V17.1361V17.1413V17.1464V17.1516V17.1568V17.162V17.1672V17.1724V17.1776V17.1828V17.1881V17.1933V17.1985V17.2038V17.209V17.2143V17.2195V17.2248V17.2301V17.2353V17.2406V17.2459V17.2512V17.2565V17.2618V17.2672V17.2725V17.2778V17.2832V17.2885V17.2939V17.2992V17.3046V17.31V17.3154V17.3208V17.3261V17.3316V17.337V17.3424V17.3478V17.3533V17.3587V17.3641V17.3696V17.3751V17.3805V17.386V17.3915V17.397V17.4025V17.408V17.4135V17.4191V17.4246V17.4302V17.4357V17.4413V17.4468V17.4524V17.458V17.4636V17.4692V17.4748V17.4804V17.4861V17.4917V17.4974V17.503V17.5087V17.5143V17.52V17.5257V17.5314V17.5371V17.5428V17.5486V17.5543V17.5601V17.5658V17.5716V17.5773V17.5831V17.5889V17.5947V17.6005V17.6064V17.6122V17.618V17.6239V17.6297V17.6356V17.6415V17.6474V17.6533V17.6592V17.6651V17.671V17.677V17.6829V17.6889V17.6949V17.7008V17.7068V17.7128V17.7188V17.7249V17.7309V17.7369V17.743V17.7491V17.7551V17.7612V17.7673V17.7734V17.7796V17.7857V17.7918V17.798V17.8041V17.8103V17.8165V17.8227V17.8289V17.8351V17.8414V17.8476V17.8539V17.8601V17.8664V17.8727V17.879V17.8853V17.8916V17.898V17.9043V17.9107V17.917V17.9234V17.9298V17.9362V17.9426V17.9491V17.9555V17.962V17.9684V17.9749V17.9814V17.9879V17.9944V18.001V18.0075V18.0141V18.0206V18.0272V18.0338V18.0404V18.047V18.0537V18.0603V18.067V18.0737V18.0803V18.087V18.0937V18.1005V18.1072V18.114V18.1207V18.1275V18.1343V18.1411V18.1479V18.1547V18.1616V18.1685V18.1753V18.1822V18.1891V18.196V18.203V18.2099V18.2169V18.2238V18.2308V18.2378V18.2448V18.2518V18.2589V18.2659V18.273V18.2801V18.2872V18.2943C7.85003 19.0374 7.65832 19.7561 7.0647 20.2541C6.50686 20.7221 5.75861 20.85 5.00003 20.85C4.23401 20.85 3.48196 20.7234 2.92456 20.2518C2.33186 19.7504 2.15003 19.0291 2.15003 18.2943V15.5278V15.5004V15.5003C2.15001 15.1087 2.14999 14.7083 2.18544 14.3515C2.22177 13.9859 2.3017 13.5801 2.51722 13.2134Z"
                    fill="#343434"
                    fillOpacity="0.5"
                  />
                </svg>
                Statistics
              </Link>
            </li>
            <div className="">
              <button className="logout-button" onClick={handleLogout}>
                <p className="logout-text">Log Out</p>{' '}
                <svg
                  className="logout-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M13.3333 14.1667L17.5 10M17.5 10L13.3333 5.83333M17.5 10H7.5M7.5 2.5H6.5C5.09987 2.5 4.3998 2.5 3.86502 2.77248C3.39462 3.01217 3.01217 3.39462 2.77248 3.86502C2.5 4.3998 2.5 5.09987 2.5 6.5V13.5C2.5 14.9001 2.5 15.6002 2.77248 16.135C3.01217 16.6054 3.39462 16.9878 3.86502 17.2275C4.3998 17.5 5.09987 17.5 6.5 17.5H7.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </ul>
        </div>
      </div>
    </SidebarWrapper>
  );
}

export default Sidebar;
