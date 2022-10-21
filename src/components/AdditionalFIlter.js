import React, { useState } from "react";
import styled from "styled-components";

const Containerx = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 10px 10px 10px;
`;

const LengthForContainerx = styled.div`
  flex: 0.1;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

const LookingForContainerx = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

const LocationContainerx = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

const DateContainerx = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`;

const MinMaxContainerx = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px 10px;
  border: 0.800000011920929px solid #e4e4e4;
  border-radius: 19px;
  margin-top: 36px;
`;

const GuestContainerx = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

const YachtNameContainerx = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

const FeaturedOnlyContainerx = styled.div`
  flex: 0.5;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

export const StyledLabelxx = styled.labelx`
  margin-bottom: 1rem;
`;

export const Labelx = styled.p`
  padding: 8px 0;
  font: normal normal medium 14px/24px Quicksand;
  letter-spacing: 0.7px;
  color: #000000;
  display: flex;
`;

export const Labelsx = styled.p`
  padding: 8px 0;
  font: normal normal medium 14px/24px Quicksand;
  letter-spacing: 0.7px;
  color: #000000;
  display: flex;
  padding-top: 50px;
`;

const Separatorx = styled.span`
  padding: 0 20px;
  color: rgba(128, 128, 128, 0.3);
`;

const DropDownContainerx = styled("div")`
  width: 90%;
`;

const DropDownHeaderx = styled("div")`
  max-width: 90%;
  height: 100%;
  padding: 0.5rem;
  margin-bottom: 5px;
  border: 0.800000011920929px solid #e4e4e4;
  border-radius: 19px;
  opacity: 1;

  text-align: left;
  font: normal normal normal 14px/24px Quicksand;
  letter-spacing: 0.7px;
  color: #000000;

  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background: url("data:image/svg+xml;utf8,<svg viewBox='0 0 140 140' width='16' height='16' xmlns='http://www.w3.org/2000/svg'><g><path d='m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z' fill='gray'/></g></svg>")
    no-repeat;
  background-position: right 5px top 50%;

  cursor: pointer;
`;

const DropDownListContainerx = styled("div")``;

const DropDownListx = styled("ul")`
  position: absolute;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 3px 6px 14px #00000019;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  padding: 20px 50px 20px 20px;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItemx = styled("li")`
  list-style: none;
  padding: 7px 0;
  text-align: left;
  font: normal normal normal 14px/24px Quicksand;
  letter-spacing: 0.7px;
  color: #000000;

  &:hover {
    font: normal normal 600 14px/24px Quicksand;
  }
`;

const Spanx = styled("span")`
  list-style: none;
  text-align: left;
  font: normal normal normal 14px/24px Quicksand;
  letter-spacing: 0.7px;
  color: #000000;
  cursor: pointer;

  &:hover {
    padding-bottom: 7px;
    font: normal normal 600 14px/24px Quicksand;
    border-bottom: 1px solid rgba(128, 128, 128, 0.3);
  }
`;

const AdditionalFilter = () => {
  const [isFilter, setIsFilter] = useState(false);
  const [isYachts, setIsYachts] = useState(false);
  const [isBuilder, setIsBuilder] = useState(false);
  const [isBuilt, setIsBuilt] = useState(false);
  const [isRefit, setIsRefit] = useState(false);
  const [isLength, setIsLength] = useState(false);
  const [isPrice, setIsPrice] = useState(false);
  const [isToys, setIsToys] = useState(false);
  const [isAmenities, setIsAmenities] = useState(false);

  return (
    <>
      <Containerx>
        <LookingForContainerx>
          <Labelx>Filter by</Labelx>
          <DropDownContainerx>
            <DropDownHeaderx onClick={() => setIsFilter(!isFilter)}>
              Featured only
            </DropDownHeaderx>
            {isFilter && (
              <DropDownListContainerx>
                <DropDownListx style={{ paddingRight: "120px" }}>
                  <ListItemx>
                    <Spanx>Featured only</Spanx>
                  </ListItemx>
                  <ListItemx>
                    <Spanx>Featured only 1</Spanx>
                  </ListItemx>
                  <ListItemx>
                    <Spanx>Featured only 2</Spanx>
                  </ListItemx>
                  <ListItemx>
                    <Spanx>Featured only 3</Spanx>
                  </ListItemx>
                </DropDownListx>
              </DropDownListContainerx>
            )}
          </DropDownContainerx>
        </LookingForContainerx>
        <LocationContainerx>
          <Labelx>Yacht type</Labelx>
          <DropDownContainerx>
            <DropDownHeaderx onClick={() => setIsYachts(!isYachts)}>
              Both
            </DropDownHeaderx>
            {isYachts && (
              <DropDownListContainerx>
                <DropDownListx style={{ paddingRight: "120px" }}>
                  <ListItemx>
                    <Spanx>Both</Spanx>
                  </ListItemx>
                  <ListItemx>
                    <Spanx>Sailing Yacht</Spanx>
                  </ListItemx>
                  <ListItemx>
                    <Spanx>Motor Yacht</Spanx>
                  </ListItemx>
                  <ListItemx>
                    <Spanx>Gulet Yacht</Spanx>
                  </ListItemx>
                </DropDownListx>
              </DropDownListContainerx>
            )}
          </DropDownContainerx>
        </LocationContainerx>
        <GuestContainerx>
          <Labelx>Builder</Labelx>
          <DropDownContainerx>
            <DropDownHeaderx onClick={() => setIsBuilder(!isBuilder)}>
              Any
            </DropDownHeaderx>
            {isBuilder && (
              <DropDownListContainerx>
                <DropDownListx style={{ paddingRight: "120px" }}>
                  <ListItemx>
                    <Spanx>Any</Spanx>
                  </ListItemx>
                  <ListItemx>
                    <Spanx>Builder 1</Spanx>
                  </ListItemx>
                  <ListItemx>
                    <Spanx>Builder 2</Spanx>
                  </ListItemx>
                  <ListItemx>
                    <Spanx>Builder 3</Spanx>
                  </ListItemx>
                </DropDownListx>
              </DropDownListContainerx>
            )}
          </DropDownContainerx>
        </GuestContainerx>
        <YachtNameContainerx>
          <Labelx>Built</Labelx>
          <DropDownContainerx>
            <DropDownHeaderx onClick={() => setIsBuilt(!isBuilt)}>
              Any
            </DropDownHeaderx>
            {isBuilt && (
              <DropDownListContainerx>
                <DropDownListx style={{ paddingRight: "160px" }}>
                  <ListItemx>
                    <Spanx>Any</Spanx>
                  </ListItemx>
                  <ListItemx>
                    <Spanx>Built 1</Spanx>
                  </ListItemx>
                  <ListItemx>
                    <Spanx>Built 2</Spanx>
                  </ListItemx>
                  <ListItemx>
                    <Spanx>Built 3</Spanx>
                  </ListItemx>
                </DropDownListx>
              </DropDownListContainerx>
            )}
          </DropDownContainerx>
        </YachtNameContainerx>
        <YachtNameContainerx>
          <Labelx>Refit</Labelx>
          <DropDownContainerx>
            <DropDownHeaderx onClick={() => setIsRefit(!isRefit)}>
              Any
            </DropDownHeaderx>
            {isRefit && (
              <DropDownListContainerx>
                <DropDownListx style={{ paddingRight: "160px" }}>
                  <ListItemx>
                    <Spanx>Any</Spanx>
                  </ListItemx>
                  <ListItemx>
                    <Spanx>Refit 1</Spanx>
                  </ListItemx>
                  <ListItemx>
                    <Spanx>Refit 2</Spanx>
                  </ListItemx>
                  <ListItemx>
                    <Spanx>Refit 3</Spanx>
                  </ListItemx>
                </DropDownListx>
              </DropDownListContainerx>
            )}
          </DropDownContainerx>
        </YachtNameContainerx>
        <FeaturedOnlyContainerx></FeaturedOnlyContainerx>
      </Containerx>

      {/* SECOND ADD ON FILTER */}
      <Containerx>
        <LengthForContainerx>
          <Labelx>Length</Labelx>
          <DropDownContainerx>
            <DropDownHeaderx
              onClick={() => setIsLength(!isLength)}
              style={{ paddingRight: "50px" }}
            >
              Ft
            </DropDownHeaderx>
            {isLength && (
              <DropDownListContainerx>
                <DropDownListx>
                  <ListItemx>
                    <Spanx>Ft</Spanx>
                  </ListItemx>
                  <ListItemx>
                    <Spanx>Inch</Spanx>
                  </ListItemx>
                  <ListItemx>
                    <Spanx>Meter</Spanx>
                  </ListItemx>
                  <ListItemx>
                    <Spanx>Kilometer</Spanx>
                  </ListItemx>
                </DropDownListx>
              </DropDownListContainerx>
            )}
          </DropDownContainerx>
        </LengthForContainerx>
        <DateContainerx>
          <MinMaxContainerx>
            <Labelx>Minimum</Labelx>
            <Separatorx>|</Separatorx>
            <Labelx>Maximum</Labelx>
          </MinMaxContainerx>
        </DateContainerx>
        <LengthForContainerx>
          <Labelx>Price</Labelx>
          <DropDownContainerx>
            <DropDownHeaderx
              onClick={() => setIsPrice(!isPrice)}
              style={{ paddingRight: "50px" }}
            >
              USD
            </DropDownHeaderx>
            {isPrice && (
              <DropDownListContainerx>
                <DropDownListx>
                  <ListItemx>
                    <Spanx>USD</Spanx>
                  </ListItemx>
                  <ListItemx>
                    <Spanx>AED</Spanx>
                  </ListItemx>
                  <ListItemx>
                    <Spanx>PHP</Spanx>
                  </ListItemx>
                  <ListItemx>
                    <Spanx>EUR</Spanx>
                  </ListItemx>
                </DropDownListx>
              </DropDownListContainerx>
            )}
          </DropDownContainerx>
        </LengthForContainerx>
        <DateContainerx>
          <MinMaxContainerx>
            <Labelx>Minimum</Labelx>
            <Separatorx>|</Separatorx>
            <Labelx>Maximum</Labelx>
          </MinMaxContainerx>
        </DateContainerx>
        <YachtNameContainerx>
          <Labelx>Toys</Labelx>
          <DropDownContainerx>
            <DropDownHeaderx onClick={() => setIsToys(!isToys)}>
              Any
            </DropDownHeaderx>
            {isToys && (
              <DropDownListContainerx>
                <DropDownListx style={{ paddingRight: "180px" }}>
                  <ListItemx>
                    <Spanx>Any</Spanx>
                  </ListItemx>
                  <ListItemx>
                    <Spanx>Toys 1</Spanx>
                  </ListItemx>
                  <ListItemx>
                    <Spanx>Toys 2</Spanx>
                  </ListItemx>
                  <ListItemx>
                    <Spanx>Toys 3</Spanx>
                  </ListItemx>
                </DropDownListx>
              </DropDownListContainerx>
            )}
          </DropDownContainerx>
        </YachtNameContainerx>
        <YachtNameContainerx>
          <Labelx>Amenities</Labelx>
          <DropDownContainerx>
            <DropDownHeaderx onClick={() => setIsAmenities(!isAmenities)}>
              Any
            </DropDownHeaderx>
            {isAmenities && (
              <DropDownListContainerx>
                <DropDownListx style={{ paddingRight: "180px" }}>
                  <ListItemx>
                    <Spanx>Any</Spanx>
                  </ListItemx>
                  <ListItemx>
                    <Spanx>Amenities 1</Spanx>
                  </ListItemx>
                  <ListItemx>
                    <Spanx>Amenities 2</Spanx>
                  </ListItemx>
                  <ListItemx>
                    <Spanx>Amenities 3</Spanx>
                  </ListItemx>
                </DropDownListx>
              </DropDownListContainerx>
            )}
          </DropDownContainerx>
        </YachtNameContainerx>
      </Containerx>
    </>
  );
};

export default AdditionalFilter;
