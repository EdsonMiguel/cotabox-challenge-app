import React from 'react';
import styled from 'styled-components';

const Table = (props) => {
  const { tableHeader, tableData } = props;

  return (
    <StyledTable>
      <thead>
        <tr>

          {
        tableHeader.map((item) => (
          <StyledTableHeader key={item}>{item}</StyledTableHeader>
        ))
      }
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, index) => (
          <tr key={item._id}>
            <StyledTableContent>{index + 1}</StyledTableContent>
            <StyledTableContent>{item.firstName}</StyledTableContent>
            <StyledTableContent>{item.lastName}</StyledTableContent>
            <StyledTableContent>{`${item.participation}%`}</StyledTableContent>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

const StyledTable = styled.table`
  border-collapse: collapse;
  border: 1px solid #b5b5b5;
`;
const StyledTableHeader = styled.th`
  padding: 5px;
  color: #707070;
  border: 1px solid #b5b5b5;
`;
const StyledTableContent = styled.td`
  text-align: center;
  padding: 5px;
  color: #a1a1a1;
  border: 1px solid #b5b5b5;
`;

export default Table;
