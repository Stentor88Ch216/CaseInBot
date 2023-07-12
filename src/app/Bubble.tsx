import { ChatCompletionRequestMessage } from "openai";

const robotAvatarUrl = "https://cdn.shopify.com/s/files/1/1061/1924/products/Robot_Emoji_Icon_abe1111a-1293-4668-bdf9-9ceb05cff58e_1024x1024.png?v=1571606090";
const userAvatarUrl = "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/monkey-face.png";

interface BubbleProps {
    message: ChatCompletionRequestMessage;
    index: number;
}

export default function Bubble(props: BubbleProps){
    return (
        <div className={"bubble-and-avatar "+props.message.role}>
            <img className="avatar" src={props.message.role == "user" ? userAvatarUrl : robotAvatarUrl}/>
            <div className="bubble" id={props.message.role} key={props.index.toString()+props.message.content[0]}>
                <p className="message-text">{props.message.content}</p>
            </div>
        </div>
        
    );
}