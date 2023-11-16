import OpenAI from 'openai';

const openai = new OpenAI();

export async function getEmbeddings(input: string) {
try {
    const embeddingResponse = await openai.embeddings.create({
    model: 'text-embedding-ada-002',
    input: input.replace(/\n/g, ' '),
    encoding_format: 'float'
    });

    if (!embeddingResponse.data[0]?.embedding) {
    throw new Error('Invalid embedding response');
    }

    return embeddingResponse.data[0].embedding as number[];

} catch (err) {
    if (err instanceof Error) {
    console.log("Error generating embedding: ", err);
    throw new Error(`Error generating embedding: ${err.message}`);
    } else {
    console.log('An unknown error occurred');
    throw new Error('An unknown error occurred');
    }
}
}