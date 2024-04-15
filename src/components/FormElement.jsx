import styled from 'styled-components';

const ElementDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    font-family: "Montserrat", sans-serif;
    width: 300px;
`

function FormElement(props) {
    const elementID = props.elementID;
    const elementName = props.elementName;
    const elementType = props.elementType;

    const type = elementType==="date"?"text":elementType;
    const placeholder = elementType==="date"?"dd/mm/yyy":elementName;

    return (
        <ElementDiv>
            <label htmlFor={elementID}>{elementName}</label>
            <input type={type} id={elementID} placeholder={placeholder} />
        </ElementDiv>
       );
}
export default FormElement