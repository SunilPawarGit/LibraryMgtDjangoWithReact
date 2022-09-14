import React from 'react'
import Axios from 'axios'
function ViewBooks({ data, setId, setIsSubmit }) {
    const onDelete = () => {
        setIsSubmit(true);
        Axios.post(`http://localhost:8000/delete/${data.BookId}`).then((response) =>
            console.log(response.data)
        ).catch(err => console.log(err));
    }
    return (
        <div >
            <div className="max-w-sm rounded overflow-hidden shadow-lg">

                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{data.bookName}</div>
                    <div className="font-bold text-sm mb-2">{data.authorName}</div>
                    <div className="font-bold text-sm mb-2">{data.language}</div>
                    <div className="font-bold text-sm mb-2">{data.genre}</div>
                </div>
                <button
                    type="button"
                    onClick={() => {
                        setId(data.BookId);
                    }
                    }
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Update
                </button>
                <button
                    type="button"
                    onClick={onDelete}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default ViewBooks
