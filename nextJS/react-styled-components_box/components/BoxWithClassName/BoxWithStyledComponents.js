

import styled from "styled-components";


const StyledBox = styled.div`
width: 100px;
height: 100px;
background: ${(props)=>(props.$isBlack ? 'black' : 'red')};

&:hover{
    background: ${(props)=>props.$isBlack ? 'red' : 'black'};
}

`

export default StyledBox

