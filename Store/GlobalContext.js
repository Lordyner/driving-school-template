import { createContext, useState, useEffect } from 'react';

const GlobalContext = createContext();

export function GlobalContextProvider(props) {

    const [isLoading, setIsLoading] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState();

    const [isMobileResolution, setIsMobileResolution] = useState();
    const [isTabletResolution, setIsTabletResolution] = useState();
    const [isLaptopResolution, setIsLaptopResolution] = useState();
    const [isDesktopResolution, setIsDesktopResolution] = useState();

    const [showPopupConfirmation, setShowPopupConfirmation] = useState();
    const [showPopupError, setShowPopupError] = useState();
    const [showPopupContactFormIncorrect, setShowPopupContactFormIncorrect] = useState();

    const [mobileResolution] = useState(320);
    const [tabletResolution] = useState(768);
    const [laptopResolution] = useState(1024);
    const [desktopResolution] = useState(1440);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        handleBodyScroll(!isMenuOpen);
    }
    const handleBodyScroll = (lockScroll) => {
        const body = document.body;
        if (lockScroll) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
    };

    return (
        <GlobalContext.Provider value={{
            isLoading, setIsLoading,
            isMobileResolution, setIsMobileResolution,
            isTabletResolution, setIsTabletResolution,
            isLaptopResolution, setIsLaptopResolution,
            isDesktopResolution, setIsDesktopResolution,
            showPopupConfirmation, setShowPopupConfirmation,
            showPopupError, setShowPopupError,
            isMenuOpen, setIsMenuOpen,
            showPopupContactFormIncorrect, setShowPopupContactFormIncorrect,
            mobileResolution, tabletResolution, laptopResolution, desktopResolution,
            toggleMenu
        }}>
            {props.children}
        </GlobalContext.Provider>
    );
}

export default GlobalContext;