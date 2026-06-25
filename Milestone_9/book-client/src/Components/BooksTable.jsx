import { Table } from "@heroui/react";

const BooksTable = ({ books }) => {
    return (
        <div>
            <Table>
                <Table.ScrollContainer>
                    <Table.Content aria-label="Team members" className="min-w-150">
                        <Table.Header>
                            <Table.Column isRowHeader>Book Name</Table.Column>
                            <Table.Column>Author</Table.Column>
                            <Table.Column>Year</Table.Column>
                            <Table.Column>Genre</Table.Column>
                        </Table.Header>
                        <Table.Body>
                            {
                                books.map(book => <Table.Row key={book._id}>
                                    <Table.Cell>{book.title}</Table.Cell>
                                    <Table.Cell>{book.author}</Table.Cell>
                                    <Table.Cell>{book.year}</Table.Cell>
                                    <Table.Cell>{book.genre}</Table.Cell>
                                </Table.Row>)
                            }
                        </Table.Body>
                    </Table.Content>
                </Table.ScrollContainer>
            </Table>
        </div>
    )
};

export default BooksTable;