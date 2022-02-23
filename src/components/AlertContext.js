
import { createContext, useState } from 'react';
import Alert from 'react-bootstrap/Alert'

export const AlertContext = createContext();

const AlertContextProvider = ({children}) => {

    const show = (variant, text) => {
        console.log(`AlertContext `, variant, text);
        if(text !== '') {
            return <Alert variant={variant}>{text}</Alert>
        }
    }
    const showError = (text) => {
        return show('danger', text)
    }
    const showInfo = (text) => {
        return show('info', text)
    }
    const showSuccess = (text) => {
        return show('success', text)
    }
    const showWarning = (text) => {
        return show('warning', text)
    }
    
/*     const [ showAlert, setShowAlert] = useState(false);

    const show = (variant, text, forceAlert) => {
        console.log(`AlertContext `, showAlert, variant, text, forceAlert);
        forceAlert = (forceAlert === undefined ? false : forceAlert);
        if(showAlert || forceAlert) {
            return <Alert variant={variant}>{text}</Alert>
        }
    }
    const showError = (text, forceAlert) => {
        return show('danger', text, forceAlert)
    }
    const showInfo = (text, forceAlert) => {
        return show('info', text, forceAlert)
    }
    const showSuccess = (text, forceAlert) => {
        return show('success', text, forceAlert)
    }
    const showWarning = (text, forceAlert) => {
        return show('warning', text, forceAlert)
    }
    
    const init = () => {
        setShowAlert(false);
    } */
 
    /*useEffect(() => {
        init();
    }, [])  */

    return (
        <AlertContext.Provider value={ { show, showError, showInfo, showSuccess, showWarning} }>{/* , setShowAlert, init } }> */}
            {children}
        </AlertContext.Provider>
    )
}

export default AlertContextProvider;