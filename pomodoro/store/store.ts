import { create } from 'zustand';

interface TimeState {
    workTime: number;
    smallPause: number;
    increaseWorkTime: (num: number) => void;
    decreaseWorkTime: (num: number) => void;
    increaseSmallPause: (pa: number) => void;
    decreaseSmallPause: (pa: number) => void;
}

export const workTimeStore = create<TimeState>()((set) => ({
    workTime: 25,
    smallPause: 5,
    increaseWorkTime: (num) => set((state) => ({ workTime: state.workTime + num })),
    decreaseWorkTime: (num) => set((state) => ({ workTime: state.workTime - num })),
    increaseSmallPause: (pa) => set((state) => ({ smallPause: state.smallPause + pa })),
    decreaseSmallPause: (pa) => set((state) => ({ smallPause: state.smallPause - pa })),
}));
