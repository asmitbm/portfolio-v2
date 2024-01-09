export const EmailTemplate = ({ senderName, messageBody }) => (
    <div>
        <div>
            <h2>Welcome, {senderName}! 👋</h2>
        </div>

        <div>
            <div>
                <p>
                    Thank you for sending me a message. I will get back to you
                    as soon as I can 😄
                    <br />
                    <br />
                    <b>Your message:</b>
                    <br />
                    <br />
                    {messageBody}
                </p>
            </div>
            <div>
                <div>
                    <h3>Useful Links:</h3>
                </div>
                <div>
                    <ul>
                        <li>
                            <a
                                target="_blank"
                                href="https://drive.google.com/file/d/1widnWPHsEyAQaInQxYVlgVemt1bjdDwp/view?usp=sharing"
                            >
                                Resume
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://www.asmitbm.me/">
                                Portfolio Website
                            </a>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                href="https://www.behance.net/asmitbm"
                            >
                                Behance
                            </a>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                href="https://www.figma.com/@asmitbm"
                            >
                                Figma Resources
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://asmit.bio.link/">
                                Bio.link
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div>
            <div>
                <p>Have a good day! 😊</p>
                <p>Thanks & Regards</p>
                <p>Asmit Malakannawar</p>
            </div>
        </div>
    </div>
);
