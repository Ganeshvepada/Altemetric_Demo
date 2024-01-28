import React from "react";
import Input from "./Input";
import { AiOutlinePlus } from "react-icons/ai";

const Modal = ({
  isShow,
  setIsShow,
  form,
  handleChange,
  model,
  handleSubmit,
  handleChangeImg,
  setSelectedImage,
  selectedImage,
}: any) => {
  return (
    <>
      <div>
        <div
          id="popup-modal"
          className={`${
            !isShow ? "hidden" : "block"
          } overflow-y-auto overflow-x-hidden bg-gray-400/50 fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
        >
          <div className=" relative p-4 w-full max-w-[50%] max-h-full">
            <div className=" bg-white  rounded-lg shadow dark:bg-gray-700  translate-y-[10%]  translate-x-[55%]">
              <button
                type="button"
                className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="popup-modal"
                onClick={() => setIsShow(!isShow)}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <form onSubmit={handleSubmit}>
                <div>
                  <div className="text-center font-bold text-2xl py-4 bg-black text-white">
                    Fill Brand Details
                  </div>

                  <div className="p-4 md:p-5  grid grid-cols-2 gap-4">
                    <Input
                      labelName={"Model"}
                      textType={"Text"}
                      name={"model"}
                      value={model}
                      placeholder={model}
                      handleChange={handleChange}
                      disable={true}
                    />
                    <Input
                      labelName={"Location"}
                      textType={"Text"}
                      name={"location"}
                      value={form.location}
                      placeholder="Enter location"
                      handleChange={handleChange}
                      disable={false}
                    />
                    <Input
                      labelName={"Fuel Type"}
                      textType={"Text"}
                      name={"fuelType"}
                      value={form.fuelType}
                      placeholder="Enter fuelType"
                      handleChange={handleChange}
                      disable={false}
                    />

                    <Input
                      labelName={"Color"}
                      textType={"Text"}
                      name={"color"}
                      value={form.color}
                      placeholder="Enter color"
                      handleChange={handleChange}
                    />
                    <Input
                      labelName={"No of Owners"}
                      textType={"number"}
                      name={"noOfOwner"}
                      value={form.noOfOwner}
                      placeholder="Enter noOfOwner"
                      handleChange={handleChange}
                    />
                    <Input
                      labelName={"Year of Manufacture"}
                      textType={"number"}
                      name={"yearMft"}
                      value={form.yearMft}
                      placeholder="Enter Year of Manufacture"
                      handleChange={handleChange}
                    />
                    <Input
                      labelName={"Transmission"}
                      textType={"Text"}
                      name={"transmission"}
                      value={form.transmission}
                      placeholder="Enter transmission"
                      handleChange={handleChange}
                    />
                    <Input
                      labelName={"Insurance Up TO"}
                      textType={"Text"}
                      name={"insuranceUpTo"}
                      value={form.insuranceUpTo}
                      placeholder="Enter insurance up to"
                      handleChange={handleChange}
                    />
                    <Input
                      labelName={"External Fitments"}
                      textType={"Text"}
                      name={"externalFitment"}
                      value={form.externalFitment}
                      placeholder="Enter external fitment"
                      handleChange={handleChange}
                    />
                    <Input
                      labelName={"KMS"}
                      textType={"number"}
                      name={"kms"}
                      value={form.kms}
                      placeholder="Enter KMS"
                      handleChange={handleChange}
                    />
                    <div className="col-span-1 h-20 w-32">
                      <div className="flex justify-center items-center h-full rounded-lg bg-slate-200">
                        {selectedImage && (
                          <div className="relative">
                            <img
                              src={selectedImage}
                              alt="Selected"
                              className="object-cover rounded-lg  h-20 w-32 "
                            />
                            <span
                              className="top-0 right-0 rounded-full p-1 text-red-500 cursor-pointer absolute"
                              onClick={() => setSelectedImage("")}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 12.586L5.879 16.707a1 1 0 1 1-1.414-1.414L8.586 11 4.464 6.879a1 1 0 1 1 1.414-1.414L10 9.586l4.121-4.121a1 1 0 1 1 1.414 1.414L11.414 11l4.121 4.121a1 1 0 1 1-1.414 1.414L10 12.586z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          </div>
                        )}
                        <label htmlFor="file-input" className="cursor-pointer">
                          {!selectedImage && (
                            <AiOutlinePlus
                              className="text-gray-400"
                              size={50}
                            />
                          )}
                          <input
                            id="file-input"
                            type="file"
                            accept="image/*"
                            className="sr-only"
                            multiple={false}
                            onChange={handleChangeImg}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <button
                      type="button"
                      className="text-gray-700 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                      onClick={() => setIsShow(false)} // This will close the modal
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
