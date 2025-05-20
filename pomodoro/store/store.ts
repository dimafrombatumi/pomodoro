import { create } from 'zustand';

interface TimeState {
    workTime: number;
    smallPause: number;
    roundsAll: number;
    roundsDone: number;
    increaseWorkTime: (num: number) => void;
    decreaseWorkTime: (num: number) => void;
    increaseSmallPause: (sp: number) => void;
    decreaseSmallPause: (sp: number) => void;
    increaseRoundsAll: (ra: number) => void;
    decreaseRoundsAll: (ra: number) => void;
    increaseRoundsDone: (rd: number) => void;
    decreaseRoundsDone: (rd: number) => void;
}

export const workTimeStore = create<TimeState>()((set) => ({
    workTime: 25,
    smallPause: 5,
    roundsAll: 4,
    roundsDone: 0,
    increaseWorkTime: (num) => set((state) => ({ workTime: state.workTime + num })),
    decreaseWorkTime: (num) => set((state) => ({ workTime: state.workTime - num })),
    increaseSmallPause: (sp) => set((state) => ({ smallPause: state.smallPause + sp })),
    decreaseSmallPause: (sp) => set((state) => ({ smallPause: state.smallPause - sp })),
    increaseRoundsAll: (ra) => set((state) => ({ roundsAll: state.roundsAll + ra })),
    decreaseRoundsAll: (ra) => set((state) => ({ roundsAll: state.roundsAll - ra })),
    increaseRoundsDone: (rd) => set((state) => ({ roundsDone: state.roundsDone + rd })),
    decreaseRoundsDone: (rd) => set((state) => ({ roundsDone: state.roundsDone - rd })),
}));
