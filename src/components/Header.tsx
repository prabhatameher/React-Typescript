import React from 'react'
import { Navbar, Container } from 'react-bootstrap'

type Props = {}

const Header = (props: Props) => {
    return (
        <>
            <Navbar fixed='top' bg='dark' variant='dark' >
                <Container>
                    <Navbar.Brand>
                        Hi  this js js
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default Header