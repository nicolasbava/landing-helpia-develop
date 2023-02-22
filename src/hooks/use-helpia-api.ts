import React from "react";

type UseHelpiaApiHook = {
    apiBase: string
    apiPost: <B = any, R = any>(path: string, body: B) => Promise<R>,
    apiPut: <B = any, R = any>(path: string, body: B) => Promise<R>,
    apiGet: <R = any>(path: string) => Promise<R>,
    apiDelete: <R = any>(path: string) => Promise<R>,
}
const useHelpiaApi = (): UseHelpiaApiHook => {
     const apiBase = process.env.NEXT_PUBLIC_HELPIA_API_URL as string
     const apiKey = process.env.NEXT_PUBLIC_HELPIA_API_KEY as string

    const apiPost = React.useCallback(<B, R>(path: string, body: B ): Promise<R> => {
        return new Promise((resolve, reject) => {
            fetch(`${apiBase}${path}`, {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "X-API-Key": `${apiKey}`
                }
            }).then(async (resp) => {
                if(resp.status === 200 || resp.status ===201){
                    return resolve(await resp.json())
                }
                return reject(new Error(`Status: [${resp.status}] ${await resp.json()}`));
            }).catch((err) => reject(err));
        });
    }, [apiBase, apiKey]);

    const apiPut = React.useCallback(<B, R>(path: string, body: B ): Promise<R> => {
        return new Promise((resolve, reject) => {
            fetch(`${apiBase}${path}`, {
                method: "PUT",
                body: JSON.stringify(body),
                headers: {
                    "X-API-Key": `${apiKey}`
                }
            }).then(async (resp) => {
                if(resp.status === 200 || resp.status ===201){
                    return resolve(await resp.json())
                }
                return reject(new Error(`Status: [${resp.status}] ${await resp.json()}`));
            }).catch((err) => reject(err));
        });
    }, [apiBase, apiKey]);

    const apiGet = React.useCallback(< R>(path: string): Promise<R> => {
        return new Promise((resolve, reject) => {
            fetch(`${apiBase}${path}`, {
                method: "GET",
                headers: {
                    "X-API-Key": `${apiKey}`
                }
            }).then(async (resp) => {
                if(resp.status === 200 || resp.status ===201){
                    return resolve(await resp.json())
                }
                return reject(new Error(`Status: [${resp.status}] ${await resp.json()}`));
            }).catch((err) => reject(err));
        });
    }, [apiBase, apiKey]);

    const apiDelete = React.useCallback(< R>(path: string): Promise<R> => {
        return new Promise((resolve, reject) => {
            fetch(`${apiBase}${path}`, {
                method: "DELETE",
                headers: {
                    "X-API-Key": `${apiKey}`
                }
            }).then(async (resp) => {
                if(resp.status === 200 || resp.status ===201){
                    return resolve(await resp.json())
                }
                return reject(new Error(`Status: [${resp.status}] ${await resp.json()}`));
            }).catch((err) => reject(err));
        });
    }, [apiBase, apiKey]);


    return {
        apiBase,
        apiPost,
        apiPut,
        apiGet,
        apiDelete
    };
};
export default useHelpiaApi;