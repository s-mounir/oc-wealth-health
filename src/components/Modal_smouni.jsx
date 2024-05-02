import { Children } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const DarkBG = styled.div`
background-color: rgba(0, 0, 0, 0.2);
width: 100vw;
height: 100vh;
z-index: 0;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
position: absolute;
`

const Centered = styled.div`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`

const Modal = styled.div`
width: 70vw;
height: 70vh;
z-index: 10;
box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
display: grid;
grid-template-rows: 1fr 2fr 1fr;
`

const ModalHeader = styled.div`
overflow: hidden;
`

const ModalHeading = styled.h2`
margin: 0;
padding: 10px;
color: #2c3e50;
font-weight: 500;
font-size: 18px;
text-align: center;
`

const ModalContent = styled.div`
padding: 10px;
font-size: 14px;
color: #2c3e50;
text-align: center;
font-family: "Montserrat", sans-serif;
font-weight: 400;
font-size: 25px;
position: relative;
`

const ModalActions = styled.div`
position: relative;`

const Button = styled.button`
    width: 100px;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    padding: 10px;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`

const CloseButton = styled.button`
    all: unset;
    font-size: 35px;
    position: absolute;
    right: 20px;
    top: 15px;
`

function Modal_smouni({ isOpen, onClose, title, modalButtonText, modalButtonClose, modalBackgroundColor, modalTextColor, modalBorderRadius, modalBorderStyle, modalBorderWidth, modalBorderColor, modalButtonBackgroundColor, modalButtonTextColor, modalButtonRadius, modalButtonBorderStyle, modalButtonBorderWidth, modalButtonBorderColor, children }) {
    return (<div>
        {isOpen && <DarkBG>
            <Centered>
                <Modal style={{ background: modalBackgroundColor, borderRadius: modalBorderRadius + 'px', borderStyle: modalBorderStyle, borderWidth: modalBorderWidth + 'px', borderColor: modalBorderColor }}>
                    <ModalHeader>
                        <ModalHeading style={{ color: modalTextColor }}>{title}</ModalHeading>
                        <CloseButton onClick={onClose} style={{ color: modalTextColor }}><FontAwesomeIcon icon={faXmark} /></CloseButton>
                    </ModalHeader>
                    <ModalContent style={{ color: modalTextColor }}>
                        {children}
                    </ModalContent>
                    <ModalActions>
                        <Button onClick={modalButtonClose} style={{ background: modalButtonBackgroundColor, color:modalButtonTextColor, borderRadius: modalButtonRadius + 'px', borderStyle: modalButtonBorderStyle, borderWidth: modalButtonBorderWidth + 'px', borderColor: modalButtonBorderColor }}>
                            {modalButtonText}
                        </Button>
                    </ModalActions>
                </Modal>
            </Centered>
        </DarkBG>}
    </div>
    )
}

export default Modal_smouni