// import { SALE_ORDER_API_KEY, USER_AUTH_API_KEY } from "@env"
import axios from "axios";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const OrderData = async (bodyprop, lastid) => {

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url:process.env.SALE_ORDER_API_KEY,
        data: {
            "user_prompt": bodyprop,
            "last_id" :  lastid,

        }
    };

    const data = await axios.request(config)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            if (error) {
                return "Error"
            }
        });


    return data;
}

export default OrderData;



export const Login = async (loginCredentials, prop) => {
    const { username, password } = loginCredentials;


    let config = {
        method: 'post',
        maxBodyLength: Infinity,

        url:process.env.USER_AUTH_API_KEY + `${prop}`,
        data: {
            "email": username,
            "password": password,
        },
    }

    const dataresponse = await axios.request(config)
        .then(async (response) => {
            console.log(response.data)
            return response.data;
        })
        .catch((error) => {
            if (error) {
                return {
                    "success": false,
                    "message": 'User Not Found',

                }

            }
        });

    return dataresponse;


}


export const findUser = async (method, prop) => {


    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url:process.env.USER_AUTH_API_KEY + `${method}`,
        data: {
            "token": prop
        }
    }

    const dataresponse = await axios.request(config)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            if (error) {
                return {
                    "success": false,
                    "message": 'User Not Found',

                }

            }
        });

    return dataresponse;


}

export const ExpenseDataApi = async () => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url:process.env.FIREBASE_API_KEY,
    }

    const dataresponse = await axios.request(config)
        .then((response) => {
            return {
                success: 'true',
                data: response.data,
            }
        })
        .catch((error) => {
            if (error) {
                return {
                    success: false,
                    data: "Not Found",
                }
            }
        });

    return dataresponse;

}

export const ExpenseDataApiPost = async (picker, Amount, Date, Remarks, id) => {
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: process.env.FIREBASE_API_KEY,
        data: {
            ExpenseType: picker,
            Amount,
            Date,
            Remarks,
            id
        }
    }

    const dataresponse = await axios.request(config)
        .then((response) => {
            return {
                success: 'true',
                data: response.data,
            }
        })
        .catch((error) => {
            if (error) {
                return {
                    success: false,
                    data: "Not Found",
                }
            }
        });

    return dataresponse;

}


export const PostOrders = async (username, email, customer_name, customer_no, item_name, quantity) => {
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url:process.env.POST_ORDER_API_KEY,
        data: {
            "order_data": {
                "order_id": email,
                "order_by": username,
                "orders": [
                    {
                        "Customer_Number": customer_no,
                        "Quantity": quantity,
                        "Item_Name": item_name,
                        "Customer_Name": customer_name,
                    }
                ]
            }
        }
    }

    const dataresponse = await axios.request(config)
        .then((response) => {

            return {
                success: 'true',
                data: response.data,
            }
        })
        .catch((error) => {
            if (error) {
                return {
                    success: false,
                    data: "Not Found",
                }
            }
        });

    return dataresponse;

}


