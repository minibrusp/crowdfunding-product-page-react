import { create } from "zustand"

type Reward = {
    "id": number,
    "name": string,
    "description": string,
    "amount": number,
    "stock": number,
    "selected": boolean
}

type RewardsStore = {
    rewards: Reward[],
    fetchRewards: (data: string) => Promise<void>,
    setSelected: (id: number) => void,
    setSelectedReward: (id: number) => void,
    resetSelected: () => void
}

export const useRewardsStore = create<RewardsStore>() ((set, get) => ({
    rewards: [],
    fetchRewards: async(data) => {
        const response = await fetch(data)
        set({ rewards: await response.json() })
    },
    setSelected: (id: number) => {
        const rewards = get().rewards
        const updated = rewards.map(reward => {
            if(reward.id === id) {
				return {
					...reward,
					selected: true,
				}
			} else return {
					...reward,
					selected: false,
			}
        })
        set(() => ({
            rewards: updated
        }))
    },
    setSelectedReward: (id: number) => {
        const rewards = get().rewards
        const updated = rewards.map(reward => {
            if(reward.id === id) {
                return {
                    ...reward,
                    selected: true,
                }
            } else return {
                ...reward
            }
        })
        set(() => ({
            rewards: updated
        }))
    },
    resetSelected: () => {
        const rewards = get().rewards
        const updated = rewards.map(reward => {
            return {
                ...reward,
                selected: false
            }
        })
        set(() => ({
            rewards: updated
        }))
    },
}))