
import React, { useState } from 'react';
import {
    Button, Row, Col, Jumbotron, Container, Card, CardGroup, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Table, Dropdown, DropdownItem, DropdownMenu, DropdownToggle
} from 'reactstrap';

const JobDetail = () => {



    return (

        <>
            <Container className="jobDetailPanBG" fluid="xl">
                <Row>
                    <Col>
                        <Card body>
                            <CardTitle tag="h5">
                                Job 1
                            </CardTitle>
                            <CardText className='jobDetailPan'>
                                Job Description One.
                            </CardText>
                            <Button color='warning' className='styleApplyBttn'>
                                Apply
                            </Button>
                        </Card>
                    </Col>

                </Row>

            </Container>
        </>

    );

};

export default JobDetail;