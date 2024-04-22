import { Alert } from "react-bootstrap"
import '../description/Description.scss'

export const Description = ({descr, entered}) => {
const seen = {
    display: entered ? 'block' : 'none',
    position: 'absolute'            
}

    return (
        <Alert style={seen} className="Description" variant="light">
        {/* <Alert.Heading>Hey, nice to see you</Alert.Heading> */}
        <p>
          {descr}
        </p>
     
      </Alert>
    )
}