"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Keys from "../../../public/keys98.png";
import Image from "next/image";

export default function Auth({
  handleSubmit,
  setUsername,
  setPassword,
  isOpen,
  setIsOpen,
  closeModal,
  openModal,
}: {
  handleSubmit: any;
  setUsername: any;
  setPassword: any;
  isOpen: any;
  setIsOpen: any;
  closeModal: any;
  openModal: any;
}) {
  return (
    <>
      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="w-full bg-transparent hover:bg-[#010081] hover:text-white hover:border-t-black hover:border-l-black hover:border-b-white hover:border-r-white border-2 border-t-white border-l-white border-b-black border-r-black rounded-sm mt-1 py-2"
        >
          Continue &gt;
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[100]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[300px] transform overflow-hidden rounded-sm bg-[#c3c3c3] border-2 border-b-black border-r-black text-left align-middle shadow-xl transition-all">
                  <div className="flex flex-row items-center w-full bg-[#010081] py-1 px-2">
                    <Image src={Keys} alt="Verify" className="mr-1 w-5 h-5" />
                    <span className="text-white">Verify</span>
                    <button
                      onClick={closeModal}
                      className="bg-[#c3c3c3] h-6 w-6 ml-auto -mr-1 text-sm border-2 border-t-white border-l-white border-b-black border-r-black hover:border-t-black hover:border-l-black hover:border-b-white hover:border-r-white"
                    >
                      X
                    </button>
                  </div>

                  <div className="w-full flex flex-col px-2 py-2">
                    <input
                      placeholder="Username"
                      onChange={(e) => setUsername(e.currentTarget.value)}
                      className="w-full border-2 border-t-black border-l-black focus:outline-none rounded-sm p-2"
                      required
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.currentTarget.value)}
                      className="w-full border-2 border-t-black border-l-black focus:outline-none rounded-sm p-2"
                      required
                    />
                    <button
                      type="submit"
                      onClick={(e) => handleSubmit(e)}
                      className="w-full bg-transparent hover:bg-[#010081] hover:text-white hover:border-t-black hover:border-l-black hover:border-b-white hover:border-r-white border-2 border-t-white border-l-white border-b-black border-r-black rounded-sm mt-2 py-2"
                    >
                      Create
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
