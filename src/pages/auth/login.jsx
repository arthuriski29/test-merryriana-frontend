import React from 'react'

import { Link, useNavigate } from 'react-router-dom';
import { HiLockClosed, HiOutlineMail } from 'react-icons/hi';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { asyncLoginAction } from '../../redux/actions/auth';
import * as Yup from 'yup';
import propTypes from 'prop-types';
import { clearMessage } from '../../redux/reducers/auth';
import { Formik } from 'formik';

const validationSechema = Yup.object({
  email: Yup.string().email('Email is invalid'),
  password: Yup.string().required('Password is invalid')
})

const FormLogin = ({ values, errors, touched, handleChange, handleBlur, handleSubmit, isLoading}) => {
  const errorMessage = useSelector(state => state.auth.errorMessage)
  const warningMessage = useSelector(state => state.auth.warningMessage)

  const [iconEye, setIconEye] = React.useState(false);
  const [typePassword, setTypePassword] = React.useState(false);

  const handleInputPassword = () => {
    setIconEye(!typePassword);
    setTypePassword(!iconEye);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
       {errorMessage &&
            (<div>
                <div className="alert alert-error danger text-[11px]">{errorMessage}</div>
            </div>)}
        {warningMessage &&
            (<div>
                <div className="alert alert-warning danger text-[11px]">{warningMessage}</div>
            </div>)}
      <div className="flex flex-col justify-center gap-12">
        
        <div className="flex items-center">
          <HiOutlineMail
            className="absolute ml-4 text-[#9CA3AF]"
            alt="Email Icon"
          />
          <input
            className="input input-bordered border-primary flex-1 w-full pl-[50px] bg-[#FBE0D8]"
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email &&
            (<label className="label">
                <span className="label-text-left text-error text-xs ">{errors.email}</span>
            </label>
            )
          }
        </div>
        <div className="flex flex-col">
          <div className="relative flex items-center">
            <HiLockClosed
              className="absolute ml-4 text-[#9CA3AF]"
              alt="Password Icon"
            />
            <input
              className="input input-bordered border-primary flex-1 w-full pl-[50px] bg-[#FBE0D8]"
              type={typePassword ? "text" : "password"}
              name="password"
              placeholder="Create your password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <button
              type="button"
              onClick={handleInputPassword}
              className="absolute bottom-4 right-4 text-[#9CA3AF]"
            >
              {iconEye ? (
                <i className="">
                  <FiEye size={15} />
                </i>
              ) : (
                <i className="">
                  <FiEyeOff size={15} />
                </i>
              )}
            </button>
          </div>
          {errors.password && touched.password && (
              <label className="label">
                  <span className="label-text-left text-error text-xs ">{errors.password}</span>
              </label>
          )}
        </div>
      </div>
      <Link
        href="/auth/forgot-password"
        className="text-end font-bold hover:text-primary"
      >
        Forgot Password?
      </Link>
      <button
        disabled={isLoading}
        type="submit"
        className="btn bg-[#F0592C] text-white w-full mt-6"
      >
        Login
        {isLoading && (
          <span className="loading loading-spinner loading-sm "></span>
        )}
      </button>
    </form>
  )
}
FormLogin.propTypes = {
  values: propTypes.string,
  errors: propTypes.string,
  touched: propTypes.string,
  handleBlur: propTypes.func,
  handleChange: propTypes.func,
  handleSubmit: propTypes.func,
  isLoading: propTypes.bool,
}

function Login() {
  // const router = useRouter();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = useSelector(state => state.auth.token)
  const formError = useSelector(state => state.auth.formError)
  const [loading, setLoading] = React.useState(false);

  // const [loading, setLoading] = React.useState(false);
  // const [iconEye, setIconEye] = React.useState(false);
  // const [typePassword, setTypePassword] = React.useState(false);

  React.useEffect(() => {
    if (token) {
        setTimeout(()=>{
            setLoading(false)
            navigate('/home')
        },1200)
    }
    
}, [token, navigate])

  const doLogin = async (values, { setSubmitting, setErrors }) => {
    setLoading(true)
    dispatch(clearMessage())
    dispatch(asyncLoginAction(values))
    // e.preventDefault();
    // const { value: email } = e.target.email;
    // const { value: password } = e.target.password;
    // console.log(email)
    // console.log(password)
    // const form = new URLSearchParams({
    //   email,
    //   password,
    // });
    // console.log(form)
    // const { data } = await http().post("/auth/login", form.toString());
    // setLoading(false);
    if (formError.length) {
        setErrors({
            email: formError.filter(item => item.param === "email")[0].message,
            password: formError.filter(item => item.param === "password")[0].message,
        })
    }
    setTimeout(()=>{
        setLoading(false)
    },800)
    setSubmitting(false)
    // if (data?.results?.token) {
    //   navigate("/register");
    // }
  };

  
  return (
    
    <section className="flex h-screen">
      <div className="overflow-hidden relative md:w-[60%] min-h-screen hidden md:flex bg-[#F0592C] justify-center items-center">
        <div className="absolute mt-[110px] self-start w-[5000px] left-[-540px]">
          {/* <Image
            src={loginVector}
            alt="login-vector"
            width="1650"
            height="535"
          /> */}
        </div>
        <div className="h-[80%] min-[1311px]:w-[50%] max-[1310px]:w-[392px] flex flex-col justify-center items-start gap-4">
          <div className="font-extrabold text-[40px] text-base-100 text-xl">
            chiper<span className="text-[#804242] font-black">Pay</span>
          </div>
          <div className="self-center">
            <div className="relative">
              {/* <Image
                src={loginImage}
                alt="login-image"
                width="400"
                height="600"
              /> */}
            </div>
          </div>
          <div className="font-bold text-[24px]">
            App that Covering Banking Needs.
          </div>
          <div className="font-light text-[16px]">
            ChiperPay is an application that focussing in banking needs for
            all users in the world. Always updated and always following world
            trends. 5000+ users registered in ChiperPay everyday with
            worldwide users coverage.
          </div>
        </div>
      </div>
      <div className="w-[40%] bg-[#FBE0D8] flex max-[768px]:flex-1 h-screen justify-center items-center">
        <div className="h-[80%] max-[1022px]:w-[276px] min-[1023px]:w-[60%] max-[768px]:w-[80%] flex flex-col justify-center items-start gap-8 text-black">
          <div className="font-bold text-[24px] text-left">
            Start Accessing Banking Needs With All Devices and All Platforms
            With 30.000+ Users
          </div>
          <div>
            Transfering money is easier than ever, you can access ChiperPay
            wherever you are. Desktop, laptop, mobile phone? we cover all of
            that for you!
          </div>
          <div className="w-full mt-8">
            <Formik
              initialValues={{
                  email: '',
                  password: ''
              }}
              validationSchema={validationSechema}
              onSubmit={doLogin}
            >
              {(props) => (
                <FormLogin isLoading={loading}{...props} />
              )}
            </Formik>
            <div className="text-center mt-8">
              Don&rsquo;t have an account? Let&rsquo;s ask Admin for{" "}
              <Link
                to="/register"
                className="hover:text-primary font-bold text-[#F0592C]"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <div>TESLOGIN</div>
  )
}

export default Login