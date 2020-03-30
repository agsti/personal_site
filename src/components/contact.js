import React, { useState } from 'react';
import posed, { PoseGroup } from 'react-pose';
import { MdContentCopy } from "react-icons/md";
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default ({ isShown, emailAddress, twitter }) => {
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

    const [emailText, setEmailText] = useState('email')

    const copyCallback = ()=> {
        setEmailText('copied!');
        setInterval(()=> setEmailText('email'), 1000);
    }

    return (
        <PoseGroup>
            {isShown && <Modal key="contact">
                <h1 className="contact-container">
                    You can shoot me an {` `}
                    <CopyToClipboard text={emailAddress}
                        onCopy={copyCallback}>
                            <span>
                        <a className='mail' href="#">
                            {emailText}
                        </a>
                        <MdContentCopy class="cb-icon" />
                        </span>
                    </CopyToClipboard>
                    <br /> or contact me on {` `}
                    <a className="twitter" href={`https://twitter.com/${twitter}`}>
                        twitter
        </a>
                </h1>
            </Modal>
            }
        </PoseGroup>
    )
}