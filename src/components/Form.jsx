import React from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';

const Form = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    axios.post('https://637f91ca2f8f56e28e904e7d.mocapi.io/form', data)
    alert('Заявка отправлена')
    console.log(data);
  }

  console.log(watch("example"));

  return (
  <div>
    <form id='form' onSubmit={handleSubmit(onSubmit)}>
        <h1>Заполните заявку на обратную связь</h1>
      <div className='input-group mb-3'>
        <input
        {...register('lastName',{
          required: true,
          maxLength:50,
          pattern: /^[А-яа-я]+$/i
        })}
        type='text'
        className='form-control'
        placeholder='Фамилия'/>

      </div>

      {errors?.lastName?.type === 'required'&&(
        <p>Поле обязательно для заполнения</p>
      )}

      {errors?.lastName?.type === 'maxLength'&&(
        <p>Поле не может содержать более 50 символов</p>
      )}

      {errors?.lastName?.type === 'pattern'&&(
        <p>Поле заполнено не корректно</p>
      )}


      <div className='input-group mb-3'>
        <input
        {...register('firstName',{
          required: true,
          maxLength:50,
          pattern: /^[А-яа-я]+$/i
        })}
        type='text'
        className='form-control'
        placeholder='Имя'/>

      </div>

      {errors?.firstName?.type === 'required'&&(
        <p>Поле обязательно для заполнения</p>
      )}

      {errors?.firstName?.type === 'maxLength'&&(
        <p>Поле не может содержать более 50 символов</p>
      )}

      {errors?.firstName?.type === 'pattern'&&(
        <p>Поле заполнено не корректно</p>
      )}


      <div className='input-group mb-3'>
        <input
        {...register('middleName',{
          required: true,
          maxLength:50,
          pattern: /^[А-яа-я]+$/i
        })}
        type='text'
        className='form-control'
        placeholder='Отчество'/>

      </div>

      {errors?.middleName?.type === 'required'&&(
        <p>Поле обязательно для заполнения</p>
      )}

      {errors?.middleName?.type === 'maxLength'&&(
        <p>Поле не может содержать более 50 символов</p>
      )}

      {errors?.middleName?.type === 'pattern'&&(
        <p>Поле заполнено не корректно</p>
      )}


      <div className='input-group mb-3'>
        <input
        {...register('email',{
          required: true,
          maxLength:50,
          pattern: /^[A-Za-z@._-]+$/i
        })}
        type='text'
        className='form-control'
        placeholder='Email'/>

      </div>

      {errors?.email?.type === 'required'&&(
        <p>Поле обязательно для заполнения</p>
      )}

      {errors?.email?.type === 'maxLength'&&(
        <p>Поле не может содержать более 50 символов</p>
      )}

      {errors?.email?.type === 'pattern'&&(
        <p>Поле заполнено не корректно</p>
      )}

      <div>
      <input className='btn btn-outline-primary' type="submit" />
      </div>
    </form>
  </div>
  )
}

export default Form