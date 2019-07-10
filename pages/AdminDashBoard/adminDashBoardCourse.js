import React from 'react';
import Formm from '../../Component/form'
import Head from '../../Component/head.js';
import {  Col, 
          Button, 
          Form, 
          FormGroup, 
          Label, 
          Input, 
          FormText,
          Nav, 
          NavItem, 
          NavLink,
          Container,
          Row  } 
          from 'reactstrap';

export default function AdminDashBoardCourse () {
      return (
        <div style={{marginTop: '20px'}}>
        <Head title="Shop - Project Lab" />
        <Formm>
        <br/>
        <Container>
            <Row>
            <Col sm ="2">
            <div>
                    <h2>หมวดหมู่</h2>
                    <h4 style={{marginLeft:"10px"}}>Shop</h4>
                    <Nav vertical pills>
                        <NavItem>
                            <NavLink href="/AdminDashBoard/adminDashBoardShop" >เพิ่มสินค้า</NavLink>
                            <NavLink href="/AdminDashBoard/showItemShop"> แก้ไข/แสดงสินค้า </NavLink>
                        </NavItem>
                        <NavItem>
                        <hr />
                        <h4 style={{marginLeft:"10px"}}>Course</h4>
                            <NavLink href="/AdminDashBoard/adminDashBoardCourse" active >เพิ่ม Course</NavLink>
                            <NavLink href="/AdminDashBoard/showItemCourse">แก้ไข/แสดง Course</NavLink>

                        </NavItem>
                    </Nav>
                </div>
            </Col>
            <Col>

            <Form>
              <h1>Course</h1>
        <FormGroup row>
          
          <Label for="exampleName" sm={2}>Name</Label>
          <Col sm={10}>
            <Input type="text" name="email" id="exampleEmail" placeholder="Name" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleCategory" sm={2}>Category</Label>
          <Col sm={10}>
            <Input type="select" name="select" id="exampleCategory" >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </Input>

          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="exampleText" sm={2}>Text Area</Label>
          <Col sm={10}>
            <Input type="textarea" name="text" id="exampleText" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleFile" sm={2}>รูป</Label>
          <Col sm={10}>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
              This is some placeholder block-level help text for the above input.
              It's a bit lighter and easily wraps to a new line.
            </FormText>
          </Col>
        </FormGroup>
        <FormGroup tag="fieldset" row>
          <legend className="col-form-label col-sm-2">Radio Buttons</legend>
          <Col sm={10}>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio2" />{' '}
                Option one is this and that—be sure to include why it's great
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio2" />{' '}
                Option two can be something else and selecting it will deselect option one
              </Label>
            </FormGroup>
            <FormGroup check disabled>
              <Label check>
                <Input type="radio" name="radio2" disabled />{' '}
                Option three is disabled
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="checkbox2" sm={2}>Checkbox</Label>
          <Col sm={{ size: 10 }}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox2" />{' '}
                Check me out
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button color="dark" >Submit</Button>
          </Col>
        </FormGroup>
      </Form>
            </Col>
            </Row>
        </Container>
        </Formm>
        </div>
      );
  }