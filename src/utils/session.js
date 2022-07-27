class Session {
    get token() {
        return localStorage.getItem("token") || null;
    }

    get email(){
        return localStorage.getItem("email") || null
    }

    setToken = (token) => {
        localStorage.setItem("token", token);
    }

    setEmail = (id) => {
        localStorage.setItem("email",id)
    }

    clear = () => {
        localStorage.clear();
    };
}

export default new Session();