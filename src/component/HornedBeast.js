import React from 'react';
class HornedBeast extends React.Component {
    render() {
        return (
            <div>
                <div className="divcard" key={this.props.keyword}>
                    <img src={this.props.imageUrl} alt={`${this.props.description}`} title={this.props.title} />
                    <div >
                        <h2>{this.props.title}</h2>
                        <p> {this.props.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default HornedBeast;