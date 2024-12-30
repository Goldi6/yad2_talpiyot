import styled from "styled-components";



export const CenteredModalContainer = styled.div`



background-color: #fff;
padding: 12px;
display: block;
border-radius: 10px;
width: 456px;


position: absolute;
top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & >div {padding: 0 35px;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 768px) {
        max-width: 100%;
    }


.close-modal{
  position: absolute;
  left: 0;
  top: 0;
  padding: 8px;
}


`;


