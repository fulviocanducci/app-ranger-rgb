import styled from "styled-components";

const Panel = styled.div`
  width: 100%;
  height: 250px;
  background: rgb(
    ${(props) => props.color.red},
    ${(props) => props.color.green},
    ${(props) => props.color.blue}
  );
  border: 1px solid #ccc;
  border-radius: 7px;
  margin-top: 10px;
`;

export default Panel;
