import styled from "styled-components"
const InputText = styled.input`
  width: 50%;
  padding: 8px;
  font-size: 16px;
`;
const DivContainer= styled.div`
 padding: 10px;
  border-bottom: 1px solid #ccc;
`;
function SearchBarNew() {
    return (
      <DivContainer className="SearchBar">
        <InputText type="text" placeholder="Search..." />
      </DivContainer>
    );
  }
  
  export default SearchBarNew;
  