import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap");
  @import url("https://fonts.googleapis.com/css?family=Bellota:400,700&display=swap");
  @import url("https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700,700i&display=swap");
`;

const TodoTemplateStyled = styled.div`
  width: 550px;
  padding: 40px 50px;
  margin: 150px auto 0;
  background-color: white;
  box-shadow: 10px 10px 10px #c1c0b9;
`;

const AppHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`;

const DateAreaStyled = styled.div`
  display: flex;
  color: #333;
  font-family: "Bellota";
`;

const LeftColStyled = styled.div`
  margin-right: 5px;
  font-weight: 700;
  font-size: 40px;
`;

const DayAreaStyled = styled.div`
  margin-right: 5px;
  font-weight: 700;
  font-size: 40px;
`;

const RightColStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MonthAreaStyled = styled.div`
    font-family: "Roboto";
    font-size: 20px;
    color: ${(props) => {
        switch (props.month) {
            case "JAN":
                return "#FFFFE5"; // JAN일 경우 빨간색
            case "FAB":
                return "#3f4e93"; // FAB일 경우 파란색
            case "MAR":
                return "#f5b199"; // FAB일 경우 파란색
            case "APR":
                return "#fdeff2"; // FAB일 경우 파란색
            case "MAY":
                return "#009b9f"; // FAB일 경우 파란색
            case "JUN":
                return "#bea2ca"; // FAB일 경우 파란색
            case "JUL":
                return "#007199"; // FAB일 경우 파란색
            case "AUG":
                return "#438cb5"; // FAB일 경우 파란색
            case "SEP":
                return "#7dbb7c"; // FAB일 경우 파란색
            case "OCT":
                return "#ee7948"; // FAB일 경우 파란색
            case "NOV":
                return "#bf794e"; // FAB일 경우 파란색
            default:
                return "#d6c6af"; // 기본 값은 검정색
        }
    }};
`;

const YearAreaStyled = styled.div`
  line-height: 1;
`;

const MainTitleStyled = styled.div`
  color: skyblue;
  font: italic 700 35px "Roboto Condensed";
  letter-spacing: -0.5px;
`;

function TodoTemplate(props) {
    const date = new Date();
    const year = date.getFullYear();
    const monthNames = ["JAN", "FAB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();

    return (
        <>
            <GlobalStyle />
            <TodoTemplateStyled>
                <AppHeaderStyled>
                    <DateAreaStyled>
                        <LeftColStyled>
                            <DayAreaStyled>{day}</DayAreaStyled>
                        </LeftColStyled>
                        <RightColStyled>
                            <MonthAreaStyled>{month}</MonthAreaStyled>
                            <YearAreaStyled>{year}</YearAreaStyled>
                        </RightColStyled>
                    </DateAreaStyled>
                    <MainTitleStyled>REACT TODO LIST</MainTitleStyled>
                </AppHeaderStyled>
                <div className="content">{props.children}</div>
            </TodoTemplateStyled>
        </>
    );
}

export default TodoTemplate;
