import { create } from "zustand"

type RewardModal = {
    isModalOpen: boolean,
    ModalRewardsRefs: HTMLDivElement[]
    setIsModalOpen: () => void,
    setIsModalClose: () => void,
    AddModalRewardsRefs: (el: HTMLDivElement, index: number) => void
}

export const useRewardModalStore = create<RewardModal>() ((set, get) => ({
    isModalOpen: false,
    ModalRewardsRefs: [],
    setIsModalOpen: () => {
        set({ isModalOpen: true})
    },
    setIsModalClose: () => {
        set({ isModalOpen: false})
    },
    AddModalRewardsRefs: (el: HTMLDivElement, index: number) => {
        const modalRefs = get().ModalRewardsRefs
        modalRefs[index] = el
        set({ ModalRewardsRefs: modalRefs})
    }
}))