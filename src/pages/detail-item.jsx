import React from 'react'

import http from '../helpers/http';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

import * as Yup from 'yup';
import propTypes from 'prop-types';
import { Formik } from 'formik';

const validationSechema = Yup.object({
  name: Yup.string().required('Nama invalid'),
  brand: Yup.string().required('Merek invalid'),
  quantity: Yup.number().required('Jumlah invalid'),
  price_per_item: Yup.number().required('Harga per item invalid'),
  description: Yup.string().required('Deskripsi invalid')
})

const FormEditItem = ({ values, errors, touched, handleChange, handleBlur, handleSubmit}) => {
  return (
    <form 
      method="dialog" 
      onSubmit={handleSubmit} 
      className="flex flex-col gap-4"
    >
      <div className="flex flex-col">
        <div className="flex items-center gap-4">
          {/* <HiLockClosed
            className="absolute ml-4 text-[#9CA3AF]"
            alt="Password Icon"
          /> */}
          <div className='w-[100px] font-bold'>Nama Barang</div>
          <input
            className="input input-bordered border-primary flex-1 w-full pl-[50px] bg-[#FBE0D8]"
            type="text"
            name="name"
            placeholder="Nama Barang"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
        </div>
        {errors.name && touched.name && (
            <label className="label">
                <span className="label-text-left text-error text-xs ">{errors.name}</span>
            </label>
        )}
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-4">
          {/* <HiLockClosed
            className="absolute ml-4 text-[#9CA3AF]"
            alt="Password Icon"
          /> */}
          <div className='w-[100px] font-bold'>Merek</div>

          <input
            className="input input-bordered border-primary flex-1 w-full pl-[50px] bg-[#FBE0D8]"
            type="text"
            name="brand"
            placeholder="Merek"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.brand}
          />
        </div>
        {errors.brand && touched.brand && (
            <label className="label">
                <span className="label-text-left text-error text-xs ">{errors.brand}</span>
            </label>
        )}
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-4">
          {/* <HiLockClosed
            className="absolute ml-4 text-[#9CA3AF]"
            alt="Password Icon"
          /> */}
          <div className='w-[100px] font-bold'>Jumlah</div>
          <input
            className="input input-bordered border-primary flex-1 w-full pl-[50px] bg-[#FBE0D8]"
            type="number"
            name="quantity"
            placeholder="Jumlah Barang"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.quantity}
          />
        </div>
        {errors.quantity && touched.quantity && (
            <label className="label">
                <span className="label-text-left text-error text-xs ">{errors.quantity}</span>
            </label>
        )}
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-4">
          {/* <HiLockClosed
            className="absolute ml-4 text-[#9CA3AF]"
            alt="Password Icon"
          /> */}
          <div className='w-[100px] font-bold'>Harga Satuan</div>
          <input
            className="input input-bordered border-primary flex-1 w-full pl-[50px] bg-[#FBE0D8]"
            type="number"
            name="price_per_item"
            placeholder="Harga Satuan"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.price_per_item}
          />
        </div>
        {errors.price_per_item && touched.price_per_item && (
            <label className="label">
                <span className="label-text-left text-error text-xs ">{errors.price_per_item}</span>
            </label>
        )}
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col items-center gap-4">
          {/* <HiLockClosed
            className="absolute ml-4 text-[#9CA3AF]"
            alt="Password Icon"
          /> */}
          <div className='w-full text-center font-bold mt-[20px]'>Deskripsi</div>
          <textarea
            className="textarea textarea-bordered border-primary flex-1 w-full  bg-[#FBE0D8]"
            type="text"
            name="description"
            placeholder="Deskripsi"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.description}
          />
        </div>
        {errors.description && touched.description && (
            <label className="label">
                <span className="label-text-left text-error text-xs ">{errors.description}</span>
            </label>
        )}
      </div>
      
      {/* if there is a button in form, it will close the modal */}
      <div className='flex mt-6 justify-between'>
        <button className="btn bg-[#F0592C] text-white w-[100px]" type='submit'>Submit</button>
        <button className="btn w-[100px]" type='button'>Close</button>
      </div>
    </form>
  )
}
FormEditItem.propTypes = {
  values: propTypes.object,
  errors: propTypes.object,
  touched: propTypes.object,
  handleBlur: propTypes.func,
  handleChange: propTypes.func,
  handleSubmit: propTypes.func,
}

const ItemDetail = () => {
  const { id } = useParams()
  const [item, setItem] = React.useState({})
  
  console.log(id)
  console.log(item)

  const token = useSelector(state=> state.auth.token)
  const {role} = jwtDecode(token)
  console.log(role)
  // const roleList = ['officer' ]

  React.useEffect(() => {
    const getItemData = async () => {
      if(role === 2){
        const { data } = await http(token).get(`/item-list/officer/${id}`);
        setItem(data.results);
      }
      if(role === 3){
        const { data } = await http(token).get(`/item-list/manager/${id}`);
        setItem(data.results);
      }
      if(role === 4){
        const { data } = await http(token).get(`/item-list/finance/${id}`);
        setItem(data.results);
      }
    };
    if (id) {
      getItemData(id);
    }
  }, [token, role, id]);



  const doEdit = async(values) => {
    console.log(values)
  }

  return (
    <>
      <div>ItemDetail</div>
      <div className='flex gap-5'>
        <div> Nama: {item.name}</div>
        <button className="btn h-[10px]" onClick={()=>document.getElementById('my_modal_2').showModal()}>open modal</button>
        
      </div>
      <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Edit Items</h3>
            <p className="py-4">Shown Only Rejected Items</p>
            <div className=" mx-4">
              {/* {jhkj} */}
              <Formik
                initialValues={{
                  name: '',
                  brand: '',
                  quantity: '',
                  price_per_item: '',
                  description: ''
                }}
                validationSchema={validationSechema}
                onSubmit={doEdit}
              >
                {(props) => (
                  <FormEditItem {...props} />
                )}
              </Formik>
            </div>
          </div>
        </dialog>
    </>
  )
}

export default ItemDetail