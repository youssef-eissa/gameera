import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink=styled(Link)`
    text-decoration: none;
    color: white;
    transition: 0.3s;
    &:hover{
        text-decoration:underline;
    }
`