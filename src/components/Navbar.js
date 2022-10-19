import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Container = styled.div`
  padding: 10px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
 
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid rgba(128, 128, 128, 0.3);
  padding: 10px 0px;
`;

export const MenuItem = styled.a`
  font: normal normal normal 13px/24px Quicksand;
  letter-spacing: 0.65px;
  color: #000000;
  opacity: 1;
  cursor: pointer;
`;

export const InitialLabel = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font: normal normal normal 13px/24px Quicksand;
  letter-spacing: 0.65px;
  color: #000000;
  opacity: 1;
  width: 30px;
  background: #ffffff00 0% 0% no-repeat padding-box;
  border: 0.800000011920929px solid #e4e4e4;
  border-radius: 18px;
  margin-right: 10px;
`;

export const Counter = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font: normal normal normal 13px/24px Quicksand;
  letter-spacing: 0.65px;
  color: white;
  opacity: 1;
  width: 20px;
  height: 20px;
  background: #de751b 0% 0% no-repeat padding-box;
  border: 0.800000011920929px solid #e4e4e4;
  border-radius: 18px;
  margin-right: 10px;
  cursor: pointer;

`;

export const InquiryList = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font: normal normal normal 14px/24px Quicksand;
  letter-spacing: 0.7px;
  color: #000000;
  opacity: 1;
  width: auto;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #e4e4e4;
  padding: 0 10px;
  border-radius: 16px;
  margin-right: 20px;
  cursor: pointer;
`;

const Logo = styled.img``;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  padding: 10px 0px;
`;

const MenuDropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: white;
  min-width: 160px;
  box-shadow: 3px 6px 14px #00000019;
  padding: 15px 20px;
  z-index: 2;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  margin: 230px 0 0 100px;
`;

const MenuDropdown = styled.div`
  width: 250px;
  flex: 1;
  align-items: center;
  justify-content: center;
  position: relative;
  display: flex;

  cursor: pointer;
  &:hover ${MenuDropdownContent} {
    display: block;
  }
`;

const YachtDropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: white;
  min-width: 230px;
  box-shadow: 3px 6px 14px #00000019;
  padding: 12px 16px;
  z-index: 2;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
`;

const DropDownLabel = styled.a`
  flex-direction: column;
  text-align: left;
  font: normal normal normal 14px/24px Quicksand;
  letter-spacing: 0.7px;
  color: #000000;
  opacity: 1;
`;

const YachtDropdown = styled.div`
  width: 130px;
  flex: 1;
  display: flex;
  position: relative;
  display: inline-block;
  &:hover ${YachtDropdownContent} {
    display: block;
  }
`;

const FirstSeparator = styled.span`
  padding: 0 20px;
  color: rgba(128, 128, 128, 0.3);
`;

const SecondSeparator = styled.span`
  padding: 0 20px;
  color: rgba(128, 128, 128, 0.3);
`;

const UserDropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: white;
  min-width: 160px;
  box-shadow: 3px 6px 14px #00000019;
  padding: 12px 16px;
  z-index: 2;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  right: 0;
  margin: 230px 0px 0 0;
`;

const UserDropDownLabel = styled.p`
  text-align: left;
  font: normal normal normal 14px/24px Quicksand;
  letter-spacing: 0.7px;
  color: #000000;
  opacity: 1;
  padding: 5px 0;
`;

const UserDropdown = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  position: relative;
  &:hover ${UserDropdownContent} {
    display: block;
  }
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1666091146/Baroque/Mask_Group_9_jedrsf.png" />
          <MenuDropdown>
            <FirstSeparator>|</FirstSeparator>
            <MenuIcon style={{ color: "#6e6868" }} />
            <MenuItem>Menu</MenuItem>
            <SecondSeparator>|</SecondSeparator>
            <MenuDropdownContent>
              <ul
                style={{
                  listStyle: "none",
                  padding: "0px",
                  lineHeight: "35px",
                }}
              >
                <li>
                  <DropDownLabel
                    style={{
                      borderBottom: "1px solid rgba(128, 128, 128, 0.3)",
                    }}
                  >
                    Home
                  </DropDownLabel>
                  <li>
                    <DropDownLabel>About Us</DropDownLabel>
                  </li>
                  <li>
                    <DropDownLabel>Why Baroque Yachts</DropDownLabel>
                  </li>
                  <li>
                    <DropDownLabel>Contact</DropDownLabel>
                  </li>
                  <li>
                    <DropDownLabel>Legal Notice</DropDownLabel>
                  </li>
                </li>
              </ul>
            </MenuDropdownContent>
          </MenuDropdown>

          <YachtDropdown>
            <MenuItem>Yacht Charter</MenuItem>
            <YachtDropdownContent>
              <ul
                style={{
                  listStyle: "none",
                  padding: "0px",
                  lineHeight: "35px",
                }}
              >
                <li>
                  <DropDownLabel
                    style={{
                      borderBottom: "1px solid rgba(128, 128, 128, 0.3)",
                    }}
                  >
                    Day Charter Yachts
                  </DropDownLabel>
                </li>
                <li>
                  <DropDownLabel>Weekly Charter Yachts</DropDownLabel>
                  <li>
                    <DropDownLabel>Regions & Destinations</DropDownLabel>
                  </li>
                  <li>
                    <DropDownLabel>Featured Itineraries</DropDownLabel>
                  </li>
                  <li>
                    <DropDownLabel>Type of charter</DropDownLabel>
                  </li>
                  <li>
                    <DropDownLabel>Corporate Charter</DropDownLabel>
                  </li>
                  <li>
                    <DropDownLabel>Private Event and Experience</DropDownLabel>
                  </li>
                  <li>
                    <DropDownLabel>Global Event Calender</DropDownLabel>
                  </li>
                </li>
              </ul>
            </YachtDropdownContent>
          </YachtDropdown>

          <YachtDropdown>
            <MenuItem>Yacht for Sale</MenuItem>
            <YachtDropdownContent>
              <ul
                style={{
                  listStyle: "none",
                  padding: "0px",
                  lineHeight: "35px",
                }}
              >
                <li>
                  <DropDownLabel
                    style={{
                      borderBottom: "1px solid rgba(128, 128, 128, 0.3)",
                    }}
                  >
                    Yacht for Sale
                  </DropDownLabel>
                </li>
                <li>
                  <DropDownLabel>Purchasing a Yacht</DropDownLabel>
                </li>
              </ul>
            </YachtDropdownContent>
          </YachtDropdown>

          <YachtDropdown>
            <MenuItem>Yacht Management</MenuItem>
            <YachtDropdownContent>
              <ul
                style={{
                  listStyle: "none",
                  padding: "0px",
                  lineHeight: "35px",
                }}
              >
                <li>
                  <DropDownLabel
                    style={{
                      borderBottom: "1px solid rgba(128, 128, 128, 0.3)",
                    }}
                  >
                    Management and maintenance
                  </DropDownLabel>
                </li>
                <li>
                  <DropDownLabel>Charter management</DropDownLabel>
                </li>
                <li>
                  <DropDownLabel>Yacht building</DropDownLabel>
                </li>
                <li>
                  <DropDownLabel>Refit and restoration</DropDownLabel>
                </li>
              </ul>
            </YachtDropdownContent>
          </YachtDropdown>
        </Left>
        <Right>
          <InquiryList>
            <Counter>3</Counter> Inquiry List
          </InquiryList>{" "}
          <UserDropdown>
            <InitialLabel>Z</InitialLabel>{" "}
            <MenuItem>Mr. Zardron Angelo</MenuItem>{" "}
            <KeyboardArrowDownIcon
              style={{ color: "#6e6868", paddingLeft: "20px" }}
            />
            <UserDropdownContent>
              <ul
                style={{
                  listStyle: "none",
                  padding: "0px",
                  lineHeight: "35px",
                }}
              >
                <li>
                  <DropDownLabel
                    style={{
                      borderBottom: "1px solid rgba(128, 128, 128, 0.3)",
                    }}
                  >
                    Trips
                  </DropDownLabel>
                </li>
                <li>
                  <UserDropDownLabel>Wishlist</UserDropDownLabel>
                </li>
                <li>
                  <UserDropDownLabel>Charter requests</UserDropDownLabel>
                </li>
                <li>
                  <UserDropDownLabel>Account</UserDropDownLabel>
                </li>
                <li>
                  <UserDropDownLabel>Logout</UserDropDownLabel>
                </li>
              </ul>
            </UserDropdownContent>
          </UserDropdown>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
