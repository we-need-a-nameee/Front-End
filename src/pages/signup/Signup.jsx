import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import hospitalImage from '../../assets/hospital.jpg';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Signup = () => {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({});
  const navigate = useNavigate();

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const validationSchema = [
    Yup.object().shape({
      name: Yup.string().required('Full Name is required'),
      gender: Yup.string().required('Gender is required'),
      birthdate: Yup.date().required('Birth Date is required'),
    }),
    Yup.object().shape({
      bloodtype: Yup.string().required('Blood Type is required'),
      medHistory: Yup.string().required('Medical History is required'),
      allergies: Yup.string().required('Allergies are required'),
      medications: Yup.string().required('Current Medications are required'),
      insurance: Yup.string().required('Insurance Provider is required'),
    }),
    Yup.object().shape({
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    }),
  ];

  const handleRegister = async (values) => {
    console.log('Register:', values);
    // Add your registration logic here
    // navigate('/dashboard');
  };

  const renderStep = (props) => {
    switch (step) {
      case 1:
        return (
          <Form>
            <h2 className="text-3xl font-bold mb-6">Step 1: Contact Information</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
              <Field
                name="name"
                type="text"
                placeholder="Enter your full name"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pr"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <Field
                    type="radio"
                    name="gender"
                    value="Male"
                    className="form-radio h-4 w-4 text-pr"
                  />
                  <span className="ml-2">Male</span>
                </label>
                <label className="inline-flex items-center">
                  <Field
                    type="radio"
                    name="gender"
                    value="Female"
                    className="form-radio h-4 w-4 text-pr"
                  />
                  <span className="ml-2">Female</span>
                </label>
              </div>
              <ErrorMessage name="gender" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Birth Date</label>
              <Field
                name="birthdate"
                type="date"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pr"
              />
              <ErrorMessage name="birthdate" component="div" className="text-red-500 text-sm" />
            </div>
            <button
              type="submit"
              onClick={props.isValid ? nextStep : null}
              className={`w-full bg-c3 text-white py-2 rounded-lg hover:bg-pr transition duration-200 ${!props.isValid && 'opacity-50'}`}
              disabled={!props.isValid}
            >
              Next
            </button>
          </Form>
        );
      case 2:
        return (
          <Form>
            <h2 className="text-3xl font-bold mb-6">Step 2: Enter Medical Information</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Blood Type</label>
              <Field
                as="select"
                name="bloodtype"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pr"
              >
                <option value="" disabled>Select Blood Type</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </Field>
              <ErrorMessage name="bloodtype" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Medical History</label>
              <Field
                name="medHistory"
                type="text"
                placeholder="Enter your medical history"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pr"
              />
              <ErrorMessage name="medHistory" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Allergies</label>
              <Field
                name="allergies"
                type="text"
                placeholder="Enter your allergies"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pr"
              />
              <ErrorMessage name="allergies" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Current Medications</label>
              <Field
                name="medications"
                type="text"
                placeholder="Enter your current medications"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pr"
              />
              <ErrorMessage name="medications" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Insurance Provider</label>
              <Field
                name="insurance"
                type="text"
                placeholder="Enter your insurance provider"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pr"
              />
              <ErrorMessage name="insurance" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="flex justify-between">
              <button onClick={prevStep} className="bg-gray-400 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-200">
                Back
              </button>
              <button
                type="submit"
                onClick={props.isValid ? nextStep : null}
                className={`bg-c3 text-white py-2 px-4 rounded-lg hover:bg-pr transition duration-200 ${!props.isValid && 'opacity-50'}`}
                disabled={!props.isValid}
              >
                Next
              </button>
            </div>
          </Form>
        );
      case 3:
        return (
          <Form>
            <h2 className="text-3xl font-bold mb-6">Step 3: Create an Account</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <Field
                name="email"
                type="email"
                placeholder="you@gmail.com"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pr"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <Field
                name="password"
                type="password"
                placeholder="••••••••"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pr"
              />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="flex justify-between">
              <button onClick={prevStep} className="bg-gray-400 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-200">
                Back
              </button>
              <button
                type="submit"
                className="bg-green-400 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200"
              >
                Register
              </button>
            </div>
          </Form>
        );
      default:
        return null;
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        gender: '',
        birthdate: '',
        bloodtype: '',
        medHistory: '',
        allergies: '',
        medications: '',
        insurance: '',
        email: '',
        password: '',
      }}
      validationSchema={validationSchema[step - 1]}
      onSubmit={(values) => {
        if (step === 3) {
          handleRegister(values);
        } else {
          setFormValues(values);
          nextStep();
        }
      }}
      validateOnMount
    >
      {(props) => (
        <div className="flex h-screen">
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-16 bg-white">
            {renderStep(props)}
            <div className="mt-4">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <a href="/login" className="text-pr hover:underline">
                  Log In
                </a>
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center bg-white">
            <img src={hospitalImage} alt="Sign-up" className="object-cover w-full h-full" />
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Signup;
