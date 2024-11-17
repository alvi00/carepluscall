import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
const Roompage = () => {
    const { roomId } = useParams();

    const myMeeting = async (element) => {
        const appId = 1718633526;
        const serverSecret = "1ba73e4b6df75fc6cca81033329b4bcf";
        const KitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appId, serverSecret, roomId, Date.now().toString(), "Your Name");
        const zc = ZegoUIKitPrebuilt.create(KitToken);
        zc.joinRoom({
            container: element,
            sharedLinks:[
                {
                    name:'Copy Link',
                    url:`https://carepluscall.vercel.app/room/Careplus`
                }
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton: true,
        });
    };

    return <div className="room">
        <div ref={myMeeting} />
    </div>;
    
};
export default Roompage;