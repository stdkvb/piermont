"use client";
import { useModalStore } from "@/store/modal";
import { Drawer, DrawerContent, DrawerClose, Button } from "../ui";

export const Modal = () => {
  const { active, modalContent, closeModal, openModal } = useModalStore();

  return (
    <Drawer
      open={active}
      onOpenChange={(isOpen) => {
        if (!isOpen) closeModal();
      }}
    >
      <DrawerContent className="h-[75vh] sm:h-full bg-white justify-center items-center">
        <DrawerClose
          onClick={closeModal}
          className="absolute top-[32px] right-[16px] sm:right-[64px] xl:right-[90px] w-fit p-0"
        >
          <svg
            className="w-[36px] h-[36px] sm:w-[54px] sm:h-[54px]"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27 53.5C12.3645 53.5 0.5 41.6355 0.5 27C0.5 12.3645 12.3645 0.5 27 0.5C41.6355 0.5 53.5 12.3645 53.5 27C53.5 41.6355 41.6355 53.5 27 53.5Z"
              stroke="#565656"
            />
            <path
              d="M19 35L34.5563 19.4437"
              stroke="#193232"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19 35L34.5563 19.4437"
              stroke="#193232"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M35 35L19.4437 19.4437"
              stroke="#193232"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </DrawerClose>
        {modalContent}
      </DrawerContent>
    </Drawer>
  );
};
