import { useEffect } from 'react';
import './App.css'
import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);

  // console.log(watch('name'));
  const watchedName = watch('name');
  const watchedEmail = watch('email');

  useEffect(() => {
    console.log('Name ', watchedName);
  }, [watchedName]);

  useEffect(() => {
    console.log('Email ', watchedEmail);
  }, [watchedEmail]);

  return (
    <div>
      <h1>Forms in React</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">
          Name:
          {/* <input {...register('name', { required: true, minLength: 2 })} /> */}
          <input {...register('name',
            {
              required: 'Name required!',
              minLength: {
                value: 2,
                message: 'Name should be at least 2 characters!'
              }
            })} />
          {errors.name && <p>{errors.name.message}</p>}
        </label>

        <label htmlFor="">
          Email:
          <input {...register('email', { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })} />
          {errors.email && <p>Email is required!</p>}
        </label>

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App;
