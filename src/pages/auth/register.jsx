// import { Formik } from 'formik';
// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom';
// import * as Yup from "yup";
// import http from '../../helpers/http';
// import { HiLockClosed, HiOutlineMail } from 'react-icons/hi';
// import { FiEye, FiEyeOff } from 'react-icons/fi';
// import { AiOutlineLoading3Quarters } from 'react-icons/ai';


// const validationSchema = Yup.object({
//   // username: Yup.string()
//   //   .min(3, "Must be 3 characters or more")
//   //   .required("Required"),
//   email: Yup.string().email("Email is invalid"),
//   password: Yup.string()
//     .min(6, "Must be 6 characters minimum")
//     .required("Password is invalid"),
// });
import { useSelector } from "react-redux";
import http from "../../helpers/http";
import { useNavigate } from "react-router-dom";
import React from "react";
import jwtDecode from "jwt-decode";
function Register() {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const [errorMessage, setErrorMessage] = React.useState("");
  // const [isLoading, setLoading] = React.useState(false);
  // const [iconEye, setIconEye] = React.useState(false);
  // const [typePassword, setTypePassword] = React.useState(false);
  // const handleInputPassword = () => {
  //   setIconEye(!typePassword);
  //   setTypePassword(!iconEye);
  // };

  // const doRegister = async (values) => {
  //   try {
  //     // e.preventDefault()
  //     console.log(values);
  //     setErrorMessage("");
  //     setLoading(true);
  //     // const username = values.username;
  //     const email = values.email;
  //     const password = values.password;
  //     // console.log(username)
  //     // console.log(email)
  //     // console.log(password)
  //     const form = new URLSearchParams({
  //       email,
  //       password,
  //     }).toString();
  //     console.log(form);
  //     const { data } = await http().post(
  //       "/auth/register",
  //       form.toString()
  //     );

  //     if (data?.results?.token) {
  //       setLoading(false);
  //       navigate("/auth/create-pin");
  //     }

  //     dispatch(saveEmail(values.email));
  //   } catch (err) {
  //     const message = err?.response?.data?.message;
  //     if (message?.includes("duplicate")) {
  //       setErrorMessage("Email has been registered");
  //     }
  //     setLoading(false);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate()

  React.useEffect(()=> {
    if(token){
        console.log(token)
        const role = jwtDecode(token)
        console.log(role)
        if(role !== 1){
            navigate('/')
        }
    }
},[navigate, token])
  return (
    // <section className="flex h-screen">
    //   <div className="overflow-hidden relative md:w-[60%] min-h-screen hidden md:flex bg-[#F0592C] justify-center items-center">
    //     <div className="absolute mt-[110px] self-start w-[5000px] left-[-540px]">
    //       {/* <Image
    //         src={loginVector}
    //         alt="login-vector"
    //         width="1650"
    //         height="535"
    //       /> */}
    //     </div>
    //     <div className="h-[80%] min-[1311px]:w-[50%] max-[1310px]:w-[392px] flex flex-col justify-center items-start gap-4">
    //       <div className="font-extrabold text-[40px] text-base-100 text-xl">
    //         chiper<span className="text-[#804242] font-black">Pay</span>
    //       </div>
    //       <div className="self-center">
    //         <div className="relative">
    //           {/* <Image
    //             src={loginImage}
    //             alt="login-image"
    //             width="400"
    //             height="600"
    //           /> */}
    //         </div>
    //       </div>
    //       <div className="font-bold text-[24px]">
    //         App that Covering Banking Needs.
    //       </div>
    //       <div className="font-light text-[16px]">
    //         ChiperPay is an application that focussing in banking needs for
    //         all users in the world. Always updated and always following world
    //         trends. 5000+ users registered in ChiperPay everyday with
    //         worldwide users coverage.
    //       </div>
    //     </div>
    //   </div>
    //   <div className="w-[40%] bg-[#FBE0D8] flex max-[768px]:flex-1 h-screen justify-center items-center">
    //     <div className="h-[80%] max-[1022px]:w-[276px] min-[1023px]:w-[60%] max-[768px]:w-[80%] flex flex-col justify-center items-start gap-8 text-black">
    //       <div className="font-bold text-[24px] text-left">
    //         Start Accessing Banking Needs With All Devices and All Platforms
    //         With 30.000+ Users
    //       </div>
    //       <div>
    //         Transfering money is easier than ever, you can access ChiperPay
    //         wherever you are. Desktop, laptop, mobile phone? we cover all of
    //         that for you!
    //       </div>
    //       <div className="w-full mt-8">
    //         <Formik
    //           initialValues={{
    //             // username: "",
    //             email: "",
    //             password: "",
    //           }}
    //           validationSchema={validationSchema}
    //           onSubmit={doRegister}
    //         >
    //           {({
    //             values,
    //             errors,
    //             touched,
    //             handleChange,
    //             handleBlur,
    //             handleSubmit,
    //           }) => (
    //             <form
    //               onSubmit={handleSubmit}
    //               className="flex flex-col gap-4"
    //               autoComplete="off"
    //             >
    //               {errorMessage && (
    //                 <div>
    //                   <div className="alert alert-error danger text-[11px]">
    //                     {errorMessage}
    //                   </div>
    //                 </div>
    //               )}
    //               <div className="flex flex-col justify-center gap-6">
    //                 {/* <div className="flex flex-col">
    //                   <div className="flex items-center">
    //                     <HiUser
    //                       className="absolute ml-4 text-[#9CA3AF]"
    //                       alt="First Name Icon"
    //                     />
    //                     <input
    //                       className="input input-bordered border-primary flex-1 w-full pl-[50px] bg-[#FBE0D8]"
    //                       type="text"
    //                       name="username"
    //                       placeholder="Enter your username"
    //                       onChange={handleChange}
    //                       onBlur={handleBlur}
    //                       value={values.username}
    //                     />
    //                   </div>
    //                   <div>
    //                     {errors.username && touched.username && (
    //                       <label className="label">
    //                         <span className="text-error text-xs py-0">
    //                           {errors.username}
    //                         </span>
    //                       </label>
    //                     )}
    //                   </div>
    //                 </div> */}
    //                 <div className="flex flex-col">
    //                   <div className="flex items-center">
    //                     <HiOutlineMail
    //                       className="absolute ml-4 text-[#9CA3AF]"
    //                       alt="Email Icon"
    //                     />
    //                     <input
    //                       className="input input-bordered border-primary flex-1 w-full pl-[50px] bg-[#FBE0D8]"
    //                       type="email"
    //                       name="email"
    //                       placeholder="Enter your e-mail"
    //                       onChange={handleChange}
    //                       onBlur={handleBlur}
    //                       value={values.email}
    //                     />
    //                   </div>
    //                   <div>
    //                     {errors.email && touched.email && (
    //                       <label className="label">
    //                         <span className="text-error text-xs py-0">
    //                           {errors.email}
    //                         </span>
    //                       </label>
    //                     )}
    //                   </div>
    //                 </div>
    //                 <div className="flex flex-col">
    //                   <div className="relative flex items-center">
    //                     <HiLockClosed
    //                       className="absolute ml-4 text-[#9CA3AF]"
    //                       alt="Password Icon"
    //                     />
    //                     <input
    //                       className="input input-bordered border-primary flex-1 w-full pl-[50px] bg-[#FBE0D8]"
    //                       type={typePassword ? "text" : "password"}
    //                       name="password"
    //                       placeholder="Create your password"
    //                       onChange={handleChange}
    //                       onBlur={handleBlur}
    //                       value={values.password}
    //                     />
    //                     <button
    //                       type="button"
    //                       onClick={handleInputPassword}
    //                       className="absolute bottom-4 right-4 text-[#9CA3AF]"
    //                     >
    //                       {iconEye ? (
    //                         <i className="">
    //                           <FiEye size={15} />
    //                         </i>
    //                       ) : (
    //                         <i className="">
    //                           <FiEyeOff size={15} />
    //                         </i>
    //                       )}
    //                     </button>
    //                   </div>
    //                   {errors.password && touched.password && (
    //                     <label className="label">
    //                       <span className="label-text-left text-error text-xs ">
    //                         {errors.password}
    //                       </span>
    //                     </label>
    //                   )}
    //                 </div>
    //               </div>
    //               <button
    //                 disabled={isLoading}
    //                 type="submit"
    //                 className="btn bg-[#F0592C] text-white w-full mt-6"
    //               >
    //                 Sign Up
    //                 {isLoading && (
    //                   <span className="loading loading-spinner loading-sm "></span>
    //                 )}
    //               </button>
    //             </form>
    //           )}
    //         </Formik>
    //         <div className="text-center mt-8">
    //           Already have an account? Let&rsquo;s{" "}
    //           <Link
    //             to="/auth/login"
    //             className="hover:text-primary font-bold text-[#F0592C]"
    //           >
    //             Login
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <input
    //     type="checkbox"
    //     id="loading"
    //     className="modal-toggle"
    //     defaultChecked={isLoading}
    //   />
    //   <div className="modal">
    //     <div className="modal-box bg-transparent shadow-none">
    //       <div className="justify-center flex ">
    //         <AiOutlineLoading3Quarters
    //           className="animate-spin "
    //           color="white"
    //           size={60}
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <div>register</div>
  )
}

export default Register