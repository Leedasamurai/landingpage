import React from "react";
import { animateScroll as scroll } from "react-scroll"; // Import scroll function from react-scroll
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"; // Import social media icons from react-icons/fa
import {
  FooterContainer,
  FooterWrap,
  FooterLinkContainer,
  FooterLinkWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocicalIcons,
  SocialIconLink,
} from "./FooterElements"; // Import styled components from FooterElements

// Define the Footer component
function Footer() {
  // Function to scroll to the top of the page
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    // Container for the entire footer
    <FooterContainer>
      <FooterWrap>
        {/* Container for the footer links */}
        <FooterLinkContainer>
          <FooterLinkWrapper>
            {/* First column of footer links */}
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink>
            </FooterLinkItems>
            {/* Second column of footer links */}
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/signin">Contact</FooterLink>
              <FooterLink to="/signin">Support</FooterLink>
              <FooterLink to="/signin">Address</FooterLink>
              <FooterLink to="/signin">Sponsorship</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
          <FooterLinkWrapper>
            {/* Third column of footer links */}
            <FooterLinkItems>
              <FooterLinkTitle>Looking for work</FooterLinkTitle>
              <FooterLink to="/signin">Submit C.V</FooterLink>
              <FooterLink to="/signin">Ambassadors</FooterLink>
              <FooterLink to="/signin">Agency</FooterLink>
              <FooterLink to="/signin">Influencer</FooterLink>
            </FooterLinkItems>
            {/* Fourth column of footer links */}
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/signin">Instagram</FooterLink>
              <FooterLink to="/signin">Facebook</FooterLink>
              <FooterLink to="/signin">Twitter</FooterLink>
              <FooterLink to="/signin">YouTube</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinkContainer>
        {/* Social media section */}
        <SocialMedia>
          <SocialMediaWrap>
            {/* Logo with a click handler to scroll to top */}
            <SocialLogo to="/" onClick={toggleHome}>
              ToDo.
            </SocialLogo>
            {/* Rights text */}
            <WebsiteRights>
              todo © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            {/* Container for social media icons */}
            <SocicalIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocicalIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer; // Export the Footer component
