import { Component } from 'react';
import ReactDOM from 'react-dom';

class SpotifyAuthWindow extends Component {
    public externalWindow: Window | null;
    public containerEl: HTMLDivElement;
    public SCOPE_LIST = 'streaming user-read-playback-state user-read-currently-playing user-top-read';

    constructor(props: any) {
        super(props);
        this.containerEl = document.createElement('div');
        this.externalWindow = null;
    }
    componentDidMount(): void {
        this.externalWindow = window.open(
            'https://accounts.spotify.com/authorize?' +
                'client_id=fed33893bfbd4125a17b877b04fa711c' +
                '&response_type=token' +
                '&redirect_uri=http://localhost:3000/' +
                '&show_dialog=true' +
                '&scope=' +
                this.SCOPE_LIST,
            '',
            'width=600, height=500',
        );
    }
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    render() {
        return ReactDOM.createPortal(this.props.children, this.containerEl);
    }
}
export default SpotifyAuthWindow;
