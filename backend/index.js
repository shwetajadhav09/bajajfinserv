const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors());


app.use(bodyParser.json());

app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    if (!data) {
        return res.status(400).json({
            is_success: false,
            message: "Invalid input"
        });
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));

    const lowerAlphabets = alphabets.filter(char => char >= 'a' && char <= 'z');
    const highestLowercaseAlphabet = lowerAlphabets.length > 0 ? [lowerAlphabets.sort().reverse()[0]] : [];

    res.status(200).json({
        is_success: true,
        user_id: "john_doe_17091999", // customize with your full name and DOB
        email: "john@xyz.com",
        roll_number: "ABCD123",
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
