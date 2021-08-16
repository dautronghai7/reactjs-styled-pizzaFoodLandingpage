import React from 'react'
import {
    FaFacebook,
    FaYoutube,
    FaInstagram,
    FaTwitter
}from 'react-icons/fa'
import {
    FooterContainer, 
    FooterWrap, 
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink
    } from './FooterElements'
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo>
                            Pizza
                        </SocialLogo>
                        <SocialIcons>
                            <SocialIconLink rel='noopener noreferrer' href="/" target="_blank" arial-lable='Facebook'>
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink rel='noopener noreferrer' href="https://www.facebook.com/groups/301703039922002/user/100004137095595/" target="_blank" arial-lable='Youtube'>
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" arial-lable='Instagram'>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" arial-lable='Twitter'>
                                <FaTwitter />
                            </SocialIconLink>

                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
