import { ToastContainer } from "react-toastify";


export function Toast(){
    return (
        <ToastContainer
        class={"pl-10 top-12 right-0 sm:pl-0"}
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"/>
    )
}