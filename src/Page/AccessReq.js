const AccessReq = () => {
    return (
        <div className="p-4 w-[500px] flex flex-col m-[auto]">
        <h1 className='text-center my-6 text-4xl text-white'>
            Access Request
        </h1>
        
        <div className="flex justify-between bg-pink-200 mb-8 px-8 py-2 rounded-xl text-white font-bold">
            <div 
                className={`cursor-pointer hover:font-extrabold `}
                // onClick={() => setEncryptType(1)}
            >
                Give Access
            </div>
            <div 
                className={` cursor-pointer hover:font-extrabold`}
                // onClick={() => setEncryptType(2)}
            >
                See Request
            </div>
        </div>
        </div>
    )
}

export default AccessReq;