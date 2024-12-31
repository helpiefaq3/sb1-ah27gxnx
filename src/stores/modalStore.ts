import { create } from 'zustand';

type ModalType = 'analyze' | 'optimize' | 'pricing';

interface ModalState {
  isOpen: boolean;
  type: ModalType | null;
  quantity: number;
  setModal: (type: ModalType, quantity?: number) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  type: null,
  quantity: 1,
  setModal: (type, quantity = 1) => set({ isOpen: true, type, quantity }),
  closeModal: () => set({ isOpen: false, type: null }),
}));