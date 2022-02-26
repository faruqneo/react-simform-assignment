import React, { useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { SubmitHandler, useForm } from "react-hook-form";
import { Answer } from '../models';
import { useDispatch } from "react-redux";
import { addAnswerRequest } from '../_redux/actions/answerActions/answerActions';

export default function FromPage({match}: any) {
  const dispatch = useDispatch();
  const [isSubmit, setIsSubmit] = useState(false);
  const [selectOption, setSelectOption] = useState({firstName: false, secondName: false, thirdName: false, forthName: false});
  const slug = match.params.id;
  const { form } = useSelector(
    (state: any) => state.forms
  );
  const selectedData = form.find((item: any) => item.id === slug);
  const { register, handleSubmit } = useForm<Answer>();
  const onSubmit: SubmitHandler<any> = (data: any) => {
    let result: any = [];
    if(selectedData?.questions[0].answerType == 2) {
      result = Object.keys(data.answers.answer).filter(item => !!data.answers.answer[item]).map(item => data.answers.answer[item]);
      if(result.length === 1) result = result[0];
    } else if(selectedData?.questions[0].answerType == 3) {
      if(selectOption.firstName) result = data.answers.answer.first_choice;
      else if(selectOption.secondName) result = data.answers.answer.second_choice;
      else if(selectOption.thirdName) result = data.answers.answer.third_choice;
      else if(selectOption.forthName) result = data.answers.answer.forth_choice;
    }
    else {
      result = data.answers.answer
    }
    const obj = {...data, answers: result };
    const ans = {form_id: slug, answers: {title: selectedData?.questions[0].title, answer: obj.answers }};
    // console.log(ans);
    dispatch(addAnswerRequest(ans));
    setIsSubmit(true);
    setTimeout(() => setIsSubmit(false), 2000)
  }

  const handleChange = ({target}: any) => {
    let obj: any = {...selectOption};
    obj = {...obj, [target.id]: true}
    Object.keys(obj).filter(e => e !== target.id).map(v => obj[v] = false);
    setSelectOption(obj);
  }

  return (
    <>
    <Form>
    <Form.Label>{selectedData?.name}</Form.Label>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>{selectedData?.questions[0].title}</Form.Label>
      {selectedData?.questions[0].answerType == 1 ? <Form.Control type="text" placeholder="Enter answer" {...register("answers.answer")} /> :
      selectedData?.questions[0].answerType == 2 ? <>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
     <Form.Check type="checkbox" label={selectedData?.questions[0]?.answerOptions?.first_choice} value={selectedData?.questions[0]?.answerOptions?.first_choice} {...register("answers.answer.first_choice")}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label={selectedData?.questions[0]?.answerOptions?.second_choice} value={selectedData?.questions[0]?.answerOptions?.second_choice} {...register("answers.answer.second_choice")}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label={selectedData?.questions[0]?.answerOptions?.third_choice} value={selectedData?.questions[0]?.answerOptions?.third_choice} {...register("answers.answer.third_choice")} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label={selectedData?.questions[0]?.answerOptions?.forth_choice} value={selectedData?.questions[0]?.answerOptions?.forth_choice} {...register("answers.answer.forth_choice")} />
      </Form.Group>
      </>: <>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="radio" id="firstName" checked={selectOption?.firstName} label={selectedData?.questions[0]?.answerOptions?.first_choice} value={selectedData?.questions[0]?.answerOptions?.first_choice} {...register("answers.answer.first_choice")} onChange={handleChange}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="radio" id="secondName" checked={selectOption?.secondName} label={selectedData?.questions[0]?.answerOptions?.second_choice} value={selectedData?.questions[0]?.answerOptions?.second_choice} {...register("answers.answer.second_choice")} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="radio" id="thirdName" checked={selectOption?.thirdName} label={selectedData?.questions[0]?.answerOptions?.third_choice} value={selectedData?.questions[0]?.answerOptions?.third_choice} {...register("answers.answer.third_choice")} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="radio" id="forthName" checked={selectOption?.forthName} label={selectedData?.questions[0]?.answerOptions?.forth_choice} value={selectedData?.questions[0]?.answerOptions?.forth_choice} {...register("answers.answer.forth_choice")} onChange={handleChange} />
      </Form.Group>
      </>}
      <Form.Text className="text-muted">
        We'll never share your answer with anyone else.
      </Form.Text>
    </Form.Group>
    <Button variant="primary" type="button" onClick={handleSubmit(onSubmit)}>
      Submit
    </Button>
</Form>
    {isSubmit && <Alert variant="primary" onClose={() => setIsSubmit(false)} dismissible>
      <Alert.Heading>You have successfully save your answer!</Alert.Heading>
         </Alert>}
    </>
  )
}
