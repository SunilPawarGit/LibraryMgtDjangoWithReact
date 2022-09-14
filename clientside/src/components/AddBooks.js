import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Axios from "axios";

function AddBooks({ id, books, setIsSubmit, setId }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const def = { bookName: '', authorName: '', language: '', genre: '' }
  const onSub = (data) => {
    setIsSubmit(true);
    Axios.post(`http://localhost:8000`, data).then((response) =>
      console.log(response.data)
    );
    reset(def)

  };
  const onUpdate = (data) => {


    Axios.post(`http://localhost:8000/update/${id}`, data).then((response) => {
      console.log(response.data);
      setIsSubmit(true);
    }
    ).catch(err => console.log(err));
    reset(def)
    setId(null);
  };
  useEffect(() => {

    reset(def)

    books.filter((data) => data.BookId === id).map((data) => reset(data))

  }, [id, reset, books])

  return (
    <div className="flex">
      <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
        <div className="relative bg-white ml-8 rounded-lg shadow border">
          <div className="py-12 px-12 lg:px-14">
            <h1 className="mb-4 pl-3 text-center text-3xl font-medium">
              Add Books
            </h1>
            <form onSubmit={handleSubmit(id === null ? onSub : onUpdate)} className="space-y-6 pt-8">
              <label
                htmlFor="font_name"
                className="mb-2 text-sm font-medium text-center"
              >
                Book Name
              </label>

              <input
                type="text"
                id="book_name"
                className="block w-full text-sm text-center shadow-lg bg-transparent border-2 border-b-2 appearance-none dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 flex-row"
                {...register("bookName", { required: true })}
              />
              {errors.bookName && (
                <p className="text-red-700 text-sm">This Field Is Required</p>
              )}
              <label
                htmlFor="author_name"
                className="block mb-2 text-sm font-medium"
              >
                Author Name
              </label>
              <input
                type="text"
                id="author_name"
                className="block w-full text-sm text-center shadow-lg bg-transparent border-2 border-b-2 appearance-none dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 flex-row"
                {...register("authorName", { required: true })}
              />
              {errors.authorName && (
                <p className="text-red-700 text-sm">This Field Is Required</p>
              )}
              <label
                htmlFor="language"
                className="block mb-2 text-sm font-medium"
              >
                Language
              </label>
              <input
                type="text"
                id="language"
                className="block w-full text-sm text-center shadow-lg bg-transparent border-2 border-b-2 appearance-none dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 flex-row"
                {...register("language", { required: true })}
              />
              {errors.language && (
                <p className="text-red-700 text-sm">This Field Is Required</p>
              )}
              <label htmlFor="genre" className="block mb-2 text-sm font-medium">
                Genre
              </label>
              <input
                type="text"
                id="genre"
                className="block w-full text-sm text-center shadow-lg bg-transparent border-2 border-b-2 appearance-none dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 flex-row"
                {...register("genre", { required: true })}
              />
              {errors.genre && (
                <p className="text-red-700 text-sm">This Field Is Required</p>
              )}
              {id === null ? <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                ADD BOOK
              </button> : <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Update Book
              </button>}

            </form>
            <button
              type="button"
              onClick={() => {
                reset(def);
                setId(null);
              }}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Reset
            </button>
            <br></br>

          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBooks;
