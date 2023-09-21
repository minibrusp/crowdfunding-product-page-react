import { create } from "zustand"

type Reward = {
    "id": number,
    "name": string,
    "description": string,
    "amount": number,
    "stock": number,
    "selected": boolean,
    "noreward"?: boolean
}

type RewardsStore = {
    rewards: Reward[],
    fetchRewards: (data: string) => Promise<void>,
    getRewardsFromLocalStorage: () => {},
    setSelected: (id: number) => void,
    setSelectedReward: (id: number) => void,
    resetSelected: () => void,
    reduceStock: (id: number) => void
}

export const useRewardsStore = create<RewardsStore>() ((set, get) => ({
    rewards: [],
    fetchRewards: async(data) => {
        const response = await fetch(data)
        const result = await response.json()
        set({ rewards:  await result })
        await localStorage.setItem('rewards', JSON.stringify(result))
    },
    getRewardsFromLocalStorage: async () => {
        const rewards = JSON.parse(localStorage.getItem('rewards')!)
        set({ rewards: await rewards })
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
    reduceStock: (id: number) => {
        const rewards = get().rewards
        const updated = rewards.map(reward => {
            if(reward.id === id) {
                return {
                    ...reward,
                    stock: reward.stock - 1
                }
            } else {
                return { ...reward }
            }
        })
        set(() => ({
            rewards: updated
        }))
        localStorage.setItem('rewards', JSON.stringify(updated))
    }
}))