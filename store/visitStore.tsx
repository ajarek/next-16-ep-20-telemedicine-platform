import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import type { Visit } from "@/types/typeVisit"

type RegisterState = {
  items: Visit[]
  currentVisit: Partial<Visit>
  updateCurrentVisit: (visit: Partial<Visit>) => void
  addItemToRegister: (item: Visit) => void
  removeItemFromRegister: (id: number) => void
  clearCurrentVisit: () => void
}

export const useRegisterStore = create<RegisterState>()(
  persist(
    (set) => ({
      items: [],
      currentVisit: {},

      updateCurrentVisit: (visit) =>
        set((state) => ({
          currentVisit: { ...state.currentVisit, ...visit },
        })),

      clearCurrentVisit: () => set({ currentVisit: {} }),

      addItemToRegister: (item: Visit) =>
        set((state) => ({
          items: [item, ...state.items],
        })),

      removeItemFromRegister: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
    }),
    { name: "registerStore", storage: createJSONStorage(() => localStorage) },
  ),
)
