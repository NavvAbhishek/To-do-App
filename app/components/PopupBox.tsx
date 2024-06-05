import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const PopupBox = () => {
    return (
        <div>
            <Popup open={true} onClose={() => {}}>
                <div>GeeksforGeeks</div>
                <button>Click here</button>
            </Popup>
        </div>
    );
}

export default PopupBox;