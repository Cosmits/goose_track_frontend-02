import MediaQuery, { useMediaQuery } from 'react-responsive';
import sidebarImg from '../../images/discription/mobile-sideBar@1x.jpg';
import sidebarImgRetine from '../../images/discription/mobile-sideBar@2x.jpg'
import calendarImg from '../../images/discription/mobile-calendar@1x.jpg';
import calendarImgRetine from '../../images/discription/mobile-calendar@2x.jpg';
import taskImg from '../../images/discription/mobile-tasks@1x.jpg'
import taskImgRetine from '../../images/discription/mobile-tasks@2x.jpg'

import tabletSidebarImg from '../../images/discription/tablet-sideBar@1x.jpg';
import tabletSidebarImgRetine from '../../images/discription/tablet-sideBar@2x.jpg'
import tabletCalendarImg from '../../images/discription/tablet-calendar@1x.jpg';
import tabletCalendarImgRetine from '../../images/discription/tablet-calendar@2x.jpg';
import tabletTaskImg from '../../images/discription/tablet-tasks@1x.jpg'
import tabletTaskImgRetine from '../../images/discription/tablet-tasks@2x.jpg'

import deckSidebarImg from '../../images/discription/desk-sideBar@1x.jpg';
import desktSidebarImgRetine from '../../images/discription/desk-sideBar@2x.jpg'
import deskCalendarImg from '../../images/discription/desk-calendar@1x.jpg';
import deskCalendarImgRetine from '../../images/discription/desk-calendar@2x.jpg';
import deskTaskImg from '../../images/discription/desk-tasks@1x.jpg'
import deskTaskImgRetine from '../../images/discription/desk-tasks@2x.jpg'

import { DiscriptionImg, MiddleItem, StyledContainer, StyledDescriptionTitle, StyledDescription as StyledDescription, StyledItem, StyledList, StyledNumberPar, StyledPreTitle } from './Discription.styled';
import { useScreenSize } from '../../hooks/useScreenSize';


export const Discription = () => {

    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });
    const { isDesktop, isTablet, isMobile } = useScreenSize();
    return (
        <StyledList>
            <StyledItem>
                <div>
                    <StyledNumberPar>1.</StyledNumberPar>
                    <StyledPreTitle>Calendar</StyledPreTitle>
                    <StyledDescriptionTitle>View</StyledDescriptionTitle>
                    <StyledDescription>GooseTrack's Calendar view provides a comprehensive overview of your schedule, displaying all your tasks, events, and appointments in a visually appealing and intuitive layout.</StyledDescription>
                </div>

                {isDesktop && <DiscriptionImg src={isRetina ? deskCalendarImgRetine : deskCalendarImg} alt="Calendar" />}

                {isTablet && <DiscriptionImg src={isRetina ? tabletCalendarImgRetine : tabletCalendarImg} alt="Calendar" />}

                {isMobile && <DiscriptionImg src={isRetina ? calendarImgRetine : calendarImg} alt="Calendar" />}

            </StyledItem>
            <MiddleItem>
                <StyledContainer >
                    <StyledNumberPar>2.</StyledNumberPar>
                    <StyledDescriptionTitle>Sidebar</StyledDescriptionTitle>
                    <StyledDescription>GooseTrack offers easy access to your account settings, calendar, and filters.
                        The "My Account" section allows you to manage your profile information and preferences,
                        while the calendar provides a quick and convenient way to view your upcoming events and tasks.</StyledDescription>
                </StyledContainer>

                {isDesktop && <DiscriptionImg src={isRetina ? desktSidebarImgRetine : deckSidebarImg} alt="Sidebar" />}

                {isTablet && <DiscriptionImg src={isRetina ? tabletTaskImgRetine : tabletTaskImg} alt="Sidebar" />}

                {isMobile && <DiscriptionImg src={isRetina ? sidebarImgRetine : sidebarImg} alt="Sidebar" />}
            </MiddleItem>
            <StyledItem>
                <div>
                    <StyledNumberPar>3.</StyledNumberPar>
                    <StyledPreTitle>All in</StyledPreTitle>
                    <StyledDescriptionTitle>One</StyledDescriptionTitle>
                    <StyledDescription>GooseTrack is an all-in-one productivity tool that helps you stay on top of your tasks,
                        events, and deadlines. Say goodbye to scattered to-do lists and hello to streamlined productivity with GooseTrack.</StyledDescription>
                </div>
                {isDesktop && <DiscriptionImg src={isRetina ? deskTaskImgRetine : deskTaskImg} alt="Task example" />}

                {isTablet && <DiscriptionImg src={isRetina ? tabletSidebarImgRetine : tabletSidebarImg} alt="Task example" />}

                {isMobile && <DiscriptionImg src={isRetina ? taskImgRetine : taskImg} alt="Task example" />}
            </StyledItem>
        </StyledList>
    )
}