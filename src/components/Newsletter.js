import React, { useState } from "react";
import styled from "styled-components";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import Checkbox from "./Checkbox";
import Checkbox3 from "./Checkbox3";
import Checkbox2 from "./Checkbox2";

const Container = styled.div`
  padding: 20px 10px;
  background-color: #768a9a;
  align-items: center;
  display: flex;
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

const Search = styled.input`
  width: 170px;
  text-align: left;
  font: normal normal normal 14px/24px Quicksand;
  letter-spacing: 0.7px;
  color: white;
  padding: 8px 60px 8px 20px;
  background-color: #768a9a;
  border: 0.800000011920929px solid #e4e4e4;
  border-radius: 20px;

  cursor: pointer;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: white;
    opacity: 1; /* Firefox */
  }

  :focus {
    outline: none;
  }
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

const Image = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 10px;
`;

const Separator = styled.span`
  padding-left: 10px;
  padding-right: 20px;
  color: rgba(255, 255, 255, 0.3);
`;

const Newsletter = () => {
  const [checked, setChecked] = useState(true);
  const [checkedA, setCheckedA] = useState(true);
  const [checkedB, setCheckedB] = useState(false);

  return (
    <Container>
      <div className="container">
        <Data>
          <Span>Interested in:</Span>
          <div style={{ fontFamily: "system-ui", paddingLeft: "10px" }}>
            <label>
              <Checkbox
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
              <span
                style={{
                  marginLeft: 8,
                  font: "normal normal normal 14px/24px Quicksand",
                  color: "#ffffff",
                }}
              >
                Chartering a yacht
              </span>
            </label>
          </div>

          <div
            style={{
              fontFamily: "system-ui",
              paddingLeft: "10px",
              cursor: "pointer",
            }}
          >
            <label>
              <Checkbox2
                checkedA={checkedA}
                onChange={() => setCheckedA(!checkedA)}
              />
              <span
                style={{
                  marginLeft: 8,
                  font: "normal normal normal 14px/24px Quicksand",
                  color: "#ffffff",
                }}
              >
                Buying a yacht
              </span>
            </label>
          </div>

          <div
            style={{
              fontFamily: "system-ui",
              padding: "0 10px",
              cursor: "pointer",
            }}
          >
            <label>
              <Checkbox3
                checkedB={checkedB}
                onChange={() => setCheckedB(!checkedB)}
              />
              <span
                style={{
                  marginLeft: 8,
                  font: "normal normal normal 14px/24px Quicksand",
                  color: "#ffffff",
                }}
              >
                General updates
              </span>
            </label>
          </div>
          <Separator>|</Separator>
          <Search type="text" placeholder="Enter your email address"></Search>
          <Subscribe>
            Subscribe{" "}
            <Image src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1666278711/Baroque/1_rz6ad9.png" />
          </Subscribe>
        </Data>
      </div>
    </Container>
  );
};

export default Newsletter;
