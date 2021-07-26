
export const InputText = ({ label, type, placeholder }) => {
  return (
    <div>
      <label className='flex flex-col w-full'>
        <span>{label}</span>
        <input type={type} placeholder={placeholder} className='h-10 px-4 border border-gray-200' style={{borderRadius: 5}}/>
      </label>      
    </div>
  )
}
