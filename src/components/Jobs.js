
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
                    <Col xs={8} md={6} sm={12} lg={4} >
                        <CardGroup className='cardGroupStyles'>

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
                            <Col xs={8} md={6} sm={12}>

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
                            {/* <Col xs={10} sm={10} md={9} lg={5}>
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
                            <Col xs={10} sm={10} md={9} lg={5}>

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
                            </Col> */}
                        </CardGroup>
                    </Col>
                </Row>

            </Container>

        </>

    );

};

export default Jobs;