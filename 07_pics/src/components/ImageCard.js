import React from "react";

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
        this.state = {span: 0};
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpan);
    }

    setSpan = () => {
        let height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10) + 1;
        this.setState({span: spans});
    };

    render() {
        const {description, urls} = this.props.image;

        return (
            <div style={{gridRowEnd: `span ${this.state.span}`}}>
                <img ref={this.imageRef} alt={description} src={urls.regular}/>
            </div>
        );
    }
}

export default ImageCard;
