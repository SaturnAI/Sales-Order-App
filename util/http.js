// import { SALE_ORDER_API_KEY, USER_AUTH_API_KEY } from "@env"
import axios from "axios";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const OrderData = async (bodyprop, lastid) => {

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: process.env.SALE_ORDER_API_KEY,
        data: {
            "user_prompt": `Create an order for ${bodyprop}`,
            "last_id": lastid,

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

        url: process.env.USER_AUTH_API_KEY + `${prop}`,
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
        url: process.env.USER_AUTH_API_KEY + `${method}`,
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

export const PostOrders = async (email, Customer_Name, Customer_Number, Item_Name, Quantity, _id) => {

    let config = {
        method: 'POST',
        maxBodyLength: Infinity,
        url: process.env.POST_ORDER_API_KEY,
        data: {
            "order_data": {
                "order_id": email,
                "orders": [
                    {
                        "_id": _id,
                        "Customer_Number": Customer_Number,
                        "Quantity": Quantity,
                        "Item_Name": Item_Name,
                        "Customer_Name": Customer_Name,
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
                    data: "Not Posted",
                }
            }
        });

    return dataresponse;

}

export const CartInsert = async (item, email) => {

    if(item.customer_name == null || item.item_name == null){
        return {
            success: false,
            data : "Solve Problem First"
        }
    }
    else {

        const order = {
        "_id":item.item_id,
        "Customer_Number":Number(item.customer_no),
        "Quantity":Number(item.quantity),
        "Item_Name":item.item_name,
        "Customer_Name":item.customer_name,
    }


    let config = {
        method:'POST',
        maxBodyLength:Infinity,
        url:process.env.CART_API_KEY+'insert',
        data: {
            "order_id":email,
            "orders":order,
        }
    }



    const dataresponse = await axios.request(config)
        .then((response) => {

            return {
                success: true,
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
    


}

export const CartFetch = async (email) => {
    let config = {
        method: 'POST',
        maxBodyLength: Infinity,
        url: process.env.CART_API_KEY + 'fetch',
        data: {
            "order_id": email,
        }
    }


    const dataresponse = await axios.request(config)
        .then((response) => {
            return {
                success: true,
                data: response.data
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

export const CartDelete = async (_id, email) => {
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: process.env.CART_API_KEY + 'delete',
        data: {
            "order_id": email,
            "_id": _id
        }

    }

    const dataresponse = await axios.request(config)
        .then((response) => {

            return {
                success: true,
                data: response.data,
            }

        })
        .catch((error) => {
            if (error) {
                return {
                    success: false,
                    data: "Not Deleted",
                }
            }
        });

    return dataresponse;

}

export const History = async (email) => {
    
    let config = {
        method: 'POST',
        maxBodyLength: Infinity,
        url: process.env.CART_API_KEY+'history',
        data: {
            "order_id": email,
        }

    }

    const dataresponse = await axios.request(config)
        .then((response) => {
            return {
                success: true,
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


