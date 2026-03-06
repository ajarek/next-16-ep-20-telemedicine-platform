import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import type { Visit } from "@/types/typeVisit"

type RegisterState = {
  items: Visit[]
  addItemToRegister: (item: Visit) => void
  removeItemFromRegister: (id: number) => void
}

export const useRegisterStore = create<RegisterState>()(
  persist(
    (set, get) => ({
      items: [],

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
