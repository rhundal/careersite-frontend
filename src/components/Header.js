import Select from "react-select";
import { React, useState } from 'react';
import { useSelector } from 'react-redux';

import {
    Button, Jumbotron, Container, Card, CardBody, CardTitle, CardSubtitle, CardText, Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Table, Dropdown, Row, Col, ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle
} from 'reactstrap';

import { selectAllData } from "../features/jobsSlice";

const Header = () => {


    // jobs is an array of object

    const jobs = useSelector(selectAllData);


    let Category = [];
    let ListofStates = [];
    let NumJobs = [];

    for (let i = 0; i < jobs.length; i++) {

        for (const property in jobs[i]) {

            if (!Category.includes(jobs[i]['category'])) {

                Category.push(jobs[i]['category']);
            }
            break;
        }
    }

    Category.sort();

    for (let j = 0; j < jobs.length; j++) {

        for (const property in jobs[j]) {

            if (!ListofStates.includes(jobs[j]['state'])) {

                ListofStates.push(jobs[j]['state']);
            }
            break;
        }
    }

    ListofStates.sort();

    for (let k = 0; k < jobs.length; k++) {

        for (const property in jobs[k]) {

            if (!NumJobs.includes(jobs[k]['numJobs'])) {

                NumJobs.push(jobs[k]['numJobs']);
            }
            break;
        }
    }

    NumJobs.sort();

    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const toggle1 = () => setDropdownOpen1((prevState) => !prevState);

    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const toggle2 = () => setDropdownOpen2((prevState) => !prevState);

    const [dropdownOpen3, setDropdownOpen3] = useState(false);
    const toggle3 = () => setDropdownOpen3((prevState) => !prevState);


    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [stateList, setStateList] = useState([]);
    const [selectedNumJobs, setSelectedNumJobs] = useState('');
    const [numJobList, setNumJobList] = useState([]);

    // handle change event of the category dropdown

    const handleCategoryChange = (obj) => {
        setSelectedCategory(obj);
        setStateList(obj['state']);        // get from data
        setSelectedState(null);
    };


    // handle change event of the state dropdown

    const handleStateChange = (obj) => {


        setSelectedState(obj);
        setNumJobList(obj['numJobs']);
        setSelectedNumJobs(null);
        //  e.target.
        // setCategory(obj);
        // setStateList(obj.states);
        // setState(null);
    };

    // handle change event of the numJobs dropdown

    const handleNumJobsChange = (obj) => {

        setSelectedNumJobs(obj);

        // setCategory(obj);
        // setStateList(obj.states);
        // setState(null);
    };



    return (

        <>
            <Container fluid className='styleBackgroundHeader'>
                <Row>
                    <Col>
                        <h1 className="display-4"> Welcome To Careersite</h1>
                        <Navbar color="faded" light>
                            <NavbarBrand href="/" className="me-auto">
                                <h3>  Careersite </h3>
                            </NavbarBrand>
                            <NavbarToggler onClick={toggleNavbar} className="me-2" />
                            <Collapse isOpen={!collapsed} navbar>
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink href="/">Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/about">About</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/contact">Contact Us</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/jobs">
                                            Jobs
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>

                        <hr className="my-4" />
                    </Col>
                </Row>
                <Row>
                    <Col className='colDD'>
                        {/* onChange={handleCategoryChange} */}
                        <Dropdown isOpen={dropdownOpen1} toggle={toggle1} direction={'down'} onSelect={handleCategoryChange}>
                            <DropdownToggle caret> {selectedCategory === '' ? 'Job Categories' : selectedCategory} </DropdownToggle>
                            <DropdownMenu>

                                {Category.map((category, index) => (
                                    <DropdownItem key={index} onClick={() => setSelectedCategory(category)} selected>
                                        {category}
                                    </DropdownItem>

                                ))}

                            </DropdownMenu>

                        </Dropdown>


                    </Col>
                    <Col className='colDD' md={6}>

                        <Dropdown isOpen={dropdownOpen2} toggle={toggle2} direction={'down'} className="styleDD" onSelect={handleStateChange}>
                            <DropdownToggle caret>  {selectedCategory === '' ? 'Location By State' : selectedState} </DropdownToggle>
                            {/* {console.log(stateList)} */}
                            <DropdownMenu>

                                {ListofStates.map((selstate, index) => (
                                    <DropdownItem key={index} onClick={() => setSelectedState(selstate)} selected>
                                        {selstate}
                                    </DropdownItem>

                                ))}
                            </DropdownMenu>
                        </Dropdown>

                    </Col>
                    <Col className='colDD'>

                        <Dropdown isOpen={dropdownOpen3} toggle={toggle3} direction={'down'} onChange={handleNumJobsChange}>
                            <DropdownToggle caret>  {selectedState === '' ? 'Number of Jobs' : selectedNumJobs}  </DropdownToggle>
                            <DropdownMenu>

                                {NumJobs.map((numOfJobs, index) => (
                                    <DropdownItem key={index} onClick={() => setSelectedNumJobs(numOfJobs)} selected>
                                        {numOfJobs}
                                    </DropdownItem>

                                ))}
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                </Row>

            </Container>



        </>


    );


};

export default Header;

