import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types'

function NameTable({ data }) {
    const [search, setSearch] = useState('');

    const filteredData = data.filter((item) => {
        const lowerSearch = search.toLowerCase();
        return (
            lowerSearch === '' ||
            item.first_name.toLowerCase().includes(lowerSearch) ||
            item.last_name.toLowerCase().includes(lowerSearch) ||
            item.email.toLowerCase().includes(lowerSearch) ||
            item.id.toString().includes(lowerSearch)
        );
    });

    return (
        <div>
            <Container>
                <h1 className='text-center mt-4'>Contact Keeper</h1>
                <Form>
                    <InputGroup className='my-3'>
                        {/* onChange for search */}
                        <Form.Control
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder='Search contacts'
                        />
                    </InputGroup>
                </Form>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>IP Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.email}</td>
                                <td>{item.gender}</td>
                                <td>{item.ip_address}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
}


NameTable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        first_name: PropTypes.string.isRequired,
        last_name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired,
        ip_address: PropTypes.string.isRequired,
    })).isRequired,
};

export default NameTable;