import styled from "styled-components";
import { Link } from "react-router-dom";

// Container for the entire footer section
export const FooterContainer = styled.footer`
  background-color: #101522; // Dark background color
`;

// Wrapper for the footer content to center it and apply padding
export const FooterWrap = styled.div`
  padding: 48px 24px; // Padding around the content
  display: flex; // Flexbox for layout
  flex-direction: column; // Column layout
  justify-content: center; // Center content vertically
  align-items: center; // Center content horizontally
  max-width: 1100px; // Maximum width of the wrapper
  margin: 0 auto; // Center the wrapper horizontally
`;

// Container for the footer links, aligned in the center
export const FooterLinkContainer = styled.div`
  display: flex; // Flexbox for layout
  justify-content: center; // Center content horizontally

  @media screen and (max-width: 820px) {
    padding-top: 32px; // Add padding on top for smaller screens
  }
`;

// Wrapper for grouping footer link items
export const FooterLinkWrapper = styled.div`
  display: flex; // Flexbox for layout

  @media screen and (max-width: 820px) {
    flex-direction: column; // Stack items vertically on smaller screens
  }
`;

// Container for individual groups of footer links
export const FooterLinkItems = styled.div`
  display: flex; // Flexbox for layout
  flex-direction: column; // Column layout
  align-items: flex-start; // Align items to the start (left)
  margin: 16px; // Margin around each group
  text-align: left; // Left-align text
  width: 160px; // Fixed width for each group
  box-sizing: border-box; // Include padding and border in the element's total width and height
  color: #fff; // White text color

  @media screen and (max-width: 420px) {
    margin: 0; // Remove margin on smaller screens
    padding: 10px; // Add padding around the group
    width: 100%; // Full width on smaller screens
  }
`;

// Title for each group of footer links
export const FooterLinkTitle = styled.div`
  font-size: 14px; // Font size
  margin-bottom: 16px; // Space below the title
`;

// Individual footer link
export const FooterLink = styled.div`
  color: #fff; // White text color
  text-decoration: none; // Remove underline
  margin-bottom: 0.5rem; // Space below each link
  font-size: 14px; // Font size

  &:hover {
    color: #01bf71; // Change color on hover
    transition: 0.3s ease-out; // Smooth transition effect
  }
`;

// Container for the social media section
export const SocialMedia = styled.section`
  max-width: 1000px; // Maximum width
  width: 100%; // Full width
`;

// Wrapper for the social media content to center it and apply flexbox layout
export const SocialMediaWrap = styled.div`
  display: flex; // Flexbox for layout
  justify-content: space-between; // Space out items evenly
  align-items: center; // Center items vertically
  max-width: 1100px; // Maximum width of the wrapper
  margin: 40px; // Margin around the wrapper

  @media screen and (max-width: 820px) {
    flex-direction: column; // Stack items vertically on smaller screens
  }
`;

// Styled link component for the social logo
export const SocialLogo = styled(Link)`
  color: #fff; // White text color
  justify-self: start; // Align to start of the container
  cursor: pointer; // Pointer cursor on hover
  text-decoration: none; // Remove underline
  font-size: 1.5rem; // Font size
  display: flex; // Flexbox for layout
  align-items: center; // Center items vertically
  margin-bottom: 16px; // Space below the logo
  font-weight: bold; // Bold font
`;

// Text for website rights
export const WebsiteRights = styled.small`
  color: #fff; // White text color
  margin-bottom: 16px; // Space below the text
`;

// Container for the social icons
export const SocicalIcons = styled.div`
  display: flex; // Flexbox for layout
  justify-content: space-between; // Space out icons evenly
  align-items: center; // Center icons vertically
  width: 240px; // Fixed width for the container
`;

// Styled link component for individual social media icons
export const SocialIconLink = styled.a`
  color: #fff; // White icon color
  font-size: 24px; // Icon size
`;
