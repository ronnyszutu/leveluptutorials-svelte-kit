// Import db from db

export async function get({ params }) {
    params // using unused var
    return {
        status: 200,
        body: {
            data: 'test'
        }
    }
}