import React from 'react'

const Profil = () => {
  return (
    <div className='flex flex-col w-full items-center gap-4 dark:text-white' id='scorllable'>
      <div className='flex flex-col items-center justify-center gap-2 md:w-1/2 w-full px-4 py-2 rounded-lg border border-gray-100 dark:border-gray-500'>
        <div>
            <p className='font-bold'>-TENTANG SAYA-</p>
            <div className='w-full h-3 rounded-full bg-blue-500'></div>
        </div>
        <table className='flex flex-col w-full gap-4 divide-y dark:divide-gray-500'>
          <tr className='flex justify-between w-full'>
            <td className='font-bold'>Nama</td>
            <td>Made Rezananda Putra</td>
          </tr>
          <tr className='flex justify-between w-full'>
            <td className='font-bold'>Tanggal Lahir</td>
            <td>6 Agustus 1997</td>
          </tr>
          <tr className='flex justify-between w-full'>
            <td className='font-bold'>No. Handphpne</td>
            <td>+62 81259672716</td>
          </tr>
          <tr className='flex justify-between w-full'>
            <td className='font-bold'>Email</td>
            <td>rezananda6897@gmail.com</td>
          </tr>
          <tr className='flex justify-between w-full'>
            <td className='font-bold'>Domisili</td>
            <td>Jakarta Barat, DKI Jakarta</td>
          </tr>
        </table>
      </div>
      <div className='flex flex-col items-center justify-center gap-2 md:w-1/2 w-full px-4 py-2 rounded-lg border border-gray-100 dark:border-gray-500'>
        <div>
            <p className='font-bold'>-PENDIDIKAN SAYA-</p>
            <div className='w-full h-3 rounded-full bg-blue-500'></div>
        </div>
        <div className='flex flex-col'>
          <div className='flex'>
            <div className='flex flex-col items-center'>
              <div className='flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full'>
                <div className='w-1 h-1 bg-white rounded-full'></div>
              </div>
              <div className='h-full border-l border-blue-500'></div>
            </div>
            <div className='flex flex-col mb-4'>
              <p className='font-bold'>Sarjana Ilmu Komputer, Universitas Brawijaya</p>
              <p className='font-bold'>2015 - 2019</p>
              <p className='text-sm italic'>Mengambil jurusan Teknik Informatika dengan Indeks Prestasi Komulatif (IPK) 3.46</p>
            </div>
          </div>
          <div className='flex'>
            <div className='flex flex-col items-center'>
              <div className='flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full'>
                <div className='w-1 h-1 bg-white rounded-full'></div>
              </div>
              <div className='h-full border-l border-blue-500'></div>
            </div>
            <div className='flex flex-col mb-4'>
              <p className='font-bold'>SMAN 4 Singaraja</p>
              <p className='font-bold'>2012 - 2015</p>
              <p className='text-sm italic'>Bersekolah di salah satu SMA Negeri favorit di Kota Singaraja</p>
            </div>
          </div>
          <div className='flex'>
            <div className='flex flex-col items-center'>
              <div className='flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full'>
                <div className='w-1 h-1 bg-white rounded-full'></div>
              </div>
              <div className='h-full border-l border-blue-500'></div>
            </div>
            <div className='flex flex-col mb-4'>
              <p className='font-bold'>SMPN 1 Singaraja</p>
              <p className='font-bold'>2009 - 2012</p>
              <p className='text-sm italic'>Bersekolah di salah satu SMP Negeri favorit di Kota Singaraja</p>
            </div>
          </div>
          <div className='flex'>
            <div className='flex flex-col items-center'>
              <div className='flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full'>
                <div className='w-1 h-1 bg-white rounded-full'></div>
              </div>
            </div>
            <div className='flex flex-col mb-4'>
              <p className='font-bold'>SDN 3 Banjar Jawa</p>
              <p className='font-bold'>2004 - 2009</p>
              <p className='text-sm italic'>Menjalani masa SD untuk bertemu teman baru</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className='flex flex-col items-center justify-center gap-2 md:w-1/2 w-full px-4 py-2 rounded-lg border border-gray-100 dark:border-gray-500'>
        <div>
            <p className='font-bold'>-HOBI SAYA-</p>
            <div className='w-full h-3 rounded-full bg-blue-500'></div>
        </div>
        <div className='grid grid-cols-2 grid-rows-2 dark:text-black'>
          <div className='text-center p-6 bg-blue-50 rounded-tl-lg'>
            <span className='text-xl'>🥘</span>
            <p>Masak</p>
          </div>
          <div className='text-center p-6 bg-blue-100 rounded-tr-lg'>
            <span className='text-xl'>﹤⁄﹥</span>
            <p>Ngoding</p>
          </div>
          <div className='text-center p-6 bg-blue-100 rounded-bl-lg'>
            <span className='text-xl'>🏝</span>
            <p>Traveling</p>
          </div>
          <div className='text-center p-6 bg-blue-50 rounded-br-lg'>
            <span className='text-xl'>🎬</span>
            <p>Film</p>
          </div>
        </div>
      </div>
      <div className='flex w-full p-1'></div>
    </div>
  )
}

export default Profil