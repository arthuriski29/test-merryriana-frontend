import React from 'react'
import Items from './items/Items'
import { useSelector } from 'react-redux'

const Home = () => {
  const token = useSelector(state=> state.auth.token)

  const [itemsData, setItemsData] = React.useState([])
  console.log(token)

  React.useEffect(()=> {
    const getAllData =async()=> {
      const {data} = await http(token).get('/item-list')
      console.log(data)
      setItemsData(data)
    } 

    getAllData


  }, [token])
  

  
  return (
    <>
      <div className=" bg-[#F7F8FB] w-full h-full  border-[2px] border-[#AAAA]">
        <div className="border-b-2 bg-white border-[#AAAA] px-[20px] flex items-center py-[20px] w-full drop-shadow-md shadow-lg">
          <div className="flex flex-col w-[100px]">
            <div className="nunito font-extrabold text-center text-[#F15858] leading-none ">Merry</div>
            <div className="nunito font-bold  text-[12px] text-center text-[#F15858] tracking-[0.75px] leading-none mt-[-2.25px]">Riana</div>
          </div>
        </div>

        <div className=" bg-white px-[20px] pt-[20px] flex flex-col">
          <div className="text-[24px] font-bold">Pengajuan Barang</div>
          <div className="flex px-[24px]  h-[43px] gap-5">
            
          </div>
        </div>


        {/* {daftarButton ?
          <ContentHead dataKaryawan={karyawan} />
          :
          <Pengaturan dataKaryawan={handleData} tetap={karyawan} />
        } */}

        <Items data={itemsData} columns={}/>
        
      </div>
    </>
  )
}

export default Home