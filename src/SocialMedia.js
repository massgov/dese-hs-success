import React from 'react'
import './SocialMedia.css'
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon,
} from 'react-share';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
} = ShareButtons;

const {
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  PinterestShareCount,
} = ShareCounts;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const EmailIcon = generateShareIcon('email');

class SocialMedia extends React.Component{
  render = () =>  {
    const shareUrl = 'http://dese-hs-datastory.digital.mass.gov.s3-website-us-east-1.amazonaws.com/';
    const title = 'The ABCs: Predicting success in high school and beyond';
    return (
            <div className="social-media">
              <div className="Demo__container">
                     <div className="Demo__some-network">
                       <FacebookShareButton
                         url={shareUrl}
                         quote={title}
                         className="Demo__some-network__share-button">
                         <FacebookIcon
                           size={32}
                           round />
                       </FacebookShareButton>

                       <FacebookShareCount
                         url={shareUrl}
                         className="Demo__some-network__share-count">
                         {count => count}
                       </FacebookShareCount>
                     </div>

                     <div className="Demo__some-network">
                       <TwitterShareButton
                         url={shareUrl}
                         title={title}
                         className="Demo__some-network__share-button">
                         <TwitterIcon
                           size={32}
                           round />
                       </TwitterShareButton>

                       <div className="Demo__some-network__share-count">
                         &nbsp;
                       </div>
                     </div>


                     <div className="Demo__some-network">
                       <GooglePlusShareButton
                         url={shareUrl}
                         className="Demo__some-network__share-button">
                         <GooglePlusIcon
                           size={32}
                           round />
                       </GooglePlusShareButton>

                       <GooglePlusShareCount
                         url={shareUrl}
                         className="Demo__some-network__share-count">
                         {count => count}
                       </GooglePlusShareCount>
                     </div>

                     <div className="Demo__some-network">
                       <LinkedinShareButton
                         url={shareUrl}
                         title={title}
                         windowWidth={750}
                         windowHeight={600}
                         className="Demo__some-network__share-button">
                         <LinkedinIcon
                           size={32}
                           round />
                       </LinkedinShareButton>

                       <LinkedinShareCount
                         url={shareUrl}
                         className="Demo__some-network__share-count">
                         {count => count}
                       </LinkedinShareCount>
                     </div>

                     <div className="Demo__some-network">
                       <EmailShareButton
                         url={shareUrl}
                         subject={title}
                         body="body"
                         className="Demo__some-network__share-button">
                         <EmailIcon
                           size={32}
                           round />
                       </EmailShareButton>
                     </div>
                   </div>
            </div>
    );
  };
}

export default SocialMedia
