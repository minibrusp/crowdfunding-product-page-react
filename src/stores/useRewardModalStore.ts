import { create } from "zustand"

type RewardModal = {
    isModalOpen: boolean,
    isPledgeSuccess: boolean,
    ModalRewardsRefs: HTMLDivElement[]
    setIsModalOpen: () => void,
    setIsModalClose: () => void,
    AddModalRewardsRefs: (el: HTMLDivElement, index: number) => void,
    setIsPledgeSuccess: () => void,
    resetIsPledgeSuccess: () => void
}

export const useRewardModalStore = create<RewardModal>() ((set, get) => ({
    isModalOpen: false,
    isPledgeSuccess: false,
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
    },
    setIsPledgeSuccess: () => {
        set({ isPledgeSuccess: true })
    },
    resetIsPledgeSuccess: () => {
        set({ isPledgeSuccess: false })
    }
}))