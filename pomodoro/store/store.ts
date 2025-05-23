import { create } from 'zustand';

interface TimeState {
  workTime: number;
  smallPause: number;
  roundsAll: number;
  roundsDone: number;
  newRoundsDone: number;
  goalsDone: number;

  goalsToday: number;
  increaseWorkTime: (num: number) => void;
  decreaseWorkTime: (num: number) => void;
  increaseSmallPause: (sp: number) => void;
  decreaseSmallPause: (sp: number) => void;
  increaseRoundsAll: (ra: number) => void;
  decreaseRoundsAll: (ra: number) => void;
  increaseRoundsDone: (rd: number) => void;
  increaseGoalsDone: (gd: number) => void;
}

export const workTimeStore = create<TimeState>()((set) => ({
  workTime: 1,
  smallPause: 5,
  roundsAll: 2,
  roundsDone: 1,
  newRoundsDone: 0,
  goalsDone: 0,
  goalsToday: 0,
  increaseWorkTime: (num) => set((state) => ({ workTime: state.workTime + num })),
  decreaseWorkTime: (num) => set((state) => ({ workTime: state.workTime - num })),
  increaseSmallPause: (sp) => set((state) => ({ smallPause: state.smallPause + sp })),
  decreaseSmallPause: (sp) => set((state) => ({ smallPause: state.smallPause - sp })),
  increaseRoundsAll: (ra) => set((state) => ({ roundsAll: state.roundsAll + ra })),
  decreaseRoundsAll: (ra) => set((state) => ({ roundsAll: state.roundsAll - ra })),
  increaseRoundsDone: (rd) =>
    set((state) => {
      const newRoundsDone = state.roundsDone + rd;

      const updates: Partial<TimeState> = {
        roundsDone: newRoundsDone,
      };

      if (newRoundsDone == state.roundsAll) {
        updates.goalsDone = state.goalsDone + 1;
        updates.roundsDone = 0;
      }

      return updates;
    }),
  increaseGoalsDone: (gd) =>
    set((state) => {
      const newGoalsDone = state.goalsDone + gd;
      const updates: Partial<TimeState> = {
        goalsDone: newGoalsDone,
      };
      return updates;
    }),
}));
