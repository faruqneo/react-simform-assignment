import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { SubmitHandler, useForm } from "react-hook-form";
import { Question } from '../models';

const FromModal = ({show, handleClose, submitFrom, name}: any) => {
  const [multiple, setMultiple] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<Question>();
  const onSubmit: SubmitHandler<any> = (data: any) => {
    const obj = {...data, answerType: parseInt(data?.answerType)};
    submitFrom(obj);
  }
  const handleChange = ({target}: any) => {
    if(target.value != 1) {
      setMultiple(true);
    } else {
      setMultiple(false);
    }
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Question</Form.Label>
              <Form.Control type="text" placeholder="Enter title" {...register("title", { required: true })}/>
              {errors.title?.type === 'required' && <Form.Text className="text-muted">
              question is required
      </Form.Text>}
              
              <Form.Label>Select answer type</Form.Label>
              <Form.Select aria-label="Default select example" {...register("answerType", { required: true })} onChange={handleChange}>
              <option value={1}>Text</option>
              <option value={2}>Multichoice</option>
              <option value={3}>Singlechoice</option>
            </Form.Select>
            {multiple && <>
              <Form.Label>Add answer</Form.Label>
              <Form.Control type="text" placeholder="Enter first choice" {...register("answerOptions.first_choice", { required: true })} />
              {errors.answerOptions?.first_choice?.type === 'required' && <Form.Text className="text-muted">
              first option is required
      </Form.Text>}
              <Form.Control type="text" placeholder="Enter second choice" {...register("answerOptions.second_choice", { required: true })} />
              {errors.answerOptions?.second_choice?.type === 'required' && <Form.Text className="text-muted">
              second option is required
      </Form.Text>}
          
              <Form.Control type="text" placeholder="Enter third choice" {...register("answerOptions.third_choice", { required: true })} />
              {errors.answerOptions?.third_choice?.type === 'required' && <Form.Text className="text-muted">
              third option is required
      </Form.Text>}
              
              <Form.Control type="text" placeholder="Enter forth choice" {...register("answerOptions.forth_choice", { required: true })} />
              {errors.answerOptions?.forth_choice?.type === 'required' && <Form.Text className="text-muted">
              forth option is required
      </Form.Text>}
            </>}
              <br/>
              {/* <Button variant="success" disabled={!errors}>More Questions</Button>{' '} */}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit(onSubmit)} disabled={!errors}>
          Create From
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default FromModal;
