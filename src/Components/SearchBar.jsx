import React from 'react';
import { Form , FormGroup , Label, Input} from 'reactstrap';


export default  SearchBar() {
  return (
    <Form>
    <FormGroup>
      <Label for="exampleEmail">
        Email
      </Label>
      <Input
        id="exampleEmail"
        name="email"
        placeholder="with a placeholder"
        type="email"
      />
    </FormGroup>
    </Form>
  )
}
