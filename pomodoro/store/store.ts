import { create } from 'zustand';

interface TimeState {
    workTime: number;
    smallPause: number;
    roundsAll: number;
    roundsDone: number;
    increaseWorkTime: (num: number) => void;
    decreaseWorkTime: (num: number) => void;
    increaseSmallPause: (pa: number) => void;
    decreaseSmallPause: (pa: number) => void;
    increaseRoundsAll: (pa: number) => void;
    decreaseRoundsAll: (pa: number) => void;
    increaseRoundsDone: (pa: number) => void;
    decreaseRoundsDone: (pa: number) => void;
}

export const workTimeStore = create<TimeState>()((set) => ({
    workTime: 25,
    smallPause: 5,
    roundsAll: 4,
    roundsDone: 0,
    increaseWorkTime: (num) => set((state) => ({ workTime: state.workTime + num })),
    decreaseWorkTime: (num) => set((state) => ({ workTime: state.workTime - num })),
    increaseSmallPause: (pa) => set((state) => ({ smallPause: state.smallPause + pa })),
    decreaseSmallPause: (pa) => set((state) => ({ smallPause: state.smallPause - pa })),
    increaseRoundsAll: (ra) => set((state) => ({ smallPause: state.smallPause + ra })),
    decreaseRoundsAll: (ra) => set((state) => ({ smallPause: state.smallPause - ra })),
    increaseRoundsDone: (rd) => set((state) => ({ smallPause: state.smallPause + rd })),
    decreaseRoundsDone: (rd) => set((state) => ({ smallPause: state.smallPause - rd })),
}));
