import styled from "styled-components";
// import { Styled } from "styled-components/dist/constructors/constructWithOptions";



export const StyledAutocompleteListContainer = styled.div`

position: absolute;
margin-top: 8px;
width: 100%;
background-color: white;
padding: 2px 0;
box-shadow: 0 4px 12px rgba(0,0,0,.12);
    ul{
gap:0 !important;
}
`;

export const StyledAutocompleteItem = styled.div`
font-size: 14px;
min-height: 42px;
padding: 5px 12px;
box-sizing: border-box;
cursor: pointer;
display: flex;
align-items: center;
justify-content: flex-start;
&:hover{
    background-color: #f8f8f8;
}
`;


export const StyledAutocomplete = styled.div`
position: relative;


`;