import sidebarImg from '../../images/image1.jpg';
import calendarImg from '../../images/image2.jpg';
import taskImg from '../../images/image3.jpg'
import { MiddleItem, StyledContainer, StyledDescriptionTitle, StyledDescription, StyledItem, StyledList, StyledNumberPar, StyledPreTitle } from './Description.styled';


export const Description = () => {

    return (
        <StyledList>
            <StyledItem>
                <div>
                    <StyledNumberPar>1.</StyledNumberPar>
                    <StyledPreTitle>Calendar</StyledPreTitle>
                    <StyledDescriptionTitle>View</StyledDescriptionTitle>
                    <StyledDescription>GooseTrack's Calendar view provides a comprehensive overview of your schedule,
                        displaying all your tasks, events, and appointments in a visually appealing and intuitive layout.</StyledDescription>
                </div>
                <img src={calendarImg} alt="Calendar" />
            </StyledItem>
            <MiddleItem>
                <StyledContainer >
                    <StyledNumberPar>2.</StyledNumberPar>
                    <StyledDescriptionTitle>Sidebar</StyledDescriptionTitle>
                    <StyledDescription>GooseTrack offers easy access to your account settings, calendar, and filters.
                        The "My Account" section allows you to manage your profile information and preferences,
                        while the calendar provides a quick and convenient way to view your upcoming events and tasks.</StyledDescription>
                </StyledContainer>
                <img src={sidebarImg} alt="Sidebar" />
            </MiddleItem>
            <StyledItem>
                <div>
                    <StyledNumberPar>3.</StyledNumberPar>
                    <StyledPreTitle>All in</StyledPreTitle>
                    <StyledDescriptionTitle>One</StyledDescriptionTitle>
                    <StyledDescription>GooseTrack is an all-in-one productivity tool that helps you stay on top of your tasks,
                        events, and deadlines. Say goodbye to scattered to-do lists and hello to streamlined productivity with GooseTrack.</StyledDescription>
                </div>
                <img src={taskImg} alt="Task example" />
            </StyledItem>
        </StyledList>
    )
}