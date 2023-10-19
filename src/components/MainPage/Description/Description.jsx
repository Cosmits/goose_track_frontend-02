import { useMediaQuery } from 'react-responsive';
import sidebarImg from '../../../images/DescriptionList/mobile-sideBar@1x.jpg'
import sidebarImgRetina from '../../../images/DescriptionList/mobile-sideBar@2x.jpg';
import calendarImg from '../../../images/DescriptionList/mobile-calendar@1x.jpg';
import calendarImgRetina from '../../../images/DescriptionList/mobile-calendar@2x.jpg';
import taskImg from '../../../images/DescriptionList/mobile-tasks@1x.jpg';
import taskImgRetina from '../../../images/DescriptionList/mobile-tasks@2x.jpg';

import tabletSidebarImg from '../../../images/DescriptionList/tablet-sideBar@1x.jpg';
import tabletSidebarImgRetina from '../../../images/DescriptionList/tablet-sideBar@2x.jpg'
import tabletCalendarImg from '../../../images/DescriptionList/tablet-calendar@1x.jpg';
import tabletCalendarImgRetina from '../../../images/DescriptionList/tablet-calendar@2x.jpg';
import tabletTaskImg from '../../../images/DescriptionList/tablet-tasks@1x.jpg';
import tabletTaskImgRetina from '../../../images/DescriptionList/tablet-tasks@2x.jpg';

import deckSidebarImg from '../../../images/DescriptionList/desk-sideBar@1x.jpg';
import deskSidebarImgRetina from '../../../images/DescriptionList/desk-sideBar@2x.jpg';
import deskCalendarImg from '../../../images/DescriptionList/desk-calendar@1x.jpg';
import deskCalendarImgRetina from '../../../images/DescriptionList/desk-calendar@2x.jpg';
import deskTaskImg from '../../../images/DescriptionList/desk-tasks@1x.jpg';
import deskTaskImgRetina from '../../../images/DescriptionList/desk-tasks@2x.jpg';

import { DescriptionImg, MiddleItem, StyledContainer, DescriptionTitle, StyledDescription, DescriptionItem, DescriptionList, StyledNumber, DescriptionPreTitle} from './Description.styled';
import { useScreenSize } from '../../../hooks/useScreenSize';


export const Description = () => {

    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });
    const { isDesktop, isTablet, isMobile } = useScreenSize();
    return (
        <DescriptionList>
            <DescriptionItem>
                <div>
                    <StyledNumber>1.</StyledNumber>
                    <DescriptionPreTitle>Calendar</DescriptionPreTitle>
                    <DescriptionTitle>View</DescriptionTitle>
                    <StyledDescription>GooseTrack's Calendar view provides a comprehensive overview of your schedule,
                        displaying all your tasks, events, and appointments in a visually appealing and intuitive layout.</StyledDescription>
                </div>

                {isDesktop && <DescriptionImg src={isRetina ? deskCalendarImgRetina : deskCalendarImg} alt="Calendar" />}

                {isTablet && <DescriptionImg src={isRetina ? tabletCalendarImgRetina : tabletCalendarImg} alt="Calendar" />}

                {isMobile && <DescriptionImg src={isRetina ? calendarImgRetina : calendarImg} alt="Calendar" />}

            </DescriptionItem>
            <MiddleItem>
                <StyledContainer >
                    <StyledNumber>2.</StyledNumber>
                    <DescriptionTitle>Sidebar</DescriptionTitle>
                    <StyledDescription>GooseTrack offers easy access to your account settings, calendar, and filters.
                        The "My Account" section allows you to manage your profile information and preferences,
                        while the calendar provides a quick and convenient way to view your upcoming events and tasks.</StyledDescription>
                </StyledContainer>

                {isDesktop && <DescriptionImg src={isRetina ? deskSidebarImgRetina : deckSidebarImg} alt="Sidebar" />}

                {isTablet && <DescriptionImg src={isRetina ? tabletTaskImgRetina : tabletTaskImg} alt="Sidebar" />}

                {isMobile && <DescriptionImg src={isRetina ? sidebarImgRetina : sidebarImg} alt="Sidebar" />}
            </MiddleItem>
            <DescriptionItem>
                <div>
                    <StyledNumber>3.</StyledNumber>
                    <DescriptionPreTitle>All in</DescriptionPreTitle>
                    <DescriptionTitle>One</DescriptionTitle>
                    <StyledDescription>GooseTrack is an all-in-one productivity tool that helps you stay on top of your tasks,
                        events, and deadlines. Say goodbye to scattered to-do lists and hello to streamlined productivity with GooseTrack.</StyledDescription>
                </div>
                {isDesktop && <DescriptionImg src={isRetina ? deskTaskImgRetina : deskTaskImg} alt="Task example" />}

                {isTablet && <DescriptionImg src={isRetina ? tabletSidebarImgRetina : tabletSidebarImg} alt="Task example" />}

                {isMobile && <DescriptionImg src={isRetina ? taskImgRetina : taskImg} alt="Task example" />}
            </DescriptionItem>
        </DescriptionList>
    )
}