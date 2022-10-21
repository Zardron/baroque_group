import styled from "styled-components";
import React, { useState } from "react";
import "./Filter.css";
import FeaturedOnly from "./FeatureOnly";
import Slider from "react-slick";

import LeftArrow from "../assets/left-arrow.svg";
import RightArrow from "../assets/right-arrow.svg";
import CloseIcon from "@mui/icons-material/Close";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 10px 10px 10px;
`;

const LookingForContainer = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

const LocationContainer = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

const DateContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const GuestContainer = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

const YachtNameContainer = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

const FeaturedOnlyContainer = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  padding-top: 45px;
  padding-left: 10px;
`;

export const StyledLabel = styled.label`
  margin-bottom: 1rem;
`;

export const DateLabel = styled.p`
  font: normal normal medium 14px/24px Quicksand;
  letter-spacing: 0.7px;
  color: #000000;
  display: flex;
  padding-left: 10px;
  padding-bottom: 10px;
`;

export const Label = styled.p`
  font: normal normal medium 14px/24px Quicksand;
  letter-spacing: 0.7px;
  color: #000000;
  display: flex;
`;

const Separator = styled.span`
  padding: 0 15px;
  color: rgba(128, 128, 128, 0.3);
`;

const DateDropDownContainer = styled("div")`
  width: 90%;
`;

const DateDropDownHeader = styled("div")`
  width: 100%;
  padding: 8px 10px;
  margin-bottom: 5px;
  border: 0.800000011920929px solid #e4e4e4;
  border-radius: 19px;
  opacity: 1;
  margin-top: 0.2rem;

  text-align: left;
  font: normal normal normal 14px/24px Quicksand;
  letter-spacing: 0.7px;
  color: #000000;

  cursor: pointer;
`;

const DateDropDownListContainer = styled("div")``;

const DateDropDownList = styled("ul")`
  position: absolute;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 3px 6px 14px #00000019;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  padding: 20px 10px 20px 10px;
  z-index: 99;
  cursor: pointer;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const DropDownContainer = styled("div")`
  width: 90%;
`;

const DateDownHeader = styled("div")`
  margin-left: 20px;
  width: 40%;
  height: 100%;
  padding: 0.5rem;
  margin-bottom: 5px;
  border: 0.800000011920929px solid #e4e4e4;
  border-radius: 19px;
  opacity: 1;
  margin-top: 0.2rem;

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

const DropDownHeader = styled("div")`
  width: 90%;
  height: 100%;
  padding: 0.5rem;
  margin-bottom: 5px;
  border: 0.800000011920929px solid #e4e4e4;
  border-radius: 19px;
  opacity: 1;
  margin-top: 0.2rem;

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

const DropsDownHeader = styled("div")`
  display: flex;
  width: 80%;
  height: 100%;
  padding: 0.5rem;
  margin-bottom: 5px;
  border: 0.800000011920929px solid #e4e4e4;
  border-radius: 19px;
  opacity: 1;
  margin-top: 0.2rem;

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

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  position: absolute;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 3px 6px 14px #00000019;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  padding: 20px 30px 20px 30px;
  z-index: 99;
  cursor: pointer;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  padding: 5px 0;
  text-align: left;
  font: normal normal normal 14px/24px Quicksand;
  letter-spacing: 0.7px;
  color: #000000;
`;

const ListItemYacht = styled("li")`
  list-style: none;
  padding: 5px 0;
  text-align: left;
  font: normal normal normal 14px/24px Quicksand;
  letter-spacing: 0.7px;
  color: #000000;
  padding-left: 30px;
`;

// MORE FILTER

const YachtNameContainers = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  padding-top: 5px;
`;

const SortContainers = styled.div`
  flex: 0.7;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 20px;
`;

const MoreFilterContainers = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

const SearchContainers = styled.div`
  flex: 1.3;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`;

export const Labels = styled.p`
  padding: 8px 0;
  font: normal normal normal 14px/24px Quicksand;
  letter-spacing: 0.7px;
  color: white;
  display: flex;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Separators = styled.span`
  padding: 0 10px;
  color: white;
  &:hover {
    color: white;
  }
`;

const DateValueContainers = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchValueContainers = styled.div`
  margin-top: 1rem;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  border: 0.800000011920929px solid #e4e4e4;
  border-radius: 19px;
  background-color: #0a3050;

  &:hover {
    background-color: white;
  }

  &:hover ${Labels} {
    color: black;
  }

  &:hover ${Separators} {
    color: black;
  }
`;

const Values = styled.div`
  margin-top: 1rem;
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  padding: 0 10px;
  margin: 16px 10px;
  border: 0.800000011920929px solid #e4e4e4;
  border-radius: 20px;
  background-color: #768a9a;
`;

const Nulls = styled.div`
  margin-top: 1rem;
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  padding: 0 10px;
  margin: 16px 10px;
  border: none;
  border-radius: 19px;
  background-color: none;
`;

const AddOnContainers = styled.div`
  flex: 1.5;
  display: grid;
  grid-template-columns: auto auto auto auto;
`;

export const StyledLabels = styled.label`
  margin-bottom: 1rem;
`;

export const MoreFilterLabels = styled.p`
  padding: 8px 10px;
  font: normal normal normal 14px/24px Quicksand;
  letter-spacing: 0.7px;
  display: flex;
  border: 0.800000011920929px solid #e4e4e4;
  border-radius: 19px;
  display: flex;
  font-weight: 500;
  width: auto;
  cursor: pointer;
`;

export const Labelss = styled.p`
  padding: 8px 0;
  font: normal normal normal 14px/24px Quicksand;
  letter-spacing: 0.7px;
  color: #000000;
  display: flex;
  padding-top: 50px;
`;

export const Dailys = styled.p`
  padding: 8px 0;
  font: normal normal normal 14px/24px Quicksand;
  letter-spacing: 0.7px;
  color: #ffffff;
  display: flex;
  border: 0.800000011920929px solid #e4e4e4;
  border-radius: 19px;
  background-color: #768a9a;
  padding-left: 10px;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
`;

const DropDownContainers = styled("div")`
  width: 90%;
`;

const DropDownHeaders = styled("div")`
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

const DropDownListContainers = styled("div")``;

const DropDownLists = styled("ul")`
  z-index: 99;

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

const ListItems = styled("li")`
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

// ADDITIONAL FILTER
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

export const StyledLabelxx = styled.label`
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

const Spans = styled("span")`
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

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDate, setIsDate] = useState(false);
  const [isLocation, setIsLocation] = useState(false);
  const [isGuest, setIsGuest] = useState(false);
  const [isYacht, setIsYacht] = useState(false);
  const [checked, setChecked] = useState(true);

  const [isFilter, setIsFilter] = useState(false);
  const [isYachts, setIsYachts] = useState(false);
  const [isBuilder, setIsBuilder] = useState(false);
  const [isBuilt, setIsBuilt] = useState(false);
  const [isRefit, setIsRefit] = useState(false);
  const [isLength, setIsLength] = useState(false);
  const [isPrice, setIsPrice] = useState(false);
  const [isToys, setIsToys] = useState(false);
  const [isAmenities, setIsAmenities] = useState(false);

  const handleWeekly = () => {
    setIsOpen(!isOpen);
    setIsDate(false);
    setIsLocation(false);
    setIsGuest(false);
    setIsYacht(false);
    setIsFilter(false);
    setIsYachts(false);
    setIsBuilder(false);
    setIsBuilt(false);
    setIsRefit(false);
    setIsLength(false);
    setIsPrice(false);
    setIsToys(false);
    setIsAmenities(false);
  };

  const handleDate = () => {
    setIsOpen(false);
    setIsDate(!isDate);
    setIsLocation(false);
    setIsGuest(false);
    setIsYacht(false);
    setIsFilter(false);
    setIsYachts(false);
    setIsBuilder(false);
    setIsBuilt(false);
    setIsRefit(false);
    setIsLength(false);
    setIsPrice(false);
    setIsToys(false);
    setIsAmenities(false);
  };

  const handleLocation = () => {
    setIsOpen(false);
    setIsDate(false);
    setIsLocation(!isLocation);
    setIsGuest(false);
    setIsYacht(false);
    setIsFilter(false);
    setIsYachts(false);
    setIsBuilder(false);
    setIsBuilt(false);
    setIsRefit(false);
    setIsLength(false);
    setIsPrice(false);
    setIsToys(false);
    setIsAmenities(false);
  };

  const handleGuest = () => {
    setIsOpen(false);
    setIsDate(false);
    setIsLocation(false);
    setIsGuest(!isGuest);
    setIsYacht(false);
    setIsFilter(false);
    setIsYachts(false);
    setIsBuilder(false);
    setIsBuilt(false);
    setIsRefit(false);
    setIsLength(false);
    setIsPrice(false);
    setIsToys(false);
    setIsAmenities(false);
  };

  const handleYacht = () => {
    setIsOpen(false);
    setIsDate(false);
    setIsLocation(false);
    setIsGuest(false);
    setIsYacht(!isYacht);
    setIsFilter(false);
    setIsYachts(false);
    setIsBuilder(false);
    setIsBuilt(false);
    setIsRefit(false);
    setIsLength(false);
    setIsPrice(false);
    setIsToys(false);
    setIsAmenities(false);
  };

  const handleFilter = () => {
    setIsOpen(false);
    setIsDate(false);
    setIsLocation(false);
    setIsGuest(false);
    setIsYacht(false);
    setIsFilter(!isFilter);
    setIsYachts(false);
    setIsBuilder(false);
    setIsBuilt(false);
    setIsRefit(false);
    setIsLength(false);
    setIsPrice(false);
    setIsToys(false);
    setIsAmenities(false);
  };

  const handleYachts = () => {
    setIsOpen(false);
    setIsDate(false);
    setIsLocation(false);
    setIsGuest(false);
    setIsYacht(false);
    setIsFilter(false);
    setIsYachts(!isYachts);
    setIsBuilder(false);
    setIsBuilt(false);
    setIsRefit(false);
    setIsLength(false);
    setIsPrice(false);
    setIsToys(false);
    setIsAmenities(false);
  };

  const handleBuilder = () => {
    setIsOpen(false);
    setIsDate(false);
    setIsLocation(false);
    setIsGuest(false);
    setIsYacht(false);
    setIsFilter(false);
    setIsYachts(false);
    setIsBuilder(!isBuilder);
    setIsBuilt(false);
    setIsRefit(false);
    setIsLength(false);
    setIsPrice(false);
    setIsToys(false);
    setIsAmenities(false);
  };

  const handleBuilt = () => {
    setIsOpen(false);
    setIsDate(false);
    setIsLocation(false);
    setIsGuest(false);
    setIsYacht(false);
    setIsFilter(false);
    setIsYachts(false);
    setIsBuilder(false);
    setIsBuilt(!isBuilt);
    setIsRefit(false);
    setIsLength(false);
    setIsPrice(false);
    setIsToys(false);
    setIsAmenities(false);
  };

  const handleRefit = () => {
    setIsOpen(false);
    setIsDate(false);
    setIsLocation(false);
    setIsGuest(false);
    setIsYacht(false);
    setIsFilter(false);
    setIsYachts(false);
    setIsBuilder(false);
    setIsBuilt(false);
    setIsRefit(!isRefit);
    setIsLength(false);
    setIsPrice(false);
    setIsToys(false);
    setIsAmenities(false);
  };

  const handleLength = () => {
    setIsOpen(false);
    setIsDate(false);
    setIsLocation(false);
    setIsGuest(false);
    setIsYacht(false);
    setIsFilter(false);
    setIsYachts(false);
    setIsBuilder(false);
    setIsBuilt(false);
    setIsRefit(false);
    setIsLength(!isLength);
    setIsPrice(false);
    setIsToys(false);
    setIsAmenities(false);
  };

  const handlePrice = () => {
    setIsOpen(false);
    setIsDate(false);
    setIsLocation(false);
    setIsGuest(false);
    setIsYacht(false);
    setIsFilter(false);
    setIsYachts(false);
    setIsBuilder(false);
    setIsBuilt(false);
    setIsRefit(false);
    setIsLength(false);
    setIsPrice(!isPrice);
    setIsToys(false);
    setIsAmenities(false);
  };

  const handleToys = () => {
    setIsOpen(false);
    setIsDate(false);
    setIsLocation(false);
    setIsGuest(false);
    setIsYacht(false);
    setIsFilter(false);
    setIsYachts(false);
    setIsBuilder(false);
    setIsBuilt(false);
    setIsRefit(false);
    setIsLength(false);
    setIsPrice(false);
    setIsToys(!isToys);
    setIsAmenities(false);
  };

  const handleAmenities = () => {
    setIsOpen(false);
    setIsDate(false);
    setIsLocation(false);
    setIsGuest(false);
    setIsYacht(false);
    setIsFilter(false);
    setIsYachts(false);
    setIsBuilder(false);
    setIsBuilt(false);
    setIsRefit(false);
    setIsLength(false);
    setIsPrice(false);
    setIsToys(false);
    setIsAmenities(!isAmenities);
  };

  const [filter, setFilter] = useState(false);
  const [isOpens, setIsOpens] = useState(false);
  const toggling = () => setIsOpens(!isOpens);

  const openFilter = () => {
    setFilter(!filter);
  };

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props} />
  );
  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  return (
    <>
      {/* id="mainHeader" ref={stickyHeader} */}
      <div className="container">
        <Container>
          <LookingForContainer>
            <Label>Looking for</Label>
            <DropDownContainer>
              <DropDownHeader onClick={handleWeekly}>
                Weekly Charter
              </DropDownHeader>
              {isOpen && (
                <DropDownListContainer>
                  <DropDownList>
                    <ListItem style={{ fontWeight: "bold" }}>
                      <Spans>Weekly Charter</Spans>
                    </ListItem>
                    <ListItem><Spans>Weekly Charter Value 1</Spans></ListItem>
                    <ListItem><Spans>Weekly Charter Value 2</Spans></ListItem>
                    <ListItem><Spans>Weekly Charter Value 3</Spans></ListItem>
                  </DropDownList>
                </DropDownListContainer>
              )}
            </DropDownContainer>
          </LookingForContainer>
          <LocationContainer>
            <Label>Location</Label>
            <DropDownContainer>
              <DropDownHeader onClick={handleLocation}>Any</DropDownHeader>
              {isLocation && (
                <DropDownListContainer>
                  <DropDownList style={{ paddingRight: "100px" }}>
                    <ListItem><Spans>Any</Spans></ListItem>
                    <ListItem><Spans>Location 1</Spans></ListItem>
                    <ListItem><Spans>Location 2</Spans></ListItem>
                    <ListItem><Spans>Location 3</Spans></ListItem>
                  </DropDownList>
                </DropDownListContainer>
              )}
            </DropDownContainer>
          </LocationContainer>
          <DateContainer>
            <DateDropDownContainer>
              <Label>Date</Label>

              <DateDropDownHeader onClick={handleDate}>
                05/09/2022
                <Separator>|</Separator>
                17/09/2022
              </DateDropDownHeader>
              {isDate && (
                <DateDropDownListContainer>
                  <DateDropDownList>
                    <DateLabel>Flexible dates</DateLabel>
                    <DateDownHeader>5 days before and after</DateDownHeader>
                    <img src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1666321905/Baroque/date_uok1vf.png" />
                  </DateDropDownList>
                </DateDropDownListContainer>
              )}
            </DateDropDownContainer>
          </DateContainer>
          <GuestContainer>
            <Label style={{ marginLeft: "10%" }}>Guest</Label>
            <DropDownContainer>
              <DropDownHeader
                style={{ marginLeft: "10%" }}
                onClick={handleGuest}
              >
                Guest
              </DropDownHeader>
              {isGuest && (
                <DropDownListContainer style={{ marginLeft: "10%" }}>
                  <DropDownList style={{ paddingRight: "120px" }}>
                    <ListItem><Spans>Guest</Spans></ListItem>
                    <ListItem><Spans>Guest 1</Spans></ListItem>
                    <ListItem><Spans>Guest 2</Spans></ListItem>
                    <ListItem><Spans>Guest 3</Spans></ListItem>
                  </DropDownList>
                </DropDownListContainer>
              )}
            </DropDownContainer>
          </GuestContainer>
          <YachtNameContainer>
            <Label style={{ marginLeft: "10%" }}>Yacht name</Label>
            <DropsDownHeader
              style={{ marginLeft: "10%" }}
              onClick={handleYacht}
            >
              Any
            </DropsDownHeader>
            {isYacht && (
              <DropDownListContainer style={{ marginLeft: "10%" }}>
                <DropDownList style={{ paddingRight: "140px" }}>
                  <ListItem><Spans>Suggestion</Spans></ListItem>
                  <ListItemYacht><Spans>Sunray</Spans></ListItemYacht>
                  <ListItemYacht><Spans>Silver</Spans></ListItemYacht>
                  <ListItemYacht><Spans>Q</Spans></ListItemYacht>
                </DropDownList>
              </DropDownListContainer>
            )}
          </YachtNameContainer>
          <FeaturedOnlyContainer>
            <div style={{ fontFamily: "system-ui", padding: "0 10px" }}>
              <label>
                <FeaturedOnly
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
                <span
                  style={{
                    marginLeft: 8,
                    font: "normal normal normal 14px/24px Quicksand",
                    color: "black",
                  }}
                >
                  Featured only
                </span>
              </label>
            </div>
          </FeaturedOnlyContainer>
        </Container>

        {filter ? (
          <>
            <Containerx>
              <LookingForContainerx>
                <Labelx>Filter by</Labelx>
                <DropDownContainerx>
                  <DropDownHeaderx onClick={handleFilter}>
                    Featured only
                  </DropDownHeaderx>
                  {isFilter && (
                    <DropDownListContainerx>
                      <DropDownListx style={{ paddingRight: "120px" }}>
                        <ListItemx>
                          <Spans>Featured only</Spans>
                        </ListItemx>
                        <ListItemx>
                          <Spans>Featured only 1</Spans>
                        </ListItemx>
                        <ListItemx>
                          <Spans>Featured only 2</Spans>
                        </ListItemx>
                        <ListItemx>
                          <Spans>Featured only 3</Spans>
                        </ListItemx>
                      </DropDownListx>
                    </DropDownListContainerx>
                  )}
                </DropDownContainerx>
              </LookingForContainerx>
              <LocationContainerx>
                <Labelx>Yacht type</Labelx>
                <DropDownContainerx>
                  <DropDownHeaderx onClick={handleYachts}>
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
                  <DropDownHeaderx onClick={handleBuilder}>
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
                  <DropDownHeaderx onClick={handleBuilt}>
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
                  <DropDownHeaderx onClick={handleRefit}>
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
                    onClick={handleLength}
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
                    onClick={handlePrice}
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
                  <DropDownHeaderx onClick={handleToys}>
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
                  <DropDownHeaderx onClick={handleAmenities}>
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
        ) : (
          ""
        )}

        {filter ? (
          <>
            <div
              class="row"
              style={{
                padding: "0px 10px 0px 10px",
                borderTop: "1px solid rgba(128, 128, 128, 0.3)",
              }}
            >
              <div class="column1">
                <SortContainers>
                  <DropDownContainers>
                    <DropDownHeaders onClick={toggling}>Sort</DropDownHeaders>
                    {isOpens && (
                      <DropDownListContainers>
                        <DropDownLists>
                          <ListItems>
                            <Spans>Price Low to High</Spans>
                          </ListItems>
                          <ListItems>
                            <Spans>Price High to Low</Spans>
                          </ListItems>
                          <ListItems>
                            <Spans>Length Small to Big</Spans>
                          </ListItems>
                          <ListItems>
                            <Spans>Length Big to Small</Spans>
                          </ListItems>
                        </DropDownLists>
                      </DropDownListContainers>
                    )}
                  </DropDownContainers>
                </SortContainers>
                <MoreFilterContainers>
                  <DateValueContainers>
                    <MoreFilterLabels onClick={openFilter}>
                      {!filter ? "More filters" : "Less filters"}
                      {!filter ? (
                        <span style={{ paddingLeft: "10px" }}>+</span>
                      ) : (
                        <span style={{ paddingLeft: "10px" }}>-</span>
                      )}
                    </MoreFilterLabels>
                  </DateValueContainers>
                </MoreFilterContainers>
                <SearchContainers>
                  <SearchValueContainers>
                    <Labels>Search</Labels>
                    <Separators>|</Separators>
                    <Labels>152 results</Labels>
                  </SearchValueContainers>
                </SearchContainers>
              </div>
              <div class="column2">
                <AddOnContainers>
                  <YachtNameContainers>
                    <Values>
                      <Labels>
                        Daily{" "}
                        <CloseIcon
                          fontSize="small"
                          style={{
                            color: "rgba(255,255,255,.3)",
                          }}
                        />
                      </Labels>
                    </Values>
                    <Values>
                      <Labels>
                        Refit{" "}
                        <CloseIcon
                          fontSize="small"
                          style={{
                            color: "rgba(255,255,255,.3)",
                          }}
                        />
                      </Labels>
                    </Values>
                  </YachtNameContainers>
                  <YachtNameContainers>
                    <Values>
                      <Labels>
                        Built{" "}
                        <CloseIcon
                          fontSize="small"
                          style={{
                            color: "rgba(255,255,255,.3)",
                          }}
                        />
                      </Labels>
                    </Values>
                    <Values>
                      <Labels>
                        Price{" "}
                        <CloseIcon
                          fontSize="small"
                          style={{
                            color: "rgba(255,255,255,.3)",
                          }}
                        />
                      </Labels>
                    </Values>
                  </YachtNameContainers>
                  <YachtNameContainers>
                    <Values>
                      <Labels>
                        Indian Ocean
                        <CloseIcon
                          fontSize="small"
                          style={{
                            color: "rgba(255,255,255,.3)",
                            cursor: "pointer",
                          }}
                        />
                      </Labels>
                    </Values>
                    <Values>
                      <Labels>
                        Builder{" "}
                        <CloseIcon
                          fontSize="small"
                          style={{
                            color: "rgba(255,255,255,.3)",
                            cursor: "pointer",
                          }}
                        />
                      </Labels>
                    </Values>
                  </YachtNameContainers>
                  <YachtNameContainers>
                    <Values>
                      <Labels>
                        Built{" "}
                        <CloseIcon
                          fontSize="small"
                          style={{
                            color: "rgba(255,255,255,.3)",
                          }}
                        />
                      </Labels>
                    </Values>
                    <Nulls>
                      <Labels></Labels>
                    </Nulls>
                  </YachtNameContainers>
                </AddOnContainers>
              </div>
              <div class="column3">
                <a href="/" style={{ color: "blue", padding: "30px 0px" }}>
                  Clear all
                </a>
              </div>
            </div>
          </>
        ) : (
          <>
            <div
              class="row"
              style={{
                padding: "0px 10px 0px 10px",
                borderTop: "1px solid rgba(128, 128, 128, 0.3)",
              }}
            >
              <div class="column1">
                <SortContainers>
                  <DropDownContainers>
                    <DropDownHeaders onClick={toggling}>Sort</DropDownHeaders>
                    {isOpens && (
                      <DropDownListContainers>
                        <DropDownLists>
                          <ListItems>
                            <Spans>Price Low to High</Spans>
                          </ListItems>
                          <ListItems>
                            <Spans>Price High to Low</Spans>
                          </ListItems>
                          <ListItems>
                            <Spans>Length Small to Big</Spans>
                          </ListItems>
                          <ListItems>
                            <Spans>Length Big to Small</Spans>
                          </ListItems>
                        </DropDownLists>
                      </DropDownListContainers>
                    )}
                  </DropDownContainers>
                </SortContainers>
                <MoreFilterContainers>
                  <DateValueContainers>
                    <MoreFilterLabels onClick={openFilter}>
                      {!filter ? "More filters" : "Less filters"}
                      {!filter ? (
                        <span style={{ paddingLeft: "10px" }}>+</span>
                      ) : (
                        <span style={{ paddingLeft: "10px" }}>-</span>
                      )}
                    </MoreFilterLabels>
                  </DateValueContainers>
                </MoreFilterContainers>
                <SearchContainers>
                  <SearchValueContainers>
                    <Labels>Search</Labels>
                    <Separators>|</Separators>
                    <Labels>152 results</Labels>
                  </SearchValueContainers>
                </SearchContainers>
              </div>
              <div class="column2">
                <Slider {...settings} style={{ paddingTop: "5px" }}>
                  <div style={{ width: 100 }}>
                    <Values>
                      <Labels>
                        Daily{" "}
                        <CloseIcon
                          fontSize="small"
                          style={{
                            color: "rgba(255,255,255,.3)",
                          }}
                        />
                      </Labels>
                    </Values>
                  </div>
                  <div style={{ width: 100 }}>
                    <Values>
                      <Labels>
                        Built{" "}
                        <CloseIcon
                          fontSize="small"
                          style={{
                            color: "rgba(255,255,255,.3)",
                          }}
                        />
                      </Labels>
                    </Values>
                  </div>
                  <div style={{ width: 160 }}>
                    <Values>
                      <Labels>
                        Indian Ocean{" "}
                        <CloseIcon
                          fontSize="small"
                          style={{
                            color: "rgba(255,255,255,.3)",
                          }}
                        />
                      </Labels>
                    </Values>
                  </div>
                  <div style={{ width: 100 }}>
                    <Values>
                      <Labels>
                        Built{" "}
                        <CloseIcon
                          fontSize="small"
                          style={{
                            color: "rgba(255,255,255,.3)",
                          }}
                        />
                      </Labels>
                    </Values>
                  </div>
                  <div style={{ width: 160 }}>
                    <Values>
                      <Labels>
                        Indian Ocean{" "}
                        <CloseIcon
                          fontSize="small"
                          style={{
                            color: "rgba(255,255,255,.3)",
                          }}
                        />
                      </Labels>
                    </Values>
                  </div>
                  <div style={{ width: 100 }}>
                    <Values>
                      <Labels>
                        Built{" "}
                        <CloseIcon
                          fontSize="small"
                          style={{
                            color: "rgba(255,255,255,.3)",
                          }}
                        />
                      </Labels>
                    </Values>
                  </div>
                  <div style={{ width: 100 }}>
                    <Values>
                      <Labels>
                        Daily{" "}
                        <CloseIcon
                          fontSize="small"
                          style={{
                            color: "rgba(255,255,255,.3)",
                          }}
                        />
                      </Labels>
                    </Values>
                  </div>
                  <div style={{ width: 160 }}>
                    <Values>
                      <Labels>
                        Indian Ocean{" "}
                        <CloseIcon
                          fontSize="small"
                          style={{
                            color: "rgba(255,255,255,.3)",
                          }}
                        />
                      </Labels>
                    </Values>
                  </div>
                  <div style={{ width: 120 }}>
                    <Values>
                      <Labels>
                        Refit{" "}
                        <CloseIcon
                          fontSize="small"
                          style={{
                            color: "rgba(255,255,255,.3)",
                          }}
                        />
                      </Labels>
                    </Values>
                  </div>
                </Slider>
              </div>
              <div class="column3">
                <a href="/" style={{ color: "blue", padding: "30px 0px" }}>
                  Clear all
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Filter;
