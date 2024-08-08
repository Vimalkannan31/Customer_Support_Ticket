export const baseURL = () => {
    switch (process.env.NODE_ENV) {
        case "development":
            return "https://myhrmapi.techgenzi.com"
        case "production":
            return "https://myhrmapi.techgenzi.com"
        default:
            return "https://myhrmapi.techgenzi.com"
    }
}

