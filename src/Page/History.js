import { app, auth, usePosts } from '../firebase';
import { getDatabase, push, ref } from 'firebase/database';
import Cookies from 'js-cookie';

const History = () => {
    const userId = Cookies.get('userId');
    const DBData = usePosts(`History/${userId}`);
    console.log("dbdata", DBData);

    return (
        <div >
            <h1 className='text-center my-6 text-4xl text-white'>
                History
            </h1>
            {
                DBData.map((item, index) =>(
                    <div key={index} className='mt-4 bg-[#FFFFFF] bg-opacity-35 rounded-xl w-[700px] m-[auto] p-4 text-white'>
                        <h3>{item.message}</h3>
                        <p className='text-[13px] flex flex-row-reverse'>{item.date}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default History;