const getUsers = async () => {

    try {
        const response = await fetch("https://reqres.in/api/users");
        if (!response.ok) {
            throw new Error("NO OK");
        }
        const jsonResponse = await response.json();
        return jsonResponse.data;
    } catch (error) {
        console.log(error);
    }
}

export default getUsers;