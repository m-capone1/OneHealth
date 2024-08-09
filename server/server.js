import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
console.log("OpenAI API Key:", process.env.OPENAI_API_KEY);

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

const openaiApiKey = process.env.OPENAI_API_KEY;
const openaiApiUrl = 'https://api.openai.com/v1/chat/completions';

app.post('/generate-content', async (req, res) => {
    const { prompt } = req.body;

    try {
        const response = await axios.post(openaiApiUrl, {
            model: "gpt-3.5-turbo",
            messages: [{ role: 'user', content: prompt }],
            max_tokens: 150,
        }, {
            headers: {
                'Authorization': `Bearer ${openaiApiKey}`,
                'Content-Type': 'application/json',
            },
        });

        res.json(response.data.choices[0].message.content);
    } catch (error) {
        console.error('Error generating content:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Failed to generate content. Please check API key and model.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});