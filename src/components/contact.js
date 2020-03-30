import React from 'react';
import posed, {PoseGroup} from 'react-pose';

export default ({isShown, emailAddress, twitter}) => {
    const Modal = posed.div({
        enter: {
          y: 0,
          opacity: 1,
          delay: 300,
          transition: {
            y: { type: 'spring', stiffness: 1000, damping: 15 },
            default: { duration: 300 }
          }
        },
        exit: {
          y: 50,
          opacity: 0,
          transition: { duration: 150 }
        }
      });
      
    return (
    <PoseGroup>
    { isShown && <Modal key="contact">
    <h1 className="contact-container">
        You can shoot me an {` `}
        <a href={`mailto:${emailAddress}`}>
        email
        </a> or contact me on {` `}
        <a href={`https://twitter.com/${twitter}`}>
        twitter
        </a>
    </h1>
    </Modal>
    }
    </PoseGroup>
    )
}