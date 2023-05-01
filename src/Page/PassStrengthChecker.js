import { useState } from "react";

const PassStrengthChecker = () => {
    const [strength, setStrength] = useState(null);
    const [password, setPassword] = useState(null);

    function getPasswordStrength() {
        // Define regex patterns for different types of characters
        const lowercaseRegex = /[a-z]/;
        const uppercaseRegex = /[A-Z]/;
        const digitRegex = /\d/;
        const specialCharRegex = /[^a-zA-Z\d]/;
      
        // Count the number of types of characters
        let typeCount = 0;
        if (lowercaseRegex.test(password)) {
          typeCount++;
        }
        if (uppercaseRegex.test(password)) {
          typeCount++;
        }
        if (digitRegex.test(password)) {
          typeCount++;
        }
        if (specialCharRegex.test(password)) {
          typeCount++;
        }
      
        // Determine the strength level based on the number of types of characters
        if (password.length < 8 || typeCount === 1) {
            setStrength('Easy');
          return 'Easy';
        } else if (password.length < 10 || typeCount === 2) {
            setStrength('Medium');
          return 'Medium';
        } else {
            setStrength('Hard');
          return 'Hard';
        }
    }

    return (
        <div className="bg-blue-400 p-4 w-[500px] flex flex-col">
            <input 
                className="m-2 h-[45px] px-2"
                type="text"
                placeholder="Enter Your Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <input 
                className="bg-green-400 hover:bg-green-500 p-2 rounded-lg cursor-pointer text-white w-[100px] m-[auto]"
                type="submit"
                value="Submit"
                onClick={getPasswordStrength}
            />
            {strength &&
            <div className="bg-white min-h-[45px] m-2 p-2 my-6">
                <h3>{strength}</h3>
            </div>}
        </div>
    )
}

export default PassStrengthChecker;