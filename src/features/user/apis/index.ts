export function getUsername(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            // 兼容小程序写法
            resolve("dakk");
        }, 1000);
    });
}