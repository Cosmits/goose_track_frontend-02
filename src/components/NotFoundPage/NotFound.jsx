import gooseNotFoundMobileWebp from 'images/NotFoundPage/error-goose-mobile.webp';
import gooseNotFoundMobileWebp2x from 'images/NotFoundPage/error-goose-mobile@2x.webp';
import gooseNotFoundMobilePng from 'images/NotFoundPage/error-goose-mobile.png';
import gooseNotFoundMobilePng2x from 'images/NotFoundPage/error-goose-mobile@2x.png';
import gooseNotFoundWebp from 'images/NotFoundPage/error-goose.webp';
import gooseNotFoundWebp2x from 'images/NotFoundPage/error-goose@2x.webp';
import gooseNotFoundPng from 'images/NotFoundPage/error-goose.png';
import gooseNotFoundPng2x from 'images/NotFoundPage/error-goose@2x.png';

import { Button, Container, ErrorText, ImgWrap, Picture, TextWithImg } from './NotFound.styled';


const NotFound = () => {
    return (
        <Container>
            <ImgWrap>
                <TextWithImg>4</TextWithImg>
                <Picture>
                    <source
                        type="image/webp"
                        media="(max-width: 767px)"
                        srcSet={`${gooseNotFoundMobileWebp} 1x, ${gooseNotFoundMobileWebp2x} 2x`}
                    />
                    <source
                        type="image/webp"
                        media="(min-width: 768px)"
                        srcSet={`${gooseNotFoundWebp} 1x, ${gooseNotFoundWebp2x} 2x`}
                    />
                    <source
                        type="image/png"
                        media="(max-width: 767px)"
                        srcSet={`${gooseNotFoundMobilePng} 1x, ${gooseNotFoundMobilePng2x} 2x`}
                    />
                    <source
                        type="image/png"
                        media="(min-width: 768px)"
                        srcSet={`${gooseNotFoundPng} 1x, ${gooseNotFoundPng2x} 2x`}
                    />
                    <img
                        src={`${gooseNotFoundMobilePng}`}
                        alt="Goose flies in a rocket"
                    />
                </Picture>
                <TextWithImg>4</TextWithImg>
            </ImgWrap>

            <ErrorText>
                We’re sorry, the page you requested could not be found. Please go back to the homepage.
            </ErrorText>
            
            <Button to={'/'}>Back to home</Button>
        </Container>
    )
};

export default NotFound;