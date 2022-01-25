import styled from "styled-components";

export const Calculator = styled.div`
  height: 80vh;
  width: 50vh;
  min-width: 300px;
  min-height: 500px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: rgb(51 3 60 / 50%);
  border-radius: 15px;
  box-shadow: 0 0 14px rgb(36, 4, 49);
  margin-top: 40px;
  margin-left: 461px;
`;


export const LayoutButtons = styled.div`
  flex: 1;
  margin: 9px;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 17px;
`;

export const display = styled.div`
 height: 100px;
  padding: 0px 10px;
  text-align: right;
  font-size: 50px;
  line-height: 100px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
`;

