import React from 'react'
// import Items from './items/Items'
import { useSelector } from 'react-redux'
import http from '../helpers/http'
import { currencyConverter } from '../components/items/currencyConvert'
import { Link } from 'react-router-dom'

const Home = () => {
  const token = useSelector(state=> state.auth.token)
  // const {id} = useParams()

  const [itemsData, setItemsData] = React.useState([])
  // console.log(token)
  // console.log(itemsData)

  React.useEffect(()=> {
    const getAllData =async()=> {
      const {data} = await http(token).get('/item-list')
      console.log("data: ", data)
      console.log("dataresults: ", data.results.data)
      setItemsData(data.results.data)
    } 

    getAllData()


  }, [token])
  

  
  return (
    <>
      <div className=" bg-secondary w-full h-[100vh]  border-[2px] border-[#AAAA]">
        {/* <div className="border-b-2 bg-white border-[#AAAA] px-[20px] flex items-center py-[20px] w-full drop-shadow-md shadow-lg">
          <div className="flex flex-col w-[100px]">
            <div className="nunito font-extrabold text-center text-[#F15858] leading-none ">Merry</div>
            <div className="nunito font-bold  text-[12px] text-center text-[#F15858] tracking-[0.75px] leading-none mt-[-2.25px]">Riana</div>
          </div>
        </div> */}
        <div className="navbar bg-accent">
          <div className="flex-1">
            <a className=" text-xl font-semibold"><span className='font-extrabold'>merry</span>riana</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li><a>Profile</a></li>
              <li>
                <details>
                  <summary>
                    Menu
                  </summary>
                  <ul className="p-2 bg-base-100 rounded-t-none">
                    <li><a>Link 1</a></li>
                    <li><a>Link 2</a></li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>

        <div className=' flex h-[80%] justify-center items-center'>
          <div className='m-[20px] bg-base-100'>
            <div className=" px-[20px] pt-[20px] flex flex-col">
              <div className="text-[24px] font-bold">Pengajuan Barang</div>
              <div className="flex px-[24px]  h-[43px] gap-5">
                
              </div>
            </div>
            <div className='flex flex-col gap-4 p-[20px] '>
              <div className='flex justify-between items-center gap-2 border-b border-black pb-[4px]'>
                <div className='w-[150px] text-center'>Nama Item</div>
                <div className='w-[100px] text-center'>Brand</div>
                <div className='w-[80px] text-center'>Jumlah</div>
                <div className='w-[150px] text-center'>Harga Per Item </div>
                <div className='w-[150px] text-center'>Total Harga</div>
                <div className='w-[150px] text-center'>Deskripsi</div>
                <div className='w-[200px] text-center'>Status Info</div>
              </div>
            

            { itemsData ?
              itemsData.map((item)=> {
                return(
                    <Link to={`/item-detail/${item.id}`} key = {`item-${item.id}` } className="flex flex-row justify-between items-center gap-2">
                      <div className='w-[150px]'>{item.name}</div>
                      <div className='w-[100px]'>{item.brand}</div>
                      <div className='w-[80px] text-center'>{item.quantity}</div>
                      <div className='w-[150px] text-center'>{currencyConverter(item.price_per_item)}</div>
                      <div className='w-[150px] text-center'>{currencyConverter(item.total_price)}</div>
                      <div className='w-[150px]'>{item.description.slice(0, 10)+'...'}</div>
                      <div className='w-[200px]'>{item.status_info}</div>
                    </Link>
                )
              })

              :
              <div>No Data</div>
            }
            </div>
          </div>
        </div>


        {/* {daftarButton ?
          <ContentHead dataKaryawan={karyawan} />
          :
          <Pengaturan dataKaryawan={handleData} tetap={karyawan} />
        } */}

        {/* <Items data={itemsData} columns={}/> */}
        
      </div>
    </>
  )
}

export default Home