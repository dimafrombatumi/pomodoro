import { create } from 'zustand'


interface TimeState {
    workTime: number,
    increaseWorkTime: (by: number) => void,
    decreaseWorkTime: (by: number) => void,
}

export const workTimeStore = create<TimeState>()((set) => ({
    workTime: 25,
    increaseWorkTime: (by) => set((state) => ({ workTime: state.workTime + 1 })),
    decreaseWorkTime: (by) => set((state) => ({ workTime: state.workTime - 1 })),
}))
