import "./_message.scss";
import { MdClose } from "react-icons/md";
import { useContext } from "react";
import { GlobalCtx } from "../../context/GlobalCtx";

function Message() {
  const { message, deleteMessage } = useContext(GlobalCtx);
  return (
    <div className="message" onClick={deleteMessage}>
      <p>
        {message}
        <MdClose />
      </p>
    </div>
  );
}

export default Message;
