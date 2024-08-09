import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

//had to hard code the api key on local copy due to issues with env, will need to get own API key to run this: https://auth.openai.com/authorize?issuer=auth0.openai.com&client_id=DRivsnm2Mu42T3KOpqdtwB3NYviHYzwD&audience=https%3A%2F%2Fapi.openai.com%2Fv1&redirect_uri=https%3A%2F%2Fplatform.openai.com%2Fauth%2Fcallback&device_id=9316b35c-a213-4751-a1b1-6836e54c3b83&screen_hint=signup&max_age=0&scope=openid+profile+email+offline_access&response_type=code&response_mode=query&state=fm10dHgzd1BrMWlvTE5uQUZIVWRuSjZtTFlOSVplR1J0QmhXeGFCbmdGNQ%3D%3D&nonce=WFF1SWZteml0VnNyZC1qdmZ6TjF5b0VvZHEuUXAzdnJZNGlZZDJnTWh4OQ%3D%3D&code_challenge=WAh76HSecrD09EDmqR4wSMO7PjNgIlKr1_MfVKbk-VA&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtc3BhLWpzIiwidmVyc2lvbiI6IjEuMjEuMCJ9&flow=control
const openaiApiUrl = 'https://api.openai.com/v1/chat/completions';
const openaiApiKey = process.env.OPENAI_API_KEY;

app.post('/generate-content', async (req, res) => {
    const { prompt } = req.body;

    try {
        const response = await axios.post(openaiApiUrl, {
            model: "gpt-3.5-turbo",
            messages: [{ role: 'user', content: prompt }],
            max_tokens: 250,
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