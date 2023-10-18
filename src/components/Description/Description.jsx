import MediaQuery, { useMediaQuery } from 'react-responsive';
import sidebarImg from '../../images/Description/mobile-sideBar@1x.jpg';
import sidebarImgRetine from '../../images/Description/mobile-sideBar@2x.jpg'
import calendarImg from '../../images/Description/mobile-calendar@1x.jpg';
import calendarImgRetine from '../../images/Description/mobile-calendar@2x.jpg';
import taskImg from '../../images/Description/mobile-tasks@1x.jpg'
import taskImgRetine from '../../images/Description/mobile-tasks@2x.jpg'

import tabletSidebarImg from '../../images/Description/tablet-sideBar@1x.jpg';
import tabletSidebarImgRetine from '../../images/Description/tablet-sideBar@2x.jpg'
import tabletCalendarImg from '../../images/Description/tablet-calendar@1x.jpg';
import tabletCalendarImgRetine from '../../images/Description/tablet-calendar@2x.jpg';
import tabletTaskImg from '../../images/Description/tablet-tasks@1x.jpg'
import tabletTaskImgRetine from '../../images/Description/tablet-tasks@2x.jpg'

import deckSidebarImg from '../../images/Description/desk-sideBar@1x.jpg';
import desktSidebarImgRetine from '../../images/Description/desk-sideBar@2x.jpg'
import deskCalendarImg from '../../images/Description/desk-calendar@1x.jpg';
import deskCalendarImgRetine from '../../images/Description/desk-calendar@2x.jpg';
import deskTaskImg from '../../images/Description/desk-tasks@1x.jpg'
import deskTaskImgRetine from '../../images/Description/desk-tasks@2x.jpg'

import { DescriptionImg, MiddleItem, StyledContainer, StyledDescripTitle, StyledDescription, StyledItem, StyledList, StyledNumberPar, StyledPreTitle } from './Description.styled';
import { useScreenSize } from '../../hooks/useScreenSize';


export const Description = () => {

    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });
    const { isDesktop, isTablet, isMobile } = useScreenSize();
    return (
        <StyledList>
            <StyledItem>
                <div>
                    <StyledNumberPar>1.</StyledNumberPar>
                    <StyledPreTitle>Calendar</StyledPreTitle>
                    <StyledDescripTitle>View</StyledDescripTitle>
                    <StyledDescription>GooseTrack's Calendar view provides a comprehensive overview of your schedule, displaying all your tasks, events, and appointments in a visually appealing and intuitive layout.</StyledDescription>
                </div>

                {isDesktop && <DescriptionImg src={isRetina ? deskCalendarImgRetine : deskCalendarImg} alt="Calendar" />}

                {isTablet && <DescriptionImg src={isRetina ? tabletCalendarImgRetine : tabletCalendarImg} alt="Calendar" />}

                {isMobile && <DescriptionImg src={isRetina ? calendarImgRetine : calendarImg} alt="Calendar" />}

            </StyledItem>
            <MiddleItem>
                <StyledContainer >
                    <StyledNumberPar>2.</StyledNumberPar>
                    <StyledDescripTitle>Sidebar</StyledDescripTitle>
                    <StyledDescription>GooseTrack offers easy access to your account settings, calendar, and filters. The "My Account" section allows you to manage your profile information and preferences, while the calendar provides a quick and convenient way to view your upcoming events and tasks.</StyledDescription>
                </StyledContainer>

                {isDesktop && <DescriptionImg src={isRetina ? desktSidebarImgRetine : deckSidebarImg} alt="Sidebar" />}

                {isTablet && <DescriptionImg src={isRetina ? tabletTaskImgRetine : tabletTaskImg} alt="Sidebar" />}

                {isMobile && <DescriptionImg src={isRetina ? sidebarImgRetine : sidebarImg} alt="Sidebar" />}
            </MiddleItem>
            <StyledItem>
                <div>
                    <StyledNumberPar>3.</StyledNumberPar>
                    <StyledPreTitle>All in</StyledPreTitle>
                    <StyledDescripTitle>One</StyledDescripTitle>
                    <StyledDescription>GooseTrack is an all-in-one productivity tool that helps you stay on top of your tasks, events, and deadlines. Say goodbye to scattered to-do lists and hello to streamlined productivity with GooseTrack.</StyledDescription>
                </div>
                {isDesktop && <DescriptionImg src={isRetina ? deskTaskImgRetine : deskTaskImg} alt="Task example" />}

                {isTablet && <DescriptionImg src={isRetina ? tabletSidebarImgRetine : tabletSidebarImg} alt="Task example" />}

                {isMobile && <DescriptionImg src={isRetina ? taskImgRetine : taskImg} alt="Task example" />}
            </StyledItem>
        </StyledList>
    )
}