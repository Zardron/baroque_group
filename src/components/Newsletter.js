import React, { useState } from "react";
import styled from "styled-components";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import Checkbox from "./Checkbox";
import Checkbox3 from "./Checkbox3";
import Checkbox2 from "./Checkbox2";

const Container = styled.div`
  padding: 20px 10px;
  background-color: #768a9a;
`;

const Data = styled.div`
  display: flex;
  align-items: center;
`;

const Span = styled.span`
  text-align: left;
  font: normal normal medium 13px/24px Quicksand;
  letter-spacing: 0.8px;
  color: #ffffff;
`;

const Search = styled.span`
  text-align: left;
  font: normal normal normal 12px/24px Quicksand;
  letter-spacing: 0.7px;
  color: #ffffff;
  padding: 8px 60px 8px 20px;

  border: 0.800000011920929px solid #e4e4e4;
  border-radius: 18px;

  cursor: pointer;
`;

const Subscribe = styled.span`
  display: flex;
  align-items: center;
  text-align: left;
  font: normal normal medium 12px/24px Quicksand;
  letter-spacing: 0.8px;
  color: #768a9a;
  padding: 10px 20px;
  margin: 0 20px;

  background: #f6f9fb 0% 0% no-repeat padding-box;
  border-radius: 24px;

  cursor: pointer;
`;

const Image = styled(NewspaperIcon)`
  text-align: left;
  font: normal normal medium 12px/24px Quicksand;
  letter-spacing: 0.8px;
  color: #768a9a;

  background: #f6f9fb 0% 0% no-repeat padding-box;
  border-radius: 24px;
`;

const Newsletter = () => {
  const [checked, setChecked] = useState(true);
  const [checkedA, setCheckedA] = useState(true);
  const [checkedB, setCheckedB] = useState(false);

  return (
    <Container>
      <Data>
        <Span>Interested in:</Span>
        <div style={{ fontFamily: "system-ui", paddingLeft: "10px" }}>
          <label>
            <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
            <span
              style={{
                marginLeft: 8,
                font: "normal normal normal 12px/24px Quicksand",
                color: "#ffffff",
              }}
            >
              Chartering a yacht
            </span>
          </label>
        </div>
       
        <div style={{ fontFamily: "system-ui", paddingLeft: "10px" }}>
          <label>
            <Checkbox2 checkedA={checkedA} onChange={() => setCheckedA(!checkedA)} />
            <span
              style={{
                marginLeft: 8,
                font: "normal normal normal 12px/24px Quicksand",
                color: "#ffffff",
              }}
            >
              Buying a yacht
            </span>
          </label>
        </div>

        <div style={{ fontFamily: "system-ui", padding: "0 10px" }}>
          <label>
            <Checkbox3 checkedB={checkedB} onChange={() => setCheckedB(!checkedB)} />
            <span
              style={{
                marginLeft: 8,
                font: "normal normal normal 12px/24px Quicksand",
                color: "#ffffff",
              }}
            >
              General updates
            </span>
          </label>
        </div>

        <Search>Enter your email address</Search>
        <Subscribe>
          Subscribe <Image />
        </Subscribe>
      </Data>
    </Container>
  );
};

export default Newsletter;
