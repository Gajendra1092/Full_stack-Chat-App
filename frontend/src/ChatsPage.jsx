import { PrettyChatWindow } from "react-chat-engine-pretty";
import PropTypes from 'prop-types';

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID}
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};

ChatsPage.propTypes = {
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
      secret: PropTypes.string.isRequired,
    }).isRequired,
  };

export default ChatsPage;