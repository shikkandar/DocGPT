import Configuration from 'openai'

const configParameter = {
    apiKey:process.env.OPEN_AI_API_KEY,
    organization:process.env.ORG_ID
}

const configureOpenAI = () => {
     const config = new Configuration(configParameter);
     return config;
}

export default configureOpenAI;
