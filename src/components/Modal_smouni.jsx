import { Children } from 'react';
import styled from 'styled-components';

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
background: white;
color: white;
z-index: 10;
border-radius: 16px;
box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
display: grid;
grid-template-rows: 1fr 2fr 1fr;
border: 2px #5a6f07 solid;
`

const ModalHeader = styled.div`
background: white;
overflow: hidden;
border-top-left-radius: 16px;
border-top-right-radius: 16px;
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
color: #5a6f07;
font-weight: 400;
font-size: 25px;
position: relative;
`

const ModalActions = styled.div`
position: relative;`

const Button = styled.button`
    width: 100px;
    font-family: "Montserrat", sans-serif;
    border: 2px #5a6f07 solid;
    border-radius: 5px;
    background-color: #e7ebdc;
    color: #5a6f07;
    font-weight: 600;
    padding: 10px;
    margin: 0;
    position: absolute;
    top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`

function Modal_smouni({isOpen, onClose, title, modalButtonText, modalButtonClose, children }) {
    return (<div>
        {isOpen && <DarkBG>
            <Centered>
                <Modal>
                    <ModalHeader><ModalHeading>{title}</ModalHeading></ModalHeader>
                    <ModalContent>
                        {children}
                    </ModalContent>
                    <ModalActions>
                            <Button onClick={modalButtonClose}>{modalButtonText}</Button>
                    </ModalActions>
                </Modal>
            </Centered>
        </DarkBG>}
        </div>
    )
}

export default Modal_smouni


//Props :
// - isOpen : booleen, si la fenetre modale est affichée ou non
// - onClose : fonction, fonction à executer lorsque l'utilisateur ferme la modale
// - modalContent : le contenu à afficher dans la fenetre modale
// - modalButtonText : le texte à afficher dans le bouton de fermeture de la modale
    // - modalBackgroundColor : couleur de fond de la modale
    // - modalTextColor : la couleur du texte de la modale
    // - modalButtonColor : la couleur de fond du bouton de fermeture de la modale


    // bouton croix de fermeture (si on ne veut pas lancer la fonction de fermeture)
    // height et width particulier
    // bords arrondis ou rectangle
    // fonction d'ouverture?? pour avoir un loader
    // couleur et epaisseur bordure