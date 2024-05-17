import { Button } from '../components/button';
import { Input } from '../components/input';
import { ErrorMessage, Formik } from 'formik';
import { api } from '../service/api';
import { useNavigate } from 'react-router-dom';

type Errors = {
  email?: string
  password?: string
}

export function LoginForm() {    
    const navigation = useNavigate()
    
    return (
        <div className=' w-full'>
              <Formik
              initialValues={{ email: '', password: '' }}

              validate={values => {
                const errors: Errors = {};
                if (!values.email) {
                  errors.email = 'Este campo é obrigatório.';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Endereço de email invalido';
                }

                if (!values.password) {
                  errors.password = 'Este campo é obrigatório.';
                } else if (values.password.length < 6) {
                  errors.password = 'Senha deve conter no mínimo 6 caracteres';
                }
                return errors;
              }}

              onSubmit={ async ( values) => {
                const {email, password} = values

                const { data } = await api.post('/login/',JSON.stringify({email, password }))

                if(data.user && data.tokens) {
                   localStorage.setItem('token', JSON.stringify(data.tokens.access))
                   navigation('/profile')
                }
              }}
              >
                {({
              values,
              handleChange,
              handleSubmit,
              isSubmitting,
            }) => (
                //form
                <form onSubmit={handleSubmit}>

                  <div className='mb-7' >
                    <Input 
                      name='email'
                      onChange={handleChange} 
                      label='E-mail' 
                      type='text' 
                      placeholder='@gmail.com'
                      value={values.email}
                      />
                    <ErrorMessage name='email' className=' text-red-500' component="div"/>
                  </div>

                  <div className='mb-9' >
                    <Input
                      name='password'
                      label='Password' 
                      type='password' 
                      placeholder='*************'
                      value={values.password}
                      onChange={handleChange}
                    />
                    <ErrorMessage name='password' className=' text-red-500' component="div"/>
                  </div>

                  <Button classname="bg-Blue w-full h-14  px-6 py-2 rounded-lg disabled:bg-Blue/50" disabled={isSubmitting} type="submit"  label='Sign In'/>
                </form>
              )}

              </Formik>
            </div>
    )
}