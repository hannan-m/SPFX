import * as React from "react";

import {useBoolean, useId} from "@fluentui/react-hooks";
import {FontWeights, getTheme, IconButton, IIconProps, IStackProps, mergeStyleSets, Modal,} from "@fluentui/react";
import {IButtonStyles} from "@fluentui/react/lib/Button";



export const MYModal = (myprops, link) => {
    const [isModalOpen, {setTrue: showModal, setFalse: hideModal}] =
        useBoolean(false);
    const [isPopup, setisPopup] = React.useState(true);
    const titleId = useId("title");
    React.useEffect(() => {
        showModal();
    }, [isPopup]);

    function ExitHandler() {
        hideModal();
        setisPopup((current) => !current);
        myprops.handler();
        console.log(link);
        console.log(myprops);
    }

    return (


        <div>
            <Modal
                titleAriaId={titleId}
                isOpen={isModalOpen}
                onDismiss={ExitHandler}
                isBlocking={true}
                containerClassName="col-12 ratio ratio-16x9 text-center mt-2 mb-2"
            >
                <div className={contentStyles.header}>
                    <span id={titleId}>Modal Popup</span>
                    <IconButton
                        styles={iconButtonStyles}
                        iconProps={cancelIcon}
                        ariaLabel="Close popup modal"
                        onClick={ExitHandler}
                    />
                </div>
                <div className={contentStyles.body}>
                    <p>Test</p>
                    {/*<input type="button"  className="btn btn-primary">Test Bootstrap</input>*/}
                    <div className="col-12">
                        <div className="ratio ratio-16x9 text-center mt-2 mb-2 ">
                            <iframe
                                className="embed-responsive-item"
                                src="https://www.mural.co/"
                            />
                        </div>
                    </div>
                </div>
            </Modal>

        </div>


        // <div className="ratio ratio-16x9 text-center mt-2 mb-2 ">
        //     <iframe
        //         className="embed-responsive-item"
        //         src="https://www.mural.co/"
        //     />
        // </div>
        // <Modal show={show} fullscreen="true"  onHide={() => setShow(false)}>
        //     <Modal.Header closeButton>
        //         <Modal.Title>Modal</Modal.Title>
        //     </Modal.Header>
        //     <Modal.Body>
        //         <div className="ratio ratio-16x9 text-center mt-2 mb-2 ">
        //             <iframe
        //                 className="embed-responsive-item"
        //                 src={link}
        //             />
        //         </div>
        //     </Modal.Body>
        // </Modal>
    );
};

const cancelIcon: IIconProps = {iconName: "Cancel"};

const theme = getTheme();
const contentStyles = mergeStyleSets({
    container: {
        display: "flex",
        flexFlow: "column nowrap",
        alignItems: "stretch",
    },
    header: [
        // eslint-disable-next-line deprecation/deprecation
        theme.fonts.xLarge,
        {
            flex: "1 1 auto",
            borderTop: "4px solid ${theme.palette.themePrimary}",
            color: theme.palette.neutralPrimary,
            display: "flex",
            alignItems: "center",
            fontWeight: FontWeights.semibold,
            padding: "12px 12px 14px 24px",
        },
    ],
    body: {
        flex: "4 4 auto",
        padding: "0 24px 24px 24px",
        overflowY: "hidden",
        selectors: {
            p: {margin: "14px 0"},
            "p:first-child": {marginTop: 0},
            "p:last-child": {marginBottom: 0},
        },
    },
});
const stackProps: Partial<IStackProps> = {
    horizontal: true,
    tokens: {childrenGap: 40},
    styles: {root: {marginBottom: 20}},
};
const iconButtonStyles: Partial<IButtonStyles> = {
    root: {
        color: theme.palette.neutralPrimary,
        marginLeft: "auto",
        marginTop: "4px",
        marginRight: "2px",
    },
    rootHovered: {
        color: theme.palette.neutralDark,
    },
};
