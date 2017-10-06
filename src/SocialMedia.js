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
    const shareUrl = 'http://abcs.digital.mass.gov';
    const title = 'The ABCs: Predicting success in high school and beyond';
    const size = 30;
    return (
            <div className="social-media">
              <div className="Demo__container">
                     <div className="Demo__some-network">
                       <FacebookShareButton
                         url={shareUrl}
                         quote={title}
                         className="Demo__some-network__share-button">
                         <FacebookIcon
                           size={size}
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
                           size={size}
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
                           size={size}
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
                           size={size}
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
                         body={shareUrl}
                         className="Demo__some-network__share-button">
                         <EmailIcon
                           size={size}
                           round />
                       </EmailShareButton>
                     </div>
                   </div>
            </div>
    );
  };
}

export default SocialMedia
