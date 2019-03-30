import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Fade, Container, Row, Col, Input } from 'reactstrap';
import "../Styles/AlignCenter.css"

export default class NumbersOfPlayers extends React.Component {
    constructor(props: String) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                <Fade tag="h5" className="mt-3" timeout={1000}>
                    <Row>

                        <Col xl={{ size: 6, offset: 3}}>
                            <p>
                                Сколько игроков?
                            </p>
                        </Col>

                    </Row>
                    <Row>
                        <Col sm={{ size: 2, offset: 1}}>
                        <Input
                            type="number"
                            name="number"
                            id="countOfPlayers"
                            placeholder="Введи число"
                            min="1"
                        />
                        </Col>
                    </Row>
                </Fade>
            </div>

        );
    }
}