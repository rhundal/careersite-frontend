
import React, { useState, useContext } from 'react';
// import { ThemeContext } from '../context/GlobalState';
import { useSelector } from 'react-redux';
import { selectAllData } from "../features/jobsSlice";
import { ThemeContext } from '../App';

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

    const jobs = useSelector(selectAllData);

    const { selectedCategory, selectedState, selectedNumJobs } = useContext(ThemeContext);


    console.log("selectedCategory from jobs " + selectedCategory);

    console.log("selectedState from jobs " + selectedState);

    console.log("selectedNumJobs from jobs " + selectedNumJobs);

    let count = 0;

    return (

        <>

            <Container className="backgroundStyle">

                <Row>
                    {/* <Col xs={8} md={6} sm={12} lg={4} > */}

                    {/* { for(let i = 0; i < selectedNumJobs; i++) { */}
                    {

                        // jobs.forEach((elem) => {
                        // const myArray = [1,2,3,4];
                        // myArray.map((el)=> {if(el % 2 === 1) { return el;}});
                        // newArray = [1, undefined, 3, undefined];

                        jobs.filter((elem) => {
                            if (elem.category === selectedCategory && elem.state === selectedState && count < selectedNumJobs) {

                                count += 1;
                                return true;
                            }

                        }).map((elem) => {
                            return (
                                <Col>
                                    < CardGroup className='cardGroupStyles'>
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
                                                        {elem.title}
                                                    </CardTitle>
                                                    <CardSubtitle
                                                        className="mb-2 text-muted"
                                                        tag="h6"
                                                    >
                                                        {elem.subtitle}
                                                    </CardSubtitle>
                                                    <CardText>
                                                        {elem.description}
                                                    </CardText>
                                                    <Button>
                                                        Button
                                                    </Button>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </CardGroup>

                                </Col>
                            );
                        })
                    }

                </Row>

            </Container>

        </>

    );

};

export default Jobs;

