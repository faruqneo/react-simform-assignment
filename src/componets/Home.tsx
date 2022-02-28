import React, { useState, useEffect } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import FromModal from "./FromModal";
import { useDispatch } from "react-redux";
import { Form as Element, Question } from "../models";
import { addQuestionRequest } from "../_redux/actions/formActions/formActions";
import { push } from "connected-react-router";
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
  const uniqueId: string = uuidv4();
  const [modal, setModal] = useState(false);
  const [fromName, setFromName] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const dispatch = useDispatch();

const handleClose = () => setModal(!modal);
const submitFrom = (data: Question) => {
  const obj: Element = {
    id: uniqueId,
    name: fromName,
    createAt: Date.now(),
    questions: [data]
  }
  handleClose();
  dispatch(addQuestionRequest(obj));
  alert('You have successfully save from!, Check on list page');
  // setIsSubmit(true);
  // setTimeout(() => setIsSubmit(false), 2000)
}
const handleChangeName = ({target}: any) =>  setFromName(target.value);
const changeUrl = (url: string) => dispatch(push(url));

  return (
    <div>
      <h1 className="fromHear">Home Page</h1><br/>
      <Form.Label>From Name</Form.Label>
      <Form.Control type="text" placeholder="Enter from name" name="fromName" value={fromName} onChange={handleChangeName} />
      <Button variant="primary" onClick={handleClose} disabled={!fromName}>Add Question</Button>{' '}
      <a className="alert-link" onClick={() => changeUrl(`/surveylist/page`)}>Click here to check list page</a>
      {modal && <FromModal show={modal} handleClose={handleClose} submitFrom={submitFrom} name={fromName} />}

      {/* {isSubmit && <Alert variant="primary" onClose={() => setIsSubmit(false)} dismissible>
      <Alert.Heading>You have successfully save from!, <a className="alert-link" onClick={() => changeUrl(`/survey/${uniqueId}`)}>Click here</a></Alert.Heading>
         </Alert>} */}
    </div>
  );
};

export default Home;
