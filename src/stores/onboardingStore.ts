import { create } from 'zustand';

interface OnboardingState {
  formData: {
    name: string;
    email: string;
    phone: string;
  };
  setFormData: (data: Partial<OnboardingState['formData']>) => void;
  resetForm: () => void;
}

export const useOnboardingStore = create<OnboardingState>((set) => ({
  formData: {
    name: '',
    email: '',
    phone: '',
  },
  setFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),
  resetForm: () =>
    set({
      formData: {
        name: '',
        email: '',
        phone: '',
      },
    }),
}));