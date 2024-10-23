import { create, SetState } from "zustand";
import { ReactNode } from "react";

interface State {
  active: boolean;
  modalContent: ReactNode;
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
}

export const useModalStore = create<State>()((set: SetState<State>) => ({
  active: false,
  modalContent: null,
  openModal: (content: ReactNode) =>
    set({ active: true, modalContent: content }),
  closeModal: () => set({ active: false, modalContent: null }),
}));
