import React from 'react';
import Spinner from './Spinner';
import illustrationDev from '../public/images/illustration_dev.svg';
import { useContext } from 'react';
import GlobalContext from '@/Store/GlobalContext';
const Overlay = () => {

    const { isLoading } = useContext(GlobalContext);
    const { showPopupConfirmation, setShowPopupConfirmation } = useContext(GlobalContext);
    const { showPopupError, setShowPopupError } = useContext(GlobalContext);
    const { showPopupContactFormIncorrect, setShowPopupContactFormIncorrect } = useContext(GlobalContext);

    return (
        <div>
            {isLoading && <Spinner />}
        </div>
    );
};

export default Overlay;