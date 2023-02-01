
import React, { useState } from 'react';

import {
    Button, Jumbotron, Container, Card, CardGroup, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Table, Dropdown, Row, Col, DropdownItem, DropdownMenu, DropdownToggle
} from 'reactstrap';

const Jobs = () => {



    return (

        <>

            <Container className="backgroundStyle">

                <Row>
                    {/* <Col xs={8} md={6} sm={12} lg={4} > */}
                    <Col>
                        <CardGroup className='cardGroupStyles'>
                            <Col xs={12} sm={8} lg={2}>
                                <Card className='cardStyles'>
                                    <CardImg
                                        alt="Card image cap"
                                        src="https://picsum.photos/318/180"
                                        top
                                        width="100%"
                                    />
                                    <CardBody>
                                        <CardTitle tag="h5">
                                            Job 1
                                        </CardTitle>
                                        <CardSubtitle
                                            className="mb-2 text-muted"
                                            tag="h6"
                                        >
                                            Card subtitle
                                        </CardSubtitle>
                                        <CardText>
                                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                        </CardText>
                                        <Button>
                                            Button
                                        </Button>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col xs={12} sm={8} lg={2}>

                                <Card className='cardStyles'>
                                    <CardImg
                                        alt="Card image cap"
                                        src="https://picsum.photos/318/180"
                                        top
                                        width="100%"
                                    />
                                    <CardBody>
                                        <CardTitle tag="h5">
                                            Card title
                                        </CardTitle>
                                        <CardSubtitle
                                            className="mb-2 text-muted"
                                            tag="h6"
                                        >
                                            Card subtitle
                                        </CardSubtitle>
                                        <CardText>
                                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                        </CardText>
                                        <Button>
                                            Button
                                        </Button>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col xs={12} sm={8} lg={2}>

                                <Card className='cardStyles'>
                                    <CardImg
                                        alt="Card image cap"
                                        src="https://picsum.photos/318/180"
                                        top
                                        width="100%"
                                    />
                                    <CardBody>
                                        <CardTitle tag="h5">
                                            Card title
                                        </CardTitle>
                                        <CardSubtitle
                                            className="mb-2 text-muted"
                                            tag="h6"
                                        >
                                            Card subtitle
                                        </CardSubtitle>
                                        <CardText>
                                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                        </CardText>
                                        <Button>
                                            Button
                                        </Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xs={12} sm={8} lg={2}>

                                <Card className='cardStyles'>
                                    <CardImg
                                        alt="Card image cap"
                                        src="https://picsum.photos/318/180"
                                        top
                                        width="100%"
                                    />
                                    <CardBody>
                                        <CardTitle tag="h5">
                                            Card title
                                        </CardTitle>
                                        <CardSubtitle
                                            className="mb-2 text-muted"
                                            tag="h6"
                                        >
                                            Card subtitle
                                        </CardSubtitle>
                                        <CardText>
                                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                        </CardText>
                                        <Button>
                                            Button
                                        </Button>
                                    </CardBody>
                                </Card>
                            </Col>

                        </CardGroup>
                    </Col>
                </Row>

            </Container>

        </>

    );

};

export default Jobs;