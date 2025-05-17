import { create } from 'zustand'


interface TimeState {
    workTime: number,
    increaseWorkTime: (num: number) => void,
    decreaseWorkTime: (num: number) => void,
}

export const workTimeStore = create<TimeState>()((set) => ({
    workTime: 25,
    increaseWorkTime: (num) => set((state) => ({ workTime: state.workTime + num })),
    decreaseWorkTime: (num) => set((state) => ({ workTime: state.workTime - num })),
}))
