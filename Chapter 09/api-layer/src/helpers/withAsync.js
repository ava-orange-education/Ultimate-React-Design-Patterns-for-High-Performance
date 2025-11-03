export async function withAsync(fn) {
    try {
        if (typeof fn !== "function")
            throw new Error("The first argument must be a function");

        const { data } = await fn();
        return {
            response: data,
            error: null,
        };
    } catch (error) {
        return {
            error,
            response: null,
        };
    }
}
