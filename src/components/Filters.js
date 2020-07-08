import React from 'react';
import styled from 'styled-components';

const Filters = () => {
  return (
    <FiltersStyled>
      <li>
        <button>all</button>
      </li>
      <li>
        <button>completed</button>
      </li>
      <li>
        <button>incompleted</button>
      </li>
    </FiltersStyled>
  );
};

const FiltersStyled = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

export default Filters;
