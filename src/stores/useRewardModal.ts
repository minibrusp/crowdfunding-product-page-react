import { create } from "zustand"

type RewardModal = {
    isModalOpen: boolean,
    setIsModalOpen: () => void,
    setIsModalClose: () => void,
}

export const useRewardModal = create<RewardModal>() ((set, get) => ({
    isModalOpen: false,

    setIsModalOpen: () => {
        set({ isModalOpen: true})
    },
    setIsModalClose: () => {
        set({ isModalOpen: false})
    }
}))