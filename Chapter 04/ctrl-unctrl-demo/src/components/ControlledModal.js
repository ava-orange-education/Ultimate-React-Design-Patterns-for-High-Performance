import styled from "styled-components";

const ModalBackground = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    overflow: auto;
    background: #00000070;
    width: 100%;
    height: 100%;
`;

const ModalContent = styled.div`
    margin: 12% auto;
    padding: 24px;
    background: wheat;
    width: 50%;
`;

const ControlledModal = ({ show, onClose, children }) => {

    return (
        <>
            {show && (
                <ModalBackground onClick={onClose}>
                    <ModalContent onClick={e => e.stopPropagation()}>
                        <button onClick={onClose}>Hide Modal</button>
                        {children}
                    </ModalContent>
                </ModalBackground>
            )}
        </>
    )
}

export default ControlledModal