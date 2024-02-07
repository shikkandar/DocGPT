const configureOpenAI = () => {
    const apiKey = process.env.OPEN_AI_API_KEY;
    const organization = process.env.ORG_ID;

    const configParameters = {
        apiKey,
        organization
    };
    return configParameters;
};

export default configureOpenAI;

