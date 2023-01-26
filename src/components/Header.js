
import React, { useState } from 'react';
import {
    Button, Jumbotron, Container, Card, CardBody, CardTitle, CardSubtitle, CardText, Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Table, Dropdown, DropdownItem, DropdownMenu, DropdownToggle
} from 'reactstrap';


const Header = (...args) => {


    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const toggle1 = () => setDropdownOpen1((prevState) => !prevState);


    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const toggle2 = () => setDropdownOpen2((prevState) => !prevState);


    const [dropdownOpen3, setDropdownOpen3] = useState(false);
    const toggle3 = () => setDropdownOpen3((prevState) => !prevState);

    return (

        <>
            <Container fluid className='styleBackgroundHeader'>
                <h1 class="display-4"> Welcome To Careersite</h1>
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

                <hr class="my-4" />

                <div>

                    <Table>
                        <tbody>
                            <tr>
                                <td>
                                    <Dropdown isOpen={dropdownOpen1} toggle={toggle1} direction={'down'}>
                                        <DropdownToggle caret>Job Categories</DropdownToggle>
                                        <DropdownMenu {...args}>
                                            <DropdownItem header>Header</DropdownItem>
                                            <DropdownItem>Some Action</DropdownItem>
                                            <DropdownItem text>Dropdown Item Text</DropdownItem>
                                            <DropdownItem disabled>Action (disabled)</DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem>Foo Action</DropdownItem>
                                            <DropdownItem>Bar Action</DropdownItem>
                                            <DropdownItem>Quo Action</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </td>
                                <td>
                                    <Dropdown isOpen={dropdownOpen2} toggle={toggle2} direction={'down'}>
                                        <DropdownToggle caret>Jobs for Category</DropdownToggle>
                                        <DropdownMenu {...args}>
                                            <DropdownItem header>Header</DropdownItem>
                                            <DropdownItem>Some Action</DropdownItem>
                                            <DropdownItem text>Dropdown Item Text</DropdownItem>
                                            <DropdownItem disabled>Action (disabled)</DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem>Foo Action</DropdownItem>
                                            <DropdownItem>Bar Action</DropdownItem>
                                            <DropdownItem>Quo Action</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </td>
                                <td>
                                    <Dropdown isOpen={dropdownOpen3} toggle={toggle3} direction={'down'}>
                                        <DropdownToggle caret>Number of Jobs To display</DropdownToggle>
                                        <DropdownMenu {...args}>
                                            <DropdownItem header>Header</DropdownItem>
                                            <DropdownItem>Some Action</DropdownItem>
                                            <DropdownItem text>Dropdown Item Text</DropdownItem>
                                            <DropdownItem disabled>Action (disabled)</DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem>Foo Action</DropdownItem>
                                            <DropdownItem>Bar Action</DropdownItem>
                                            <DropdownItem>Quo Action</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </td>
                            </tr>
                        </tbody>

                    </Table>


                </div>


            </Container>



        </>


    );


};

export default Header;

