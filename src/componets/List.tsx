import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "react-bootstrap";
import { Form } from '../models';
import { push } from 'connected-react-router';
import Moment from 'react-moment';

const List = () => {
    const { form } = useSelector(
    ({forms}: any) => forms
  );

  const { answer } = useSelector(
    ({answers}: any) => answers
  );

  const dispatch = useDispatch();
  const changeUrl = (url: string) => dispatch(push(url));
  return (
    <div>
    {form.length ? <><Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>From Name</th>
        <th>From URL</th>
        <th>CreateAt</th>
        <th>Total Response</th>
      </tr>
    </thead>
    <tbody>
      {form.map((item: Form, index: number) => (<tr key={index}>
        <td>{index+1}</td>
        <td>{item?.name}</td>
        <td onClick={() => changeUrl(`/survey/${item?.id}`)}>{`/survey/${item?.id}`}</td>
        <td><Moment date={item?.createAt} /></td>
        <td>{answer.filter((ele: any) => ele.form_id === item?.id).length}</td>
      </tr>))}
    </tbody>
  </Table><Button variant="primary" onClick={() => changeUrl(`/`)}>Go back to home page</Button>{' '}</>: <div>no data</div>}</div>
  )
}

export default List;
