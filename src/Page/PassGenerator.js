import {useState} from "react";
import Loader from "../Component/Loader";

const PassGenerator = () => {
    const [length, setLength] = useState(null);
    const [password, setPassword] = useState(null);
    const [loading, setLoading] = useState(false);


    const handleSubmit = async () => {
        setLoading(true);
        await fetch(`https://api.api-ninjas.com/v1/passwordgenerator?length=${length}`, {
            method: 'GET',
            headers: {
                'X-Api-Key': 'rRBg/qt02jXOTL9KDQClYA==FDqSpOUvl1GGaWZk',
                'Content-Type': 'application/json'
            }
            })
          .then(response => response.json())
          .then(result => {
            // console.log(result.random_password);
            setPassword(result.random_password);
          })
          .catch(error => {
            console.error('Error:', error);
          });
        setLoading(false);
    }

    return (
        (loading) ? <Loader /> :
        <div className="p-4 w-[500px] flex flex-col m-[auto]">
            <h1 className='text-center my-6 text-4xl text-white'>
                Passsword Generator
            </h1>
        <input 
            className="m-2 h-[45px] px-2"
            type="text"
            placeholder="Length of password"
            onChange={(e) => setLength(e.target.value)}
        />
        <input 
            className="bg-green-400 hover:bg-green-500 p-2 rounded-lg cursor-pointer text-white w-[100px] m-[auto]"
            type="submit"
            value="Generate"
            onClick={handleSubmit}
        />
        {password &&
        <div className="bg-white min-h-[45px] m-2 p-2 my-6">
            <h3>{password}</h3>
        </div>
        }
    </div>
    )
}

export default PassGenerator;