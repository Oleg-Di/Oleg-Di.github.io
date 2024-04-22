import { Form } from "react-bootstrap"
import '../HeroFinder/HeroFinder.scss'
import { useState } from "react"


export const HeroFinder = ({findHero}) => {
const [value, setValue] = useState('')

const toggler = (e) => {
setValue( e.target.value)
findHero(value)
}
    return (
        <Form className="Form mb-3">
        <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Want to find special hero?{value}</Form.Label>
                <Form.Control onChange={(e) => toggler(e)} type="email" placeholder="Enter hero name" />
      </Form.Group>
        </Form>
    )
}