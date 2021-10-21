import styled from 'styled-components';

export const SearchCardWrapper = styled.button`
  width:auto;
  height: 45px;
  background: #afc2cc;
  border-radius: 5px;
  margin: 3px 3px;
  border:none;
  padding: 5px;
  text-align: center;
  color: #4c5b67;
  float:left;
  font-family: 'Roboto', sans-serif;
  color:white;
  &:hover {
    background-color: white;
    color:#afc2cc;
    }
`;

export const IconButton = styled.div`
  margin:5px;
  float:right;
  &:hover {
    color:white;
    }
`;