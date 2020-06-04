import React, { Component, useState } from 'react';
import Tabletop from 'tabletop';

import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';


const ExampleToast: React.FunctionComponent = ({ obj }) => {
    const [show, toggleShow] = useState(false);

    return (
        <>
            {!show && <Button onClick={() => toggleShow(true)}>{obj.Region}</Button>}
            <Toast show={show} onClose={() => toggleShow(false)}>
                <Toast.Header>
                    <strong className="mr-auto">{obj.Case_name}</strong>
                </Toast.Header>
                <Toast.Body></Toast.Body>
            </Toast>
        </>
    );
};


class Sheet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        Tabletop.init({
            key: '1X5olv3dRhB3JmiKywrXetygVyYf0PBBxu6X9Tz6O91c',
            simpleSheet: true
        }
        ).then(googleData => {
            this.setState({ data: googleData });
        });
    }

    render() {
        const { data } = this.state
        return (
            <div className="Sheet" >
                <div id="details">
                    {
                        data.map(obj => {
                            return (
                                <div className='m-3' key={obj.Time_cod}>
                                    <ExampleToast obj={obj}></ExampleToast>
                                </div>
                            )
                        })
                    }
                </div>
            </div >
        );
    }
}

export default Sheet;