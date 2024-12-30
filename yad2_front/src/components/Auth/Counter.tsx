import styled from "styled-components";



const StyledCounter = styled.p`
display: flex;
justify-content: center;
align-items: center;
margin: 0;
`;

type Props = {
    seconds: number;
}

export default function CounterComponent({ seconds }: Props) {
    return (<StyledCounter>

        <span>נוכל לשלוח קוד נוסף בעוד</span>
        &nbsp;
        <strong className='time-counter'>
            <time>{seconds} שניות</time>
        </strong>

    </StyledCounter>)
}
