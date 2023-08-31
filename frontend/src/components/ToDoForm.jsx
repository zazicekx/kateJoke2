import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function ToDoForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>ToDo</Form.Label>
        <Form.Control type="text" placeholder="What is on your mind" />
        <Form.Text className="text-muted">
          and Don t be shy kate
        </Form.Text>
      </Form.Group>
      <Form.Select aria-label="Default select example">
        <option>What kind of ToDo ?</option>
        <option value="1">SeX</option>
        <option value="2">Idea</option>
        <option value="3">Experience</option>
      </Form.Select>
          <Button variant="primary" type="submit" style={{ marginTop: '20px' }}>
              Submit
          </Button>
    </Form>
  );
}

export default ToDoForm;